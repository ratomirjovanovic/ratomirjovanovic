<picture>
  <source media="(prefers-color-scheme: light)" srcset="assets/header-light.svg">
  <img src="assets/header-dark.svg" width="100%" alt="Ratomir Jovanovic. Payments and security engineering, founder of Payshen. 18 years across SaaS, fintech and payments.">
</picture>

<p>
  <a href="https://linkedin.com/in/ratomir"><img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=flat-square&logo=linkedin&logoColor=white" alt="LinkedIn"></a>
  <a href="https://x.com/heyratomir"><img src="https://img.shields.io/badge/@heyratomir-000000?style=flat-square&logo=x&logoColor=white" alt="X: @heyratomir"></a>
</p>

I have spent 18 years building software across SaaS, fintech and payments, much of it in regulated, audited and security-sensitive environments. Today most of my open-source time goes into [PandaWard](https://github.com/ratomirjovanovic/pandaward), a local application security assessment engine that keeps evidence for every finding and says plainly what it did not test. Alongside it I build payment infrastructure at Payshen, maintain tooling for payment developers and review payment, webhook and auth code in other projects.

## Now

| Venture | Role and focus |
| --- | --- |
| **[PandaWard](https://github.com/ratomirjovanovic/pandaward)** | Maintainer, main open-source project. Local, evidence-based application security assessment as a Go CLI and a Claude Code plugin. |
| **[Payshen](https://www.payshen.com)** | Founder and Managing Director. Payment orchestration: every provider through one integration, each payment routed to the provider most likely to approve it, retried elsewhere only when that is safe, with the reason recorded. |
| **[AMIO](https://getamio.com)** | Founder and Managing Director. Buy now, pay later: connects shoppers, merchants and financing partners so paying in instalments is simple and the terms are clear from the start. |
| **[PandaPayLens](https://github.com/ratomirjovanovic/PandaPayLens)** | Maintainer. Open-source, local-first payment error decoder and transaction timeline visualizer. |
| **[afend](https://afend.com)** | Founder. Guided ISO/IEC 27001:2022 readiness, from risk register to an auditor-ready handoff. |

## Open source

### [PandaWard](https://github.com/ratomirjovanovic/pandaward)

Application security assessment for your own repositories that also tells you what it did not test. Most scanners print alerts and stop; PandaWard keeps a ledger of every control it could check, how it checked it and the redacted evidence, and lists every control it could not decide. Passive by default, network tests only after a person approves the scope. Formerly PenSec, renamed in 0.2.0.

<a href="https://ratomirjovanovic.github.io/pandaward/demo/">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/ratomirjovanovic/pandaward/main/docs/media/findings-dark.png">
    <img src="https://raw.githubusercontent.com/ratomirjovanovic/pandaward/main/docs/media/findings-light.png" width="100%" alt="PandaWard findings explorer for a deliberately vulnerable sample app: confirmed and suspected findings with severity, file and control">
  </picture>
</a>

- **Honest coverage:** only PASS and FAIL are decisive; blocked, unsupported or suspected controls never count as secure.
- **Evidence, not opinions:** each finding links to a redacted, SHA-256 addressed evidence record and is fingerprinted across runs, so a fix counts only when the check runs again.
- **No AI-confirmed findings:** review agents can only record hypotheses, and the engine reads and redacts the cited lines itself.
- **Wide static coverage:** secrets, injection sinks, CI/CD, containers, Terraform, Android and iOS manifests, webhooks, MCP and LLM output reaching exec sinks.
- **Reports and CI:** HTML, Markdown, JSON, SARIF 2.1.0 and CSV, with a `--fail-on` gate. Release binaries are reproducible, with checksums, an SBOM and signed provenance.

```text
/plugin marketplace add ratomirjovanovic/pandaward
/plugin install pandaward@pandaward            # macOS and Linux
/plugin install pandaward-windows@pandaward    # Windows
/pandaward:scan
```

[Live demo](https://ratomirjovanovic.github.io/pandaward/demo/) · [Website](https://ratomirjovanovic.github.io/pandaward/) · [Docs](https://github.com/ratomirjovanovic/pandaward/wiki) · [Quick start](https://github.com/ratomirjovanovic/pandaward#quick-start) · [Releases](https://github.com/ratomirjovanovic/pandaward/releases) · [Roadmap](https://github.com/ratomirjovanovic/pandaward#roadmap)

### [PandaPayLens](https://github.com/ratomirjovanovic/PandaPayLens)

Paste an API response, webhook or postback and see what the provider reported, what the code means, which events belong together and what looks wrong. Nothing leaves the browser.

<a href="https://ratomirjovanovic.github.io/PandaPayLens/media/pandapaylens-demo.mp4">
  <img src="https://raw.githubusercontent.com/ratomirjovanovic/PandaPayLens/main/docs/media/pandapaylens-demo-play.jpg" width="100%" alt="Play the 60 second PandaPayLens demo video: a synthetic Adyen log with two authorizations for one order is analyzed and a possible double charge is flagged.">
</a>

- **Deterministic analysis:** structural provider detection, documented error catalogs, correlation by explicit identifiers and explainable diagnostic rules.
- **Wide coverage:** card processors, wallets, pay-by-bank, crypto and high-risk billing providers, each with an honest capability manifest.
- **Privacy by design:** sensitive data redacted from everything shown or exported, identifiers masked, strict Content Security Policy, no server-side processing.
- **Three ways to run it:** a static demo, an offline CLI and a Next.js app with a passkey-protected admin area.

[Live demo](https://ratomirjovanovic.github.io/PandaPayLens/) · [Demo video (1 min)](https://ratomirjovanovic.github.io/PandaPayLens/media/pandapaylens-demo.mp4) · [Docs](https://github.com/ratomirjovanovic/PandaPayLens/wiki) · [Releases](https://github.com/ratomirjovanovic/PandaPayLens/releases) · [Roadmap](https://github.com/ratomirjovanovic/PandaPayLens/blob/main/ROADMAP.md) · [Good first issues](https://github.com/ratomirjovanovic/PandaPayLens/labels/good%20first%20issue)

### Payshen SDKs

Official client libraries for the [Payshen](https://www.payshen.com) payment orchestration API: payments, captures, voids, refunds, events and webhook verification. Published and maintained on four registries.

<a href="https://www.npmjs.com/package/@payshen/sdk"><img src="https://img.shields.io/npm/v/%40payshen%2Fsdk?style=flat-square&label=npm%20%40payshen%2Fsdk" alt="npm @payshen/sdk"></a>
<a href="https://pypi.org/project/payshen/"><img src="https://img.shields.io/pypi/v/payshen?style=flat-square&label=PyPI%20payshen" alt="PyPI payshen"></a>
<a href="https://packagist.org/packages/payshen/payshen-php"><img src="https://img.shields.io/packagist/v/payshen/payshen-php?style=flat-square&label=Packagist" alt="Packagist payshen/payshen-php"></a>
<a href="https://wordpress.org/plugins/payshen-for-woocommerce/"><img src="https://img.shields.io/wordpress/plugin/v/payshen-for-woocommerce?style=flat-square&label=WordPress.org" alt="WordPress.org plugin"></a>

[PHP](https://github.com/meetsodasoft/payshen-php) · [Python](https://github.com/meetsodasoft/payshen-python) · [WooCommerce](https://github.com/meetsodasoft/payshen-woocommerce)

### Code reviews in other projects

Recent public reviews, mostly payment, webhook and security changes. The last column shows what GitHub recorded after the review: whether the author pushed changes, whether I approved, and whether the pull request was merged.

<!-- reviews:start -->
<sub>22 pull requests in 17 projects · 10 revised by their authors after the review · 7 merged</sub>

| Project | Pull request reviewed | Since the review |
| --- | --- | --- |
| [razorpay/razorpay-node](https://github.com/razorpay/razorpay-node) | [#492](https://github.com/razorpay/razorpay-node/pull/492) Preserve network errors when the API does not respond | Revised, then approved |
| [better-auth/better-auth](https://github.com/better-auth/better-auth) | [#12049](https://github.com/better-auth/better-auth/pull/12049) fix(account): share and guard concurrent provider token refreshes | Revised after review |
| [svix/svix-webhooks](https://github.com/svix/svix-webhooks) | [#2732](https://github.com/svix/svix-webhooks/pull/2732) fix(php,ruby): fallback to case-insensitive header lookup in webhook verify | Open |
| [twilio/twilio-node](https://github.com/twilio/twilio-node) | [#1226](https://github.com/twilio/twilio-node/pull/1226) chore: support HMAC-SHA256 webhook signatures in validateRequest | Open |
| [better-auth/better-auth](https://github.com/better-auth/better-auth) | [#12014](https://github.com/better-auth/better-auth/pull/12014) fix(stripe): refetch subscription in subscription webhooks | Closed |
| [DataDog/dd-trace-js](https://github.com/DataDog/dd-trace-js) | [#10932](https://github.com/DataDog/dd-trace-js/pull/10932) fix(appsec): wrap shared Stripe webhooks methods only once | Closed |
| [paypal/paypal-js](https://github.com/paypal/paypal-js) | [#1100](https://github.com/paypal/paypal-js/pull/1100) fix(paypal-js): only reuse a pending v6 script for the same namespace | Revised after review |
| [standard-webhooks/standard-webhooks](https://github.com/standard-webhooks/standard-webhooks) | [#348](https://github.com/standard-webhooks/standard-webhooks/pull/348) Sign binary payloads byte for byte (JavaScript, Python) | Merged after revision |
| [modelcontextprotocol/go-sdk](https://github.com/modelcontextprotocol/go-sdk) | [#1451](https://github.com/modelcontextprotocol/go-sdk/pull/1451) auth/extauth: send resource in client credentials token requests | Merged after revision |
| [juspay/hyperswitch-web](https://github.com/juspay/hyperswitch-web) | [#1829](https://github.com/juspay/hyperswitch-web/pull/1829) fix: preserve 3DS messages before closing fullscreen frames | Merged |
| [medusajs/medusa](https://github.com/medusajs/medusa) | [#17538](https://github.com/medusajs/medusa/pull/17538) fix(medusa): reject webhooks for nonexistent providers | Merged |
| [payloadcms/payload](https://github.com/payloadcms/payload) | [#19024](https://github.com/payloadcms/payload/pull/19024) fix(plugin-ecommerce): drop cart items from Stripe payment intent metadata | Closed |
<!-- reviews:end -->

### Issues raised in other projects

Problems I found while integrating or reviewing other projects, reported upstream.

<!-- issues:start -->
| Project | Issue | Status |
| --- | --- | --- |
| [cashfree/cashfree-pg-sdk-nodejs](https://github.com/cashfree/cashfree-pg-sdk-nodejs) | [#133](https://github.com/cashfree/cashfree-pg-sdk-nodejs/issues/133) PGVerifyWebhookSignature never checks x-webhook-timestamp, so an old webhook... | Open |
| [go-pay/gopay](https://github.com/go-pay/gopay) | [#558](https://github.com/go-pay/gopay/issues/558) Is there a private way to report a security issue? | Open |
| [payloadcms/payload](https://github.com/payloadcms/payload) | [#19055](https://github.com/payloadcms/payload/issues/19055) plugin-ecommerce: restore the Stripe cart drift check with a metadata digest,... | Open |
| [getlago/lago](https://github.com/getlago/lago) | [#842](https://github.com/getlago/lago/issues/842) \[BUG\]: No private way to report a security issue on GitHub | Open |
| [svix/svix-webhooks](https://github.com/svix/svix-webhooks) | [#2763](https://github.com/svix/svix-webhooks/issues/2763) php: Webhook accepts an empty or non-base64 secret and verifies with an empty... | Fixed |
| [Adyen/adyen-node-api-library](https://github.com/Adyen/adyen-node-api-library) | [#1816](https://github.com/Adyen/adyen-node-api-library/issues/1816) \[Bug\]: HmacValidator accepts a malformed HMAC key as an empty key | Open |
| [golang/go](https://github.com/golang/go) | [#82658](https://github.com/golang/go/issues/82658) x/oauth2: DeviceAccessToken panics on a negative or very large interval | Open |
| [medusajs/medusa](https://github.com/medusajs/medusa) | [#17544](https://github.com/medusajs/medusa/issues/17544) \[Bug\]: Payment providers removed from config are never disabled in payment_pr... | Fixed |
| [supabase/ssr](https://github.com/supabase/ssr) | [#209](https://github.com/supabase/ssr/issues/209) tsconfig.json: outDir without rootDir triggers TS6059 / migration warning whe... | Fixed |
<!-- issues:end -->

### Contributions to other projects

Fixes I wrote for other projects that their maintainers merged.

| Project | Pull request | Merged |
| --- | --- | --- |
| [Adyen/adyen-node-api-library](https://github.com/Adyen/adyen-node-api-library) | [#1817](https://github.com/Adyen/adyen-node-api-library/pull/1817) fix(hmac): reject malformed HMAC keys and compare signatures exactly | 2026-11-03 |
| [Adyen/adyen-dotnet-api-library](https://github.com/Adyen/adyen-dotnet-api-library) | [#1899](https://github.com/Adyen/adyen-dotnet-api-library/pull/1899) fix(hmac): reject an empty HMAC key | 2026-11-03 |
| [Adyen/adyen-java-api-library](https://github.com/Adyen/adyen-java-api-library) | [#2100](https://github.com/Adyen/adyen-java-api-library/pull/2100) fix(hmac): don't include the HMAC key in the invalid key exception | 2026-11-03 |
| [svix/svix-webhooks](https://github.com/svix/svix-webhooks) | [#2768](https://github.com/svix/svix-webhooks/pull/2768) php: fix Webhook::fromRaw | 2026-10-30 |
| [svix/svix-webhooks](https://github.com/svix/svix-webhooks) | [#2765](https://github.com/svix/svix-webhooks/pull/2765) php: reject an empty or non-base64 webhook secret | 2026-10-29 |

<sub>The Adyen fixes follow [#1816](https://github.com/Adyen/adyen-node-api-library/issues/1816), an HMAC validation issue I reported and Adyen confirmed. Related fixes for the PHP, Python, Go and Ruby libraries are in review.</sub>

## Project facts

<picture>
  <source media="(prefers-color-scheme: light)" srcset="assets/activity-light.svg">
  <img src="assets/activity-dark.svg" width="100%" alt="PandaWard at a glance: latest release, control domains, report formats and license.">
</picture>

<sub>This card and the review list above are generated daily from public GitHub data. My contribution activity is GitHub's own overview, below this README.</sub>

## What I work on

| Area | Focus |
| --- | --- |
| Payments and fintech | PSP integrations, orchestration and routing, decline and error semantics, webhooks, settlement and reconciliation |
| Application security | Static analysis and evidence-based assessment, secrets handling, CI/CD and supply chain, webhook and auth review |
| GRC | ISO/IEC 27001 readiness, risk and supplier management, control evidence, secure design |
| Engineering | TypeScript, Go and Python services, API clients and SDKs, testing and CI, documentation that matches the code |

### Toolbox

| Area | Tools |
| --- | --- |
| **Languages** | <img src="https://skillicons.dev/icons?i=go,ts,js,py,php,dart,kotlin" height="40" alt="Go, TypeScript, JavaScript, Python, PHP, Dart, Kotlin"> |
| **Frameworks** | <img src="https://skillicons.dev/icons?i=nodejs,react,nextjs,tailwind,laravel,flutter" height="40" alt="Node.js, React, Next.js, Tailwind CSS, Laravel, Flutter"> |
| **Data and cloud** | <img src="https://skillicons.dev/icons?i=postgres,vercel,aws,gcp" height="40" alt="PostgreSQL, Vercel, AWS, Google Cloud"> <img src="https://img.shields.io/badge/Neon-00E599?style=flat-square&logo=neon&logoColor=black" height="28" alt="Neon serverless Postgres"> |
| **Delivery** | <img src="https://skillicons.dev/icons?i=docker,githubactions,git,bash" height="40" alt="Docker, GitHub Actions, Git, Bash"> |
