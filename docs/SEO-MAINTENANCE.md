# SEO and editorial maintenance

## Sources of truth

Business identity remains in `src/config/business.ts`; service intent in `src/data/services.ts`; project/concept provenance in `src/data/portfolio.ts`. Articles are Markdown content-collection entries under `src/content/articles/`, using JSON-formatted YAML frontmatter validated by `src/content.config.ts`. There is no client-rendered content or article database.

The entry filename is its stable URL slug. Frontmatter declares title, description, dates, status, noindex, canonical, cluster, primary intent, target keyword cluster, target reader, unique value, overlap risk, services, related articles, portfolio ID, illustration data, sources, takeaway, and contextual WhatsApp message. Avoid spreading article lists across components: all queries use `publishedArticles()`.

## Authoring and review

Use a distinct informational intent. Commercial URLs own service searches. Do not add service pages for HMR, PVC, foam, railing, or other unverified offerings merely to capture a keyword. Explain uncertainty openly and use existing verified service links only where relevant.

Every published article needs 1–3 relevant service mappings, a relevant portfolio category, 2–5 distinct related articles, and a WhatsApp message specific to its intent. `targetKeywordCluster` describes the informational query family; it is editorial metadata, not a repeated keyword block in the page body. Do not use email subjects, mailto links, or email CTAs in articles. Passive business email on Contact or in the footer may remain.

`ArticleConversion.astro` renders the shared conversion module. WhatsApp is the primary action, paired immediately with the verified Maps link. The relevant visual, service links, and compact workshop address follow; related reading closes the page. Articles disable the generic floating WhatsApp control so the inline actions do not compete with an overlay. Keep business details in `src/config/business.ts`; do not paste addresses or destinations into individual articles. Portfolio detail drawers also offer a workshop link. Concepts must keep their illustration disclosure until verified project documentation is supplied.

The visible editorial attribution is the business organization; no fictional expert/person is presented. The hub and article notes disclose AI assistance. Technical references support material/process principles, not claims about workshop machinery. Original diagrams are labeled illustrations, never customer projects. Real project modules update from centralized portfolio data when verified photographs replace studies.

Use real publication/modified dates. Do not silently refresh dates to appear recent. Keep article images and schema consistent with visible content. The default social preview and article-specific PNG previews are produced statically from original SVG via Sharp; they are metadata assets and are not loaded as page LCP images.

Social previews use IBM Plex Mono Bold under the bundled SIL OFL license. OpenType.js converts every text glyph to a path before rasterization, so a fontless Hostinger builder cannot produce missing-glyph boxes. The build rejects unsupported glyphs. `social-paths.ts` versions the image URLs; bump that version when changing the renderer to avoid stale cached previews. The font is used only during builds and does not change the website's system-font typography.

## Release commands

- `npm run verify`: Astro check, static build, rendered link/image/business guard, SEO/content guard, deliberate content/conversion regression fixtures, and regeneration of `reports/CONTENT-GRAPH.md`.
- `npm run audit:content`: intent/relationship/value and duplication checks without a build.
- `npm run audit:lighthouse`: ten representative pages, mobile and desktop, defaulting to a production preview at port 4323. Requires Chrome; set `CHROME_PATH` if automatic detection is unavailable.
- `npm run audit:lighthouse -- --base=https://cuttinglaserlampung.com`: audit the deployed URLs. The SEO gate is exactly 100; performance/accessibility/best-practices gates are at least 95. Full raw reports go to ignored `node_modules/.cache/seo-audit`; compact evidence goes to `reports/`.
- `npm run audit:production`: compare all indexable live pages with the verified metadata inventory and check robots, sitemap, HTTPS, www, missing-page status, schema, and every article's conversion mappings, contextual WhatsApp, Maps actions, and address. Use `-- --out=reports/ROUND-6-PRODUCTION.json` to preserve earlier release evidence.

The rendered conversion guard requires one module per article, WhatsApp followed by Maps, matching service/portfolio/related links, the configured number and address, both direct Maps actions, and no article email action or competing floating CTA. Negative fixtures exercise invalid destinations, missing actions, wrong address, and obsolete email actions. The generated content graph records each article's intent, target keyword cluster, service, portfolio, related reading, contextual message, and workshop action. Review its coverage after authoring changes; an email conversion relationship is never required.

Lighthouse can be narrowed for a targeted recheck with `--paths=/artikel/,/kontak/` and `--devices=mobile`. Never substitute a narrow recheck for the full representative release matrix without explaining its scope.

The Round 5 host returned 403 for default headless Chrome transport but served the same production URLs over HTTP/1.1. `--transport=http1` disables Chrome HTTP/2 and QUIC for an explicitly labeled diagnostic audit; it does not change the website or CDN configuration. Preserve and report the default failure alongside the working matrix. Runtime failures have null scores, never fabricated zero or 100 scores. The operator should have Hostinger review the recorded request IDs, then rerun with the default transport. See `reports/LIGHTHOUSE-PRODUCTION-TRANSPORT.json`.

## Hosting and historical URLs

GitHub `main` remains the only deployment source. Repository `public/.htaccess` supplies a www-to-apex redirect and fingerprinted-asset caching for compatible Apache/LiteSpeed hosting. If the selected Hostinger/CDN deployment path ignores this file, configure the equivalent host-level domain redirect in hPanel; do not add client JavaScript redirects or redirect every 404 to the homepage.

Repository history begins with the current Astro foundation. A public search snapshot showed an older homepage title/contact snippet, but did not establish a reliable old deep-URL mapping. No speculative historical redirects were created. Use Search Console and verified server logs to identify valuable old URLs, then redirect only to an equivalent destination.

Google references: [helpful content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content), [spam policies](https://developers.google.com/search/docs/essentials/spam-policies), and [Article structured data](https://developers.google.com/search/docs/appearance/structured-data/article). Search Console setup is documented separately in `docs/SEARCH-CONSOLE.md`.

## Round 7 publishing contract

Declare topic, layout, release and workshopRelevance in every article. Keep the 24 baseline IDs in scripts/fixtures/round6-article-ids.json stable; the release guard counts new IDs independently of the release label. At least 50 additional published entries and 74 total entries must remain. See docs/ARTICLE-IMAGE-REPLACEMENT.md for the single image manifest and per-article replacement briefs. The hub uses 16 crawlable anchor groups with native details elements, not client filtering or thin category routes.

The explicit historical URL /produk-laser-cutting is configured as a 301 to /portfolio/ in both .htaccess and _redirects. Production audit must confirm the host honors it; arbitrary missing URLs remain 404. Round 7 reports supersede earlier counts and live-status claims. Use reports/ROUND-7-RELEASE.md and the named Round 7 Lighthouse/production evidence.
