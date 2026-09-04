# Portfolio artwork and photograph replacement

`src/data/portfolio.ts` is the shared source for the homepage, gallery, and article application modules. The current six records are original inline SVG concept studies, not completed customer projects. `PortfolioImage.astro` selects the vector study or Astro's optimized photo renderer from the record's `kind`. Each article maps a stable `portfolioId` to this same record, so replacing its asset updates every related article automatically.

## Current artwork

`CutStudy.astro` draws six deterministic patterns: arch slots, lens openings, stepped rhythm, geometric lettering, nested contours, and angled slots. Each is shown with a cut sheet, an offset trace, shallow shadows, and drafting marks. These are visual studies, not fabrication-ready CAD files, material specifications, or authentic traditional motifs.

The homepage and portfolio disclose that the illustrations are concepts. Each plate repeats the label. Accessible SVG titles describe the geometry; instance-specific IDs prevent collisions between masks, gradients, patterns, and titles. No external images or client JavaScript are required.

The three Round 3 PNGs under `src/assets/portfolio/` remain historical source assets. They are no longer imported or emitted into the current build. Their historical prompts remain in `docs/CONCEPT-IMAGE-PROMPTS.md`.

## Replacing a study with verified photography

1. Obtain publication permission and verify the application, material, and project details. Do not infer business claims from a photograph.
2. Add the photograph to `src/assets/portfolio/` and import it in `src/data/portfolio.ts`. Prefer a source at least 1536 pixels wide and preserve its proportions.
3. Preserve the record's stable `id` and complete all shared fields: `code`, `category`, `title`, `description`, Indonesian `alt`, `tags`, `serviceHref`, `serviceLabel`, and WhatsApp `intent`.
4. Replace `kind: 'concept'`, `study`, and `tone` with `kind: 'project'`, the imported `image`, an explicit `focus` such as `'50% 50%'`, the verified `material`, concise `verifiedDetails`, and `permissionConfirmed: true`. Remove speculative study descriptions from the real project record.
5. The renderer automatically switches to WebP photography with responsive widths, dimensions, sizes, loading priority, and the chosen focal point. The plate displays its verified material. Native detail drawers carry brief project information and relevant service/WhatsApp links.
6. Update the page-level introductions to accurately describe the mix of studies and real projects. Keep visible concept labels for remaining studies. The hero is a separate illustration and must retain its own disclosure.
7. The homepage features the first three records and a secondary mosaic from the remaining records. Curate these deliberately when expanding the dataset. The portfolio index uses each record's first tag; additional categories should reflect verified content rather than empty filters.
8. Run `npm run verify` and `npm run build`. Inspect crops, focus rings, captions, and detail drawers at 320px, 390px, tablet, and desktop widths. Rerun Lighthouse after adding photos.

The Round 5 build renders 37 labeled portfolio studies: 13 existing instances plus one in each of 24 articles. Article header diagrams are separate original SVGs. The verifier retains minimum study and provenance checks; update the all-concept expectations and page introductions when introducing real photographs while retaining photo accessibility and provenance checks. Never remove safeguards simply to make a mixed gallery pass.
