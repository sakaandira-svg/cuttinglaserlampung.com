# Round 3 — premium creative redesign

Validated 5 September 2026 (Asia/Jakarta). Existing Astro repository and Hostinger static output retained.

## Experience changes

- Charcoal and warm-neutral surfaces, copper accents, large sans-serif headings paired with editorial serif emphasis, restrained borders, and more generous spacing.
- Homepage sequence: visual hero → early asymmetric gallery → design/material reasoning → six curated application categories → four-step custom-work process → project conversation CTA.
- Portfolio rebuilt as three immersive visual stories with category anchors, large imagery, application tags, design considerations, service links, and contextual WhatsApp actions.
- Interior, exterior, ornament, signage/lettering, material selection, and CNC support are now explicit throughout the experience.
- Copy discusses proportion, privacy, light, context, material surfaces, and production details without invented awards, clients, counts, or machinery claims.
- Mobile navigation uses native HTML details/summary. Sticky WhatsApp includes safe-area spacing; footer and closing CTA retain Maps access and verified hours.

## Photography and truthfulness

No real project photos were supplied in the repository. Three AI-generated concept images are clearly labeled `Ilustrasi konsep`; the homepage and portfolio also explain that these are not completed-project photographs. The gallery never invents customer stories, dates, testimonials, or counts. Real photos can replace or extend typed records in `src/data/portfolio.ts`; see `docs/IMAGE-REPLACEMENT.md` and `docs/CONCEPT-IMAGE-PROMPTS.md`.

## Main files changed

- Pages: `src/pages/index.astro`, `portfolio/index.astro`, `layanan/index.astro`, `kontak/index.astro`, `[slug].astro`, `area-layanan/index.astro`, and `panduan-file-desain-laser-cutting/index.astro`.
- Shared components: Header, Footer, ServiceCard, WhatsAppBar; new PortfolioCard, PortfolioImage, and ProjectCTA.
- System: `src/styles/global.css`, `src/data/portfolio.ts`, `src/data/serviceGroups.ts`, service WhatsApp intents, contextual messages, and `public/favicon.svg`.
- Layout head: theme color and favicon only. Canonical and structured-data architecture retained.
- Verification: repaired a pre-existing phone-display expectation typo; added checks against built HTML for links/anchors, metadata, schemas, images, and conversion destinations.

## Preserved foundations

`src/config/business.ts`, Astro configuration, package manifest/lockfile, robots source, and sitemap source are unchanged. All existing 15 indexable routes and the 404 remain. No new service or location pages, framework hydration, external fonts, animation libraries, analytics, or site dependencies were introduced. No other workspace was read or modified.

## Validation

- `astro check`: passed, 27 files, zero errors/warnings/hints.
- `npm run build`: passed; 16 static pages plus robots and sitemap.
- `npm run verify`: passed, including the production build and 365 internal links/anchors, 94 WhatsApp links, and 7 rendered responsive images.
- Build assertions: single H1 per page, valid JSON-LD, expected canonicals, complete sitemap, Indonesian document language, 404 noindex, image dimensions/srcsets, and zero client JavaScript.
- Browser QA: desktop hero and gallery; mobile homepage/portfolio; keyboard-operated mobile menu; category-anchor navigation; contextual WhatsApp URLs; readable captions; footer/CTA placement. WhatsApp messages were not sent.
- Responsive checks: all seven major templates at 320px with no overflow; homepage and portfolio at 390px; portfolio at 768px and 1440px; service catalog at 1024px. No horizontal overflow found.
- Reduced-motion rules and visible keyboard focus styles retained. Native mobile menu requires no JavaScript.
- `git diff --check`: passed.

## Lighthouse

Lighthouse 12.8.2 against the local production `dist/` build, simulated mobile/desktop throttling, Chrome. These are lab measurements, not Hostinger production or real-user Core Web Vitals. Machine-readable results are in `reports/ROUND-3-LIGHTHOUSE.json`.

| Page / device | Performance | Accessibility | Best Practices | SEO | LCP | CLS | TBT |
|---|---:|---:|---:|---:|---:|---:|---:|
| Homepage / mobile | 100 | 100 | 100 | 100 | 1.6 s | 0 | 0 ms |
| Portfolio / mobile | 100 | 100 | 100 | 100 | 1.6 s | 0 | 0 ms |
| Homepage / desktop | 100 | 100 | 100 | 100 | 0.4 s | 0 | 0 ms |
| Portfolio / desktop | 100 | 100 | 100 | 100 | 0.5 s | 0 | 0 ms |

Initial audit findings (missing favicon and accessible-name mismatch) were fixed and the final audits show no such findings or run warnings. The whole static output is 1,324,261 bytes across 33 files, with 12 WebP variants; the largest served image is 222,000 bytes. No JavaScript files are emitted.

## Release boundary

Ready to publish through the existing Hostinger workflow from `dist/`. The requested source release is a commit to `origin main`; the actual commit and push results are recorded in the task handoff. A GitHub push alone is not evidence that the revised pages have deployed. Confirm the new homepage text `Presisi bertemu` and the redesigned portfolio on the production domain after Hostinger processes the revision.

The validation used the available Node.js v24.19.0 runtime and a temporary npm 10.9.3 CLI inside ignored `.astro/qa-tools/`; the project's documented Node 22 deployment target is unchanged. Lighthouse tooling was also isolated there and is not a site dependency.
