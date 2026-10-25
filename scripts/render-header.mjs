// Renders the profile header (assets/header-dark.svg, assets/header-light.svg).
import { mkdirSync, writeFileSync } from "node:fs";

const THEMES = {
  dark: { bg: "#0d1117", border: "#30363d", fg: "#e6edf3", muted: "#8b949e", accent: "#3fb950", grid: "#161b22" },
  light: { bg: "#ffffff", border: "#d0d7de", fg: "#1f2328", muted: "#59636e", accent: "#1a7f37", grid: "#f6f8fa" },
};

function render(t, id) {
  const W = 840;
  const H = 200;
  const font = `font-family="-apple-system,BlinkMacSystemFont,'Segoe UI','Noto Sans',Helvetica,Arial,sans-serif"`;
  const mono = `font-family="ui-monospace,SFMono-Regular,'SF Mono',Menlo,Consolas,monospace"`;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" role="img" aria-labelledby="t">
  <title id="t">Ratomir Jovanovic. Product leader, ISO 27001 Lead Auditor and author. 18 years across SaaS, fintech and payments.</title>
  <defs>
    <pattern id="g-${id}" width="24" height="24" patternUnits="userSpaceOnUse">
      <path d="M24 0H0V24" fill="none" stroke="${t.grid}" stroke-width="1"/>
    </pattern>
    <linearGradient id="fade-${id}" x1="0" x2="1">
      <stop offset="0" stop-color="${t.bg}" stop-opacity="1"/>
      <stop offset="0.55" stop-color="${t.bg}" stop-opacity="0.6"/>
      <stop offset="1" stop-color="${t.bg}" stop-opacity="0"/>
    </linearGradient>
  </defs>
  <rect x="0.5" y="0.5" width="${W - 1}" height="${H - 1}" rx="12" fill="${t.bg}" stroke="${t.border}"/>
  <rect x="1" y="1" width="${W - 2}" height="${H - 2}" rx="12" fill="url(#g-${id})"/>
  <rect x="1" y="1" width="${W - 2}" height="${H - 2}" rx="12" fill="url(#fade-${id})"/>
  <rect x="40" y="56" width="4" height="88" rx="2" fill="${t.accent}"/>
  <g ${font}>
    <text x="64" y="92" fill="${t.fg}" font-size="36" font-weight="700" letter-spacing="-0.5">Ratomir Jovanovic</text>
    <text x="64" y="126" fill="${t.muted}" font-size="17">Product leader · ISO 27001 Lead Auditor · Author</text>
  </g>
  <g ${mono} font-size="13" fill="${t.muted}">
    <text x="64" y="156">18 years across SaaS, fintech and payments · Dubai · <tspan fill="${t.accent}">ratomir.com</tspan></text>
  </g>
</svg>
`;
}

mkdirSync("assets", { recursive: true });
for (const [name, theme] of Object.entries(THEMES)) {
  writeFileSync(`assets/header-${name}.svg`, render(theme, name));
}
console.log("header written");
