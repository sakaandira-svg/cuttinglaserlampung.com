# Portfolio image system

`src/data/portfolio.ts` is the shared gallery source for the homepage and portfolio page. `PortfolioImage.astro` uses Astro image processing to produce WebP variants at 480, 800, 1200, and 1536 pixels. Width, height, sizes, alt text, and loading priority are included in static HTML. Gallery images load lazily; the first hero image loads eagerly with high priority. No gallery JavaScript or third-party media requests are needed.

## Current image provenance

The three source PNGs in `src/assets/portfolio/` are AI-generated fictional concept studies made with the built-in image generation tool. They are **not photographs of completed work**. Each image is labeled as a concept in the interface, and the gallery explains its status. There are no invented clients, project dates, counts, testimonials, or material specifications.

- `studi-fasad.png`: exterior screen concept.
- `studi-partisi.png`: interior partition concept.
- `studi-ornamen.png`: ornamental metal and acrylic material concept.

Exact prompts are recorded in `docs/CONCEPT-IMAGE-PROMPTS.md`.

## Adding verified project photographs

1. Obtain permission to publish the real photograph. Confirm its application, material, and any supplied project details. Never infer these facts from appearance alone.
2. Place the source under `src/assets/portfolio/` and import it in `src/data/portfolio.ts`. Prefer a source at least 1536 pixels wide; preserve its proportions. Avoid embedding customer contact details or unapproved information in images or captions.
3. Add a record with a unique `id`, accurate title, Indonesian `alt`, category, caption, service link, WhatsApp intent, and focal point. A real project uses `kind: 'project'`, `permissionConfirmed: true`, and `verifiedDetails`. A concept retains `kind: 'concept'` and its visible disclosure.
4. Write `considerations` from verified project context. Do not leave speculative concept text under a real project photograph. Preserve stable IDs when replacing a record so existing links continue to work.
5. The shared cards automatically change their label to `Dokumentasi proyek` for real project records. Update the page-level gallery introductions and hero caption to describe the actual mix of projects and studies. Do not remove disclosures from any remaining concepts.
6. The homepage currently features the first three records. If expanding the collection, deliberately select featured records and group the portfolio into meaningful categories instead of duplicating images or creating thin routes. Category navigation can be updated in `src/pages/portfolio/index.astro`.
7. Run `npm run verify` and `npm run build`. Check all focal crops and captions at mobile and desktop sizes and rerun Lighthouse after adding large images.

The current verification includes disclosure checks for this all-concept release. Update those expectations when verified photography is introduced; never simply remove the disclosure safeguards.
