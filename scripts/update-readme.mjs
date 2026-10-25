// Updates the generated sections of README.md from public GitHub data:
// pull requests reviewed in other people's repositories. Runs in GitHub
// Actions with the workflow token. No dependencies.
import { readFileSync, writeFileSync } from "node:fs";

const LOGIN = "ratomirjovanovic";
const token = process.env.GITHUB_TOKEN;
if (!token) throw new Error("GITHUB_TOKEN is required");

async function search(q) {
  const url = `https://api.github.com/search/issues?q=${encodeURIComponent(q)}&sort=updated&order=desc&per_page=30`;
  const res = await fetch(url, {
    headers: { Authorization: `bearer ${token}`, Accept: "application/vnd.github+json" },
  });
  if (!res.ok) throw new Error(`search failed: ${res.status}`);
  return (await res.json()).items ?? [];
}

const repoOf = (item) => item.repository_url.replace("https://api.github.com/repos/", "");
const esc = (s) => s.replace(/[|<>[\]]/g, (c) => `\\${c}`);

const reviewed = (await search(`type:pr reviewed-by:${LOGIN} -user:${LOGIN} is:public`))
  .filter((i) => i.user?.login !== LOGIN)
  .slice(0, 10);

const rows = reviewed.map(
  (i) => {
    const title = i.title.length > 90 ? `${i.title.slice(0, 87).trimEnd()}...` : i.title;
    return `| [${repoOf(i)}](https://github.com/${repoOf(i)}) | [#${i.number}](${i.html_url}) ${esc(title)} |`;
  },
);
const block = rows.length
  ? ["| Project | Pull request reviewed |", "| --- | --- |", ...rows].join("\n")
  : "_No public reviews yet._";

const readme = readFileSync("README.md", "utf8");
const start = "<!-- reviews:start -->";
const end = "<!-- reviews:end -->";
const i = readme.indexOf(start);
const j = readme.indexOf(end);
if (i === -1 || j === -1) throw new Error("README markers not found");
const next = `${readme.slice(0, i + start.length)}\n${block}\n${readme.slice(j)}`;
if (next !== readme) writeFileSync("README.md", next);
console.log(`reviews: ${rows.length}`);
