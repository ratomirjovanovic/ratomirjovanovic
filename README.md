<picture>
  <source media="(prefers-color-scheme: light)" srcset="assets/header-light.svg">
  <img src="assets/header-dark.svg" width="100%" alt="Ratomir Jovanovic, software engineer and founder. Fintech, security and product engineering.">
</picture>

I build software for payments, security and the products around them. My focus is on tools that make complex systems understandable: clear failure modes, honest documentation and privacy by default.

## Featured open source

### [PandaPayLens](https://github.com/ratomirjovanovic/PandaPayLens)

A local-first payment error decoder and transaction timeline visualizer. Paste an API response, webhook or postback and see what the provider reported, what the code means, which events belong together and what looks wrong. Nothing leaves the browser.

<a href="https://ratomirjovanovic.github.io/PandaPayLens/">
  <img src="https://raw.githubusercontent.com/ratomirjovanovic/PandaPayLens/main/docs/media/social-preview.png" width="100%" alt="PandaPayLens: decode provider errors, rebuild the event timeline and catch duplicate, late and conflicting webhooks, locally in the browser.">
</a>

- Deterministic analysis: structural provider detection, documented error catalogs, correlation by explicit identifiers and explainable diagnostic rules.
- Adapters for card processors, wallets, pay-by-bank and high-risk billing providers, each with an honest capability manifest.
- Privacy by design: redaction before analysis, identifiers masked in exports, strict Content Security Policy, no server-side processing.
- Static demo on GitHub Pages, offline CLI, and a Next.js app with a passkey-protected admin area.

[Live demo](https://ratomirjovanovic.github.io/PandaPayLens/) · [Documentation](https://github.com/ratomirjovanovic/PandaPayLens/wiki) · [Releases](https://github.com/ratomirjovanovic/PandaPayLens/releases) · [Good first issues](https://github.com/ratomirjovanovic/PandaPayLens/labels/good%20first%20issue)

## Engineering focus

| Area                 | What I work on                                                                                   |
| -------------------- | ------------------------------------------------------------------------------------------------ |
| Payments and fintech | provider APIs, webhooks and postbacks, decline and error semantics, payment lifecycles           |
| Security             | data minimization, redaction, passkey (WebAuthn) authentication, RBAC, audit trails, CSP        |
| Product engineering  | developer tools, clear UX for complex data, documentation that matches the code                 |
| Delivery             | testing (unit, property-based, end-to-end), CI, static analysis, reproducible releases          |

**Technologies:** TypeScript, Node.js, React, Next.js, Tailwind CSS, PostgreSQL (Neon), Drizzle ORM, Vitest, fast-check, Playwright, GitHub Actions, Vercel.

## Activity

<picture>
  <source media="(prefers-color-scheme: light)" srcset="assets/activity-light.svg">
  <img src="assets/activity-dark.svg" width="100%" alt="Public GitHub activity in the last 12 months and current PandaPayLens project facts.">
</picture>

<sub>Generated daily from public GitHub data by a workflow in this repository. GitHub's own contribution graph below is the authoritative view.</sub>

## Elsewhere

- Website: [ratomir.com](https://ratomir.com)
- Contributions are welcome on [PandaPayLens](https://github.com/ratomirjovanovic/PandaPayLens/blob/main/CONTRIBUTING.md). Security issues: please use [private vulnerability reporting](https://github.com/ratomirjovanovic/PandaPayLens/security/advisories/new).
