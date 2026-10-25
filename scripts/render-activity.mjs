// Renders assets/activity-dark.svg and assets/activity-light.svg from public
// GitHub data. Runs in GitHub Actions with the workflow token, which only sees
// public contributions. No dependencies.
import { mkdirSync, writeFileSync } from "node:fs";

const LOGIN = "ratomirjovanovic";
const REPO = "PandaPayLens";
const token = process.env.GITHUB_TOKEN;
if (!token) throw new Error("GITHUB_TOKEN is required");

const query = `query {
  user(login: "${LOGIN}") {
    contributionsCollection {
      totalCommitContributions
      totalPullRequestContributions
      totalIssueContributions
      totalPullRequestReviewContributions
    }
    repository(name: "${REPO}") {
      releases(first: 1, orderBy: { field: CREATED_AT, direction: DESC }) { totalCount nodes { tagName } }
      goodFirst: issues(states: OPEN, labels: ["good first issue"]) { totalCount }
      mergedPRs: pullRequests(states: MERGED) { totalCount }
    }
  }
}`;

const res = await fetch("https://api.github.com/graphql", {
  method: "POST",
  headers: { Authorization: `bearer ${token}`, "Content-Type": "application/json" },
  body: JSON.stringify({ query }),
});
const json = await res.json();
if (!res.ok || json.errors) throw new Error(JSON.stringify(json.errors ?? res.status));
const { contributionsCollection: c, repository: r } = json.data.user;

// The provider count is read from the project README, which CI keeps in sync
// with the adapter registry.
const readme = await (
  await fetch(`https://raw.githubusercontent.com/${LOGIN}/${REPO}/main/README.md`)
).text();
const providers = /(\d+) of (\d+) roadmap providers can be analyzed/.exec(readme);

const activity = [
  ["Commits", c.totalCommitContributions],
  ["Pull requests", c.totalPullRequestContributions],
  ["Issues", c.totalIssueContributions],
  ["Code reviews", c.totalPullRequestReviewContributions],
];
const project = [
  ["Payment providers", providers ? `${providers[1]} / ${providers[2]}` : "-"],
  ["Latest release", r.releases.nodes[0]?.tagName ?? "-"],
  ["Releases", String(r.releases.totalCount)],
  ["Good first issues", String(r.goodFirst.totalCount)],
];

const THEMES = {
  dark: { bg: "#0d1117", border: "#30363d", fg: "#e6edf3", muted: "#8b949e", track: "#21262d", bar: "#3fb950" },
  light: { bg: "#ffffff", border: "#d0d7de", fg: "#1f2328", muted: "#59636e", track: "#eaeef2", bar: "#1a7f37" },
};

const esc = (s) => String(s).replace(/[&<>"]/g, (ch) => `&#${ch.charCodeAt(0)};`);

function render(t) {
  const W = 840;
  const H = 230;
  const total = activity.reduce((s, [, n]) => s + n, 0) || 1;
  const font = `font-family="-apple-system,BlinkMacSystemFont,'Segoe UI','Noto Sans',Helvetica,Arial,sans-serif"`;
  let y = 82;
  const rows = activity
    .map(([label, n]) => {
      const w = Math.round((n / total) * 220);
      const row = `
    <text x="32" y="${y}" fill="${t.muted}" font-size="13">${esc(label)}</text>
    <rect x="140" y="${y - 10}" width="220" height="8" rx="4" fill="${t.track}"/>
    ${w > 0 ? `<rect x="140" y="${y - 10}" width="${w}" height="8" rx="4" fill="${t.bar}"/>` : ""}
    <text x="398" y="${y}" fill="${t.fg}" font-size="13" font-weight="600" text-anchor="end">${n}</text>`;
      y += 34;
      return row;
    })
    .join("");
  y = 82;
  const stats = project
    .map(([label, value]) => {
      const row = `
    <text x="462" y="${y}" fill="${t.muted}" font-size="13">${esc(label)}</text>
    <text x="808" y="${y}" fill="${t.fg}" font-size="13" font-weight="600" text-anchor="end">${esc(value)}</text>`;
      y += 34;
      return row;
    })
    .join("");
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" role="img" aria-labelledby="t d">
  <title id="t">Public GitHub activity and PandaPayLens project facts</title>
  <desc id="d">Public contributions in the last 12 months: ${activity.map(([l, n]) => `${l.toLowerCase()} ${n}`).join(", ")}. PandaPayLens: ${project.map(([l, v]) => `${l.toLowerCase()} ${v}`).join(", ")}.</desc>
  <rect x="0.5" y="0.5" width="${W - 1}" height="${H - 1}" rx="12" fill="${t.bg}" stroke="${t.border}"/>
  <g ${font}>
    <text x="32" y="44" fill="${t.fg}" font-size="15" font-weight="600">Public activity, last 12 months</text>
    <text x="462" y="44" fill="${t.fg}" font-size="15" font-weight="600">PandaPayLens</text>
    <line x1="430" y1="28" x2="430" y2="${H - 28}" stroke="${t.border}"/>${rows}${stats}
  </g>
</svg>
`;
}

mkdirSync("assets", { recursive: true });
for (const [name, theme] of Object.entries(THEMES)) {
  writeFileSync(`assets/activity-${name}.svg`, render(theme));
}
console.log("activity cards written");
