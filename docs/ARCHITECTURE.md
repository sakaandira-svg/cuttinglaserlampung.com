# Architecture

CuttingLaserLampung.com uses Astro 5 with static output. Content is pre-rendered into HTML for crawlability and low client JavaScript. Service detail URLs are generated from `src/data/services.ts`; the data model keeps the intent map reviewable without duplicating page templates blindly.

- `src/config/business.ts`: only source of truth for real-world business data
- `src/lib/whatsapp.ts`: contextual CTA/message generator
- `src/layouts/`: metadata and shared document shell
- `src/components/`: navigation, breadcrumb, CTA, and service card primitives
- `src/pages/`: intent-led routes
- `src/data/portfolio.ts`: typed concept/project records with image provenance labels
- `src/assets/portfolio/`: source images optimized by Astro
- `src/data/serviceGroups.ts`: curated application navigation
- `scripts/verify.mjs`: release invariants

The site is static-first, has no database, no analytics by default, and no secrets in frontend code.
