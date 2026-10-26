// Updates the generated sections of README.md from public GitHub data:
// pull requests reviewed in other people's repositories, with what happened
// after the review. Runs in GitHub Actions with the workflow token. No
// dependencies.
import { readFileSync, writeFileSync } from "node:fs";

const LOGIN = "ratomirjovanovic";
const token = process.env.GITHUB_TOKEN;
if (!token) throw new Error("GITHUB_TOKEN is required");

async function api(path) {
  const res = await fetch(`https://api.github.com/${path}`, {
    headers: { Authorization: `bearer ${token}`, Accept: "application/vnd.github+json" },
  });
  if (!res.ok) throw new Error(`${path} failed: ${res.status}`);
  return res.json();
}

const search = async (q) =>
  (await api(`search/issues?q=${encodeURIComponent(q)}&sort=updated&order=desc&per_page=30`)).items ?? [];

const repoOf = (item) => item.repository_url.replace("https://api.github.com/repos/", "");
const esc = (s) => s.replace(/[|<>[\]]/g, (c) => `\\${c}`);

// What happened after the review, from facts GitHub records: the pull request
// state, my latest review, and whether the author pushed commits after my
// first review. It never claims that a specific suggestion was adopted.
async function outcome(item) {
  const repo = repoOf(item);
  const [reviews, commits] = await Promise.all([
    api(`repos/${repo}/pulls/${item.number}/reviews?per_page=100`),
    api(`repos/${repo}/pulls/${item.number}/commits?per_page=100`),
  ]);
  const mine = reviews.filter((r) => r.user?.login === LOGIN && r.submitted_at);
  const first = mine[0]?.submitted_at;
  const latest = mine.at(-1)?.state;
  const revised = Boolean(first) && commits.some((c) => c.commit.committer.date > first);

  if (item.pull_request?.merged_at) return { text: revised ? "Merged after revision" : "Merged", revised, merged: true };
  if (item.state === "closed") return { text: "Closed", revised };
  if (latest === "APPROVED") return { text: revised ? "Revised, then approved" : "Approved", revised };
  if (revised) return { text: "Revised after review", revised };
  return { text: "Open", revised };
}

const reviewed = (await search(`type:pr reviewed-by:${LOGIN} -user:${LOGIN} is:public`))
  .filter((i) => i.user?.login !== LOGIN)
  .slice(0, 10);

const results = await Promise.all(reviewed.map(async (i) => ({ item: i, ...(await outcome(i)) })));

const rows = results.map(({ item: i, text }) => {
  const title = i.title.length > 80 ? `${i.title.slice(0, 77).trimEnd()}...` : i.title;
  return `| [${repoOf(i)}](https://github.com/${repoOf(i)}) | [#${i.number}](${i.html_url}) ${esc(title)} | ${text} |`;
});

const projects = new Set(results.map((r) => repoOf(r.item))).size;
const revisedCount = results.filter((r) => r.revised).length;
const mergedCount = results.filter((r) => r.merged).length;
const summary = [
  `${results.length} pull requests in ${projects} projects`,
  `${revisedCount} revised by their authors after the review`,
  `${mergedCount} merged`,
].join(" · ");

const block = rows.length
  ? [
      `<sub>${summary}</sub>`,
      "",
      "| Project | Pull request reviewed | Since the review |",
      "| --- | --- | --- |",
      ...rows,
    ].join("\n")
  : "_No public reviews yet._";

const readme = readFileSync("README.md", "utf8");
const start = "<!-- reviews:start -->";
const end = "<!-- reviews:end -->";
const i = readme.indexOf(start);
const j = readme.indexOf(end);
if (i === -1 || j === -1) throw new Error("README markers not found");
const next = `${readme.slice(0, i + start.length)}\n${block}\n${readme.slice(j)}`;
if (next !== readme) writeFileSync("README.md", next);
console.log(`reviews: ${rows.length}, revised: ${revisedCount}, merged: ${mergedCount}`);
