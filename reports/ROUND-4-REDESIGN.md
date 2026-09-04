# Round 4 — distinctive fabrication art direction

## Design outcome

The Round 3 charcoal/copper presentation used a conventional split hero, repeated service cards, and lengthy project explanations. Round 4 replaces that composition with a pale technical drawing field, deep architectural green, and controlled orange cut-line accents. Original perforated-sheet studies and offset gallery plates make cutting geometry the visual identity.

Five reusable motifs define the system: cut lines, cut-away frames, drawing indices, perforated sheets, and trace/registration marks. Expressive industrial headings, occasional editorial serif accents, and technical monospaced labels use system fonts only.

## Homepage and portfolio

The homepage starts with a new cut-path hero and immediately introduces a dominant study plus two offset secondary plates. An illustrated six-row application index replaces generic service boxes. A six-step fabrication diagram, a differently proportioned second mosaic, five material illustrations, and an orange workshop drawing sheet complete the sequence.

Main homepage copy decreased from approximately 588 words in the Round 3 visual audit to 318 words, about 46%. The count excludes navigation, footer, and decorative SVG annotations. The longest homepage paragraph is nine words. Service routes retain the deeper informational copy.

The portfolio is a gallery with six anchor categories, unequal plate scales, short captions, and native optional detail drawers. Existing stable exterior/interior/ornament anchors remain. Six original vector studies cover facade, partition, ornament, lettering, CNC contours, and panel rhythm. Every current record is explicitly a concept; no fabricated projects, customers, specifications, or cultural authenticity claims were introduced.

## Custom components and assets

New components: `CutPathHero`, `CutStudy`, `ProjectMosaic`, `ProjectPlate`, `ApplicationIndex`, `FabricationFlow`, and `MaterialStrip`. `ProjectCTA` and `PortfolioImage` were redesigned. The obsolete `PortfolioCard` was removed. The service catalogue's former grid now renders as indexed rows.

The SVGs use negative-space masks, original path geometry, layered sheets, leader lines, and unique instance IDs. The three historical Round 3 PNGs are no longer imported or emitted in the release. There are no broken raster-image states; all 13 study instances and their SVG references pass verification. The typed project variant supports verified photographs through Astro image optimization. Replacement instructions are in `docs/IMAGE-REPLACEMENT.md`; design rules are in `docs/VISUAL-SYSTEM.md`.

## Visual critique and iteration

The initial implementation was inspected in the browser, then revised before release:

- Enlarged artwork could create horizontal overflow: contained crops inside cut-away frames.
- Technical labels were too small: raised UI labels to at least 12 CSS pixels and removed redundant plate/application copy.
- The smallest hero concept caption could overlap artwork or clip: repositioned it and added a matching paper surface.
- Lighthouse found low contrast in the workshop label and visible SVG annotations conflicting with link names: darkened the label and kept those decorative annotations only on the unlinked hero illustration.
- Mobile gallery intro lost a space when its desktop line break disappeared: corrected the whitespace.

The resulting site no longer depends on repeated boxed cards, stock visual metaphors, or large paragraphs. The above-the-fold perforated panel, cut typography, and drawing traces establish a specific fabrication identity. Both gallery sequences use different scales and offsets. Mobile uses cropped artwork, staggered pairs, a folded process diagram, and a 3-plus-2 material layout.

## Validation

- Visual review at 320, 390, 768, 1024, 1200, and 1440 pixel viewport widths; no document-level horizontal overflow in the sampled home/gallery/service/contact checks.
- Native mobile menu and gallery detail expansion exercised by keyboard; visible focus confirmed. Gallery category anchors and the hero gallery link tested.
- Reduced-motion stylesheet disables motion. WhatsApp uses the existing real number and contextual messages; no messages were sent.
- `astro check`: 33 files, zero errors, warnings, or hints.
- `npm run build`: pass, 16 static pages.
- `npm run verify`: pass, 395 internal links/anchors, 95 WhatsApp links, 13 labeled vector studies, SVG reference integrity, canonicals, schema, sitemap, and zero client JavaScript.
- Lighthouse 12.8.2, local production build: home and portfolio, mobile and desktop, each scored 100 Performance / 100 Accessibility / 100 Best Practices / 100 SEO. All runs had zero CLS and zero total blocking time. Simulated mobile LCP was about 1.0 second. See `ROUND-4-LIGHTHOUSE.json`.
- Lighthouse was measured after accessibility corrections. The final caption positioning/background and a whitespace correction were subsequently visually checked and passed the final build/verifier; they do not introduce runtime code or asset requests.

These are local lab results, not real-user or production Core Web Vitals. The single stylesheet remains render-blocking to preserve styled first paint. Real project photography remains an operator input and is clearly distinguished from the current studies.

## SEO, scope, and release

Compared with baseline commit `22d36fd`, homepage and portfolio titles/descriptions are identical. The shared layout changes only the browser theme color; canonical and schema generation are unchanged. Business configuration, service data and route source, WhatsApp logic, contact source, robots, sitemap, package dependencies, and Astro configuration are unchanged.

Only `C:\Users\sakaa\workspaces\cuttinglaserlampung.com` was inspected and edited. `krakatoaadvertising.com` and other workspaces were not read, copied, or modified.

This report accompanies the authorized commit `feat: create distinctive visual identity and portfolio-led art direction` on `main`. Remote `main` was checked against the baseline before release. The final response records the resulting commit, push result, and live deployment verification after the commit exists. Hostinger remains the deployment target; no Sites hosting project or alternate deployment was created.
