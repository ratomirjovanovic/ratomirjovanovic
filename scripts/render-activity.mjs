// Renders assets/activity-dark.svg and assets/activity-light.svg: current
// Pandaward facts from public GitHub data. Contribution counts are left to
// GitHub's own activity overview on the profile, which also counts private
// work. Runs in GitHub Actions with the workflow token. No dependencies.
import { mkdirSync, writeFileSync } from "node:fs";

const OWNER = "ratomirjovanovic";
const REPO = "pandaward";
const token = process.env.GITHUB_TOKEN;
if (!token) throw new Error("GITHUB_TOKEN is required");

const query = `query {
  repository(owner: "${OWNER}", name: "${REPO}") {
    releases(first: 1, orderBy: { field: CREATED_AT, direction: DESC }) { totalCount nodes { tagName } }
    openIssues: issues(states: OPEN) { totalCount }
  }
}`;

const res = await fetch("https://api.github.com/graphql", {
  method: "POST",
  headers: { Authorization: `bearer ${token}`, "Content-Type": "application/json" },
  body: JSON.stringify({ query }),
});
const json = await res.json();
if (!res.ok || json.errors) throw new Error(JSON.stringify(json.errors ?? res.status));
const r = json.data.repository;

// The report formats are read from the project README, so the card follows
// the docs instead of a copy here.
const readme = await (
  await fetch(`https://raw.githubusercontent.com/${OWNER}/${REPO}/main/README.md`)
).text();
const formats = /`pandaward report \[--format \.\.\.\]` \| ([^|]+) \|/.exec(readme);
const formatCount = formats ? formats[1].split(",").length : null;

const tiles = [
  ["Latest release", r.releases.nodes[0]?.tagName ?? "-", `${r.releases.totalCount} releases, alpha`],
  ["Report formats", formatCount ? String(formatCount) : "-", "including SARIF for CI"],
  ["Open issues", String(r.openIssues.totalCount), "roadmap and bugs"],
  ["License", "AGPL-3.0", "no account, no telemetry"],
];

const THEMES = {
  dark: { bg: "#0d1117", border: "#30363d", fg: "#e6edf3", muted: "#8b949e", accent: "#3fb950" },
  light: { bg: "#ffffff", border: "#d0d7de", fg: "#1f2328", muted: "#59636e", accent: "#1a7f37" },
};

const esc = (s) => String(s).replace(/[&<>"]/g, (ch) => `&#${ch.charCodeAt(0)};`);

function render(t) {
  const W = 840;
  const H = 168;
  const font = `font-family="-apple-system,BlinkMacSystemFont,'Segoe UI','Noto Sans',Helvetica,Arial,sans-serif"`;
  const colW = (W - 64) / tiles.length;
  const cells = tiles
    .map(([label, value, note], k) => {
      const x = 32 + k * colW;
      const divider =
        k > 0 ? `<line x1="${x - 12}" y1="64" x2="${x - 12}" y2="${H - 28}" stroke="${t.border}"/>` : "";
      return `${divider}
    <text x="${x}" y="84" fill="${t.muted}" font-size="12">${esc(label)}</text>
    <text x="${x}" y="116" fill="${k === 0 ? t.accent : t.fg}" font-size="26" font-weight="700">${esc(value)}</text>
    <text x="${x}" y="138" fill="${t.muted}" font-size="12">${esc(note)}</text>`;
    })
    .join("");
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" role="img" aria-labelledby="t d">
  <title id="t">Pandaward at a glance</title>
  <desc id="d">${tiles.map(([l, v, n]) => `${l}: ${v} ${n}`.trim()).join(". ")}.</desc>
  <rect x="0.5" y="0.5" width="${W - 1}" height="${H - 1}" rx="12" fill="${t.bg}" stroke="${t.border}"/>
  <g ${font}>
    <text x="32" y="42" fill="${t.fg}" font-size="15" font-weight="600">Pandaward at a glance</text>${cells}
  </g>
</svg>
`;
}

mkdirSync("assets", { recursive: true });
for (const [name, theme] of Object.entries(THEMES)) {
  writeFileSync(`assets/activity-${name}.svg`, render(theme));
}
console.log("project card written");
