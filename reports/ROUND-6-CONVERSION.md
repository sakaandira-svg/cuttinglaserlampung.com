# Round 6 — article conversion correction

This release applies the supplied conversion-path correction to the existing 24-article library. It adds no article routes or unverified business claims. Earlier Round 5 content and release evidence remain historical records.

## Result

Each article uses one reusable `ArticleConversion.astro` module. Contextual WhatsApp is the primary action, with **Lihat Lokasi Workshop** immediately beside it on desktop and below it on mobile. Relevant portfolio artwork, mapped services, a compact workshop block, and related reading complete the path. Portfolio detail drawers also link to the verified workshop location.

The module uses the approved green/ivory palette, typography, spacing, and existing visual plates. Concept artwork remains explicitly labeled as illustration rather than customer project photography. Articles disable the generic floating WhatsApp control; both inline actions remain available without covering content. No client JavaScript was added.

The article baseline already contained no email CTA. This correction preserves that absence and adds source/rendered regression guards against obsolete email conversion actions. Passive business contact information outside article content remains allowed.

## Required article coverage

| Relationship | Local rendered coverage |
|---|---:|
| ARTICLE → SERVICE COVERAGE | 24 / 24 |
| ARTICLE → PORTFOLIO COVERAGE | 24 / 24 |
| ARTICLE → RELATED ARTICLE COVERAGE | 24 / 24 |
| ARTICLE → WHATSAPP COVERAGE | 24 / 24 |
| ARTICLE → WORKSHOP/MAPS COVERAGE | 24 / 24 |

Every article has an explicit primary intent and target keyword cluster, 1–3 service mappings, a portfolio category, and 2–5 permitted related articles (the current library uses 2–4). The generated [content graph](CONTENT-GRAPH.md) records the complete mapping and the exact contextual WhatsApp message for each article.

## CTA and business validation

- **WHATSAPP CTA VALIDATION:** 24 / 24 modules use `https://wa.me/6281273070930` with the article's distinct, nonempty contextual message. WhatsApp is the module's first action.
- **GOOGLE MAPS CTA VALIDATION:** 24 / 24 modules use `https://maps.app.goo.gl/cpJSqQ58KMznkQkb8` for both the immediate secondary action and the local directions link. The value comes from the verified business configuration.
- **WORKSHOP ADDRESS CONSISTENCY:** 24 / 24 modules match the configured address: Jl. Ryacudu Gg. Al Fajar, Way Dadi, Kec. Sukarame, Kota Bandar Lampung, Lampung 35133, Indonesia.

No new location, showroom facility, testimonial, price, or capability is asserted. Existing supplied opening hours come from the same business configuration.

## Local checks

`npm run verify` passed, including Astro check and `npm run build`: 53 checked files, zero errors/warnings/hints; 41 static HTML pages including the 404 page; 40 indexable URLs; 24 published articles; 1,443 internal links/anchors; 195 WhatsApp links; no client JavaScript. Metadata, canonical, sitemap, schema, and content-quality guards passed with zero reported errors.

Thirteen deliberate content regressions and nine rendered conversion regressions were rejected. Fixtures also confirm five related articles are accepted and passive footer contact information remains allowed. The conversion checks run against both built HTML and deployed article HTML.

Eight targeted local Lighthouse runs covered the homepage, portfolio, motif-pagar article, and PVC safety article on mobile and desktop. All scored **100 performance / 100 accessibility / 100 best practices / 100 SEO**, with CLS 0. This is a bounded correction matrix; the earlier Round 5 ten-page/two-device matrix is preserved separately. Raw summary: [ROUND-6-LIGHTHOUSE-LOCAL.json](ROUND-6-LIGHTHOUSE-LOCAL.json).

Visual inspection covered desktop at 1200 px and mobile at 320 and 390 px. At 320 px the article has no horizontal overflow, both primary/secondary actions are 62 px tall, and no floating article button covers the content. Keyboard navigation from WhatsApp reaches Maps with a visible 3 px focus outline. The motif-pagar article opens the correct portfolio category; its native detail drawer exposes service, WhatsApp, and workshop actions. The PVC article retains a distinct message requesting material identification and an appropriate alternative process.

## Deployment evidence

Implementation commit `52a68d0a2a1759f80a4ea3b950a4f1f5d28a17ec` was pushed to `origin main` on 5 September 2026 at 12:04 WIB. **Production deployment is not confirmed.** The live audit at 12:12 WIB still received the previous article markup across all 24 articles. Fresh-query requests also returned the previous build, with `Last-Modified: Sat, 05 Sep 2026 00:05:22 GMT` and CDN status `DYNAMIC`.

The full [production audit](ROUND-6-PRODUCTION.json) checked 40 URLs and 27 assets. Existing HTTP, metadata, canonical, schema, sitemap, robots, social-image, stylesheet, redirect, and 404 checks passed. The new conversion-module checks failed because the released component was absent: the strict module counters are zero for service, portfolio, contextual WhatsApp, Maps, and address, while related reading is 24 / 24. Those zero counters describe the missing **new component**, not the absence of the older site's service, portfolio, or WhatsApp links. Local coverage in the table above is fully verified; it must not be presented as deployed coverage yet.

GitHub exposes no attached status checks, workflow runs, deployment records, or repository webhooks for this release. This does not rule out a Hostinger GitHub App integration. The available Hostinger browser session redirects to the sign-in screen, so the deployment configuration and build logs cannot yet be inspected. Hostinger sign-in was requested to continue verification; no hosting settings or credentials were changed.

Next: inspect/redeploy the existing project's latest `main` commit through Hostinger, verify the new component on the live domain, rerun `npm run audit:production -- --out=reports/ROUND-6-PRODUCTION.json`, and run the same four-route/two-device production Lighthouse matrix. No Round 6 production Lighthouse score is claimed while the old build is served.

The known Round 5 Hostinger/headless-Chrome transport limitation remains tracked in [LIGHTHOUSE-PRODUCTION-TRANSPORT.json](LIGHTHOUSE-PRODUCTION-TRANSPORT.json). The follow-up production Lighthouse run should explicitly label HTTP/1.1 diagnostic transport if still needed; this correction does not claim to change host/CDN transport behavior or establish field Core Web Vitals.

## Scope isolation

All repository work was confined to `C:\Users\sakaa\workspaces\cuttinglaserlampung.com`. No other workspace was read, copied, or modified.
