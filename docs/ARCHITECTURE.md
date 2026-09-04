# Architecture

CuttingLaserLampung.com uses Astro 5 with static output. Content is pre-rendered into HTML for crawlability and zero client JavaScript. Service detail URLs are generated from `src/data/services.ts`; the data model keeps the intent map reviewable without duplicating page templates blindly.

- `src/config/business.ts`: source of truth for real-world business data
- `src/lib/whatsapp.ts`: contextual CTA/message generator
- `src/layouts/`: metadata, schema, and shared document shell
- `src/components/`: original vector studies, cut-path hero, project mosaics, application index, material strip, fabrication flow, navigation, breadcrumbs, and CTA
- `src/pages/`: intent-led static routes
- `src/data/portfolio.ts`: typed concept/project records, stable gallery anchors, and provenance
- `src/assets/portfolio/`: historical source images and future verified project photographs
- `src/data/serviceGroups.ts`: preserved Round 3 application metadata; current visual taxonomy lives in `ApplicationIndex.astro`
- `scripts/verify.mjs`: rendered route, link, business, schema, image, SVG, and zero-client-JavaScript invariants

The site has no database, no analytics by default, and no secrets in frontend code. `docs/VISUAL-SYSTEM.md` records the Round 4 composition and `docs/IMAGE-REPLACEMENT.md` describes the photo migration path. The deployment target remains Hostinger static output from `dist/`.
