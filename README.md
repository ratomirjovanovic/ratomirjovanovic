<picture>
  <source media="(prefers-color-scheme: light)" srcset="assets/header-light.svg">
  <img src="assets/header-dark.svg" width="100%" alt="Ratomir Jovanovic. Payments and security engineering, founder of Payshen. 18 years across SaaS, fintech and payments.">
</picture>

<p>
  <a href="https://linkedin.com/in/ratomir"><img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=flat-square&logo=linkedin&logoColor=white" alt="LinkedIn"></a>
  <a href="https://x.com/heyratomir"><img src="https://img.shields.io/badge/@heyratomir-000000?style=flat-square&logo=x&logoColor=white" alt="X: @heyratomir"></a>
</p>

I have spent 18 years building software across SaaS, fintech and payments, much of it in regulated, audited and security-sensitive environments. Today I build payment infrastructure and security tooling, from Payshen's routing engine to its SDKs and WooCommerce plugin. On GitHub I maintain open-source tooling for payment developers and review payment and webhook code in other projects.

## Now

| Venture | Role and focus |
| --- | --- |
| **[Payshen](https://www.payshen.com)** | Founder and Managing Director. Payment orchestration: every provider through one integration, each payment routed to the provider most likely to approve it, retried elsewhere only when that is safe, with the reason recorded. |
| **[PandaPayLens](https://github.com/ratomirjovanovic/PandaPayLens)** | Maintainer. Open-source, local-first payment error decoder and transaction timeline visualizer. |
| **[afend](https://afend.com)** | Founder. Guided ISO/IEC 27001:2022 readiness, from risk register to an auditor-ready handoff. |
| **[Nanotesting](https://nanotesting.com)** | Founder. Automated security assessment for websites, APIs and repositories. |
| **[SodaSoft](https://sodasoft.com)** | Founder. Venture studio for software products: design, engineering and launch. |

## Open source

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

Official client libraries for the [Payshen](https://www.payshen.com) payment orchestration API: payments, captures, voids, refunds, events and webhook verification.

[PHP](https://github.com/meetsodasoft/payshen-php) · [Python](https://github.com/meetsodasoft/payshen-python) · [WooCommerce](https://github.com/meetsodasoft/payshen-woocommerce)

### Code reviews in other projects

Recent public reviews, mostly payment, webhook and security changes. The last column shows what GitHub recorded after the review: whether the author pushed changes, whether I approved, and whether the pull request was merged.

<!-- reviews:start -->
<sub>10 pull requests in 10 projects · 5 revised by their authors after the review · 2 merged</sub>

| Project | Pull request reviewed | Since the review |
| --- | --- | --- |
| [n8n-io/n8n](https://github.com/n8n-io/n8n) | [#41561](https://github.com/n8n-io/n8n/pull/41561) feat(Mailchimp Trigger Node): Add webhook signature verification | Merged |
| [juspay/hyperswitch-web](https://github.com/juspay/hyperswitch-web) | [#1824](https://github.com/juspay/hyperswitch-web/pull/1824) fix: validate payment postMessage origins and sources | Merged after revision |
| [stripe/stripe-node](https://github.com/stripe/stripe-node) | [#2848](https://github.com/stripe/stripe-node/pull/2848) Preserve endpointFetch response headers | Open |
| [paypal/paypal-js](https://github.com/paypal/paypal-js) | [#1086](https://github.com/paypal/paypal-js/pull/1086) fix(types): type onApprove per flow and add CardFieldsLiabilityShift union | Revised, then approved |
| [razorpay/razorpay-node](https://github.com/razorpay/razorpay-node) | [#495](https://github.com/razorpay/razorpay-node/pull/495) fix(security): use constant-time comparison for webhook signature validation... | Revised after review |
| [Adyen/adyen-web](https://github.com/Adyen/adyen-web) | [#4273](https://github.com/Adyen/adyen-web/pull/4273) Fix/prevent duplicate 3DS2 challenge completion | Revised after review |
| [stripe/stripe-react-native](https://github.com/stripe/stripe-react-native) | [#2752](https://github.com/stripe/stripe-react-native/pull/2752) fix(payment): map phone, carrier, and trackingNumber in shippingDetails | Open |
| [better-auth/better-auth](https://github.com/better-auth/better-auth) | [#12014](https://github.com/better-auth/better-auth/pull/12014) fix(stripe): refetch subscription in subscription webhooks | Closed |
| [payloadcms/payload](https://github.com/payloadcms/payload) | [#19024](https://github.com/payloadcms/payload/pull/19024) fix(plugin-ecommerce): drop cart items from Stripe payment intent metadata | Revised after review |
| [medusajs/medusa](https://github.com/medusajs/medusa) | [#17489](https://github.com/medusajs/medusa/pull/17489) fix(payment): recompute refunded amount when a refund fails at the provider | Open |
<!-- reviews:end -->

## Project facts

<picture>
  <source media="(prefers-color-scheme: light)" srcset="assets/activity-light.svg">
  <img src="assets/activity-dark.svg" width="100%" alt="PandaPayLens at a glance: supported payment providers, latest release, open good first issues and license.">
</picture>

<sub>This card and the review list above are generated daily from public GitHub data. My contribution activity is GitHub's own overview, below this README.</sub>

## What I work on

| Area | Focus |
| --- | --- |
| Payments and fintech | PSP integrations, orchestration and routing, decline and error semantics, webhooks, settlement and reconciliation |
| Security and GRC | ISO/IEC 27001 readiness, risk and supplier management, control evidence, secure design |
| Engineering | TypeScript, Go and Python services, API clients and SDKs, testing and CI, documentation that matches the code |

### Toolbox

| Area | Tools |
| --- | --- |
| **Languages** | <img src="https://skillicons.dev/icons?i=go,ts,js,py,php,dart,kotlin" height="40" alt="Go, TypeScript, JavaScript, Python, PHP, Dart, Kotlin"> |
| **Frameworks** | <img src="https://skillicons.dev/icons?i=nodejs,react,nextjs,tailwind,laravel,flutter" height="40" alt="Node.js, React, Next.js, Tailwind CSS, Laravel, Flutter"> |
| **Data and cloud** | <img src="https://skillicons.dev/icons?i=postgres,vercel,aws,gcp" height="40" alt="PostgreSQL, Vercel, AWS, Google Cloud"> <img src="https://img.shields.io/badge/Neon-00E599?style=flat-square&logo=neon&logoColor=black" height="28" alt="Neon serverless Postgres"> |
| **Delivery** | <img src="https://skillicons.dev/icons?i=docker,githubactions,git,bash" height="40" alt="Docker, GitHub Actions, Git, Bash"> |
