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

Pending the authorized push and production checks. Production results will be recorded after the corrected HTML is observed on the live domain; a Git push alone is not deployment evidence.

The known Round 5 Hostinger/headless-Chrome transport limitation remains tracked in [LIGHTHOUSE-PRODUCTION-TRANSPORT.json](LIGHTHOUSE-PRODUCTION-TRANSPORT.json). Production Lighthouse uses explicitly labeled HTTP/1.1 diagnostic transport; this correction does not claim to change host/CDN transport behavior or establish field Core Web Vitals.

## Scope isolation

All repository work was confined to `C:\Users\sakaa\workspaces\cuttinglaserlampung.com`. No other workspace was read, copied, or modified.
