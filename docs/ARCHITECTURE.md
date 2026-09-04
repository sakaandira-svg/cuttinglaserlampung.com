# Architecture

CuttingLaserLampung.com uses Astro 5 with static output. Content is pre-rendered into HTML for crawlability and zero client JavaScript. Service detail URLs are generated from `src/data/services.ts`; the data model keeps the intent map reviewable without duplicating page templates blindly.

- `src/config/business.ts`: source of truth for real-world business data
- `src/content.config.ts` and `src/content/articles/*.md`: validated editorial collection, distinct intents, publication controls, diagrams, citations, and relationships
- `src/lib/articles.ts`: one publication query for the hub, article routes, related reading, social images, and sitemap; excludes draft, future, and noindex entries
- `src/lib/editorial-art.ts`: original SVG diagrams and build-time social artwork
- `src/lib/social-image.ts`, `src/lib/social-paths.ts`, and `src/assets/editorial/`: versioned social PNGs with licensed font glyphs converted to SVG paths; no dependency on host-installed fonts and no browser font payload
- `src/pages/artikel/`: editorial hub and static article pages, with native table-of-contents anchors
- `src/pages/media/`: build-time PNG social images; Sharp runs during the build only
- `src/lib/whatsapp.ts`: contextual CTA/message generator
- `src/layouts/`: metadata, schema, and shared document shell
- `src/components/`: original vector studies, cut-path hero, project mosaics, application index, material strip, fabrication flow, navigation, breadcrumbs, and CTA
- `src/pages/`: intent-led static routes
- `src/data/portfolio.ts`: typed concept/project records, stable gallery anchors, and provenance
- `src/assets/portfolio/`: historical source images and future verified project photographs
- `src/data/serviceGroups.ts`: preserved Round 3 application metadata; current visual taxonomy lives in `ApplicationIndex.astro`
- `scripts/verify.mjs`: rendered route, link, business, schema, image, SVG, and zero-client-JavaScript invariants
- `scripts/content-audit.mjs` and `scripts/seo-audit.mjs`: content value/duplication, metadata, publication eligibility, related content, and crawl graph guards
- `scripts/test-content-guards.mjs`: deliberate invalid-content regression cases
- `scripts/lighthouse-audit.mjs` and `scripts/production-audit.mjs`: repeatable local/production performance and deployed SEO audits

The site has no database, no analytics by default, and no secrets in frontend code. `docs/VISUAL-SYSTEM.md` records the Round 4 composition and `docs/IMAGE-REPLACEMENT.md` describes the photo migration path. The deployment target remains Hostinger static output from `dist/`.
