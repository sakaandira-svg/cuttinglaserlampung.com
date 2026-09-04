# Content roadmap — proposals, not published pages

The initial library contains 24 distinct informational guides. Future topics below are editorial candidates only. They do not create routes, sitemap entries, or indexable drafts.

| Candidate | New user value required | Evidence and gate |
| --- | --- | --- |
| Reading a verified material datasheet | Walk through an actual supplied product, its grade, and limitations | Obtain exact product documents and avoid repeating the general material-identification guides |
| A real panel from brief to installation | Explain actual decisions and compromises | Written photo/publication permission, verified project facts, and operator review; never invent a case study |
| Design handoff between architect and fabricator | Show a real anonymized handoff package and responsibilities | Permission to publish, verified workflow, and distinct scope from the approval guide |
| Comparing actual finishing samples | Explain visible differences on documented samples | Real samples, products, conditions, and photos; no untested durability claims |
| Designing a removable maintenance module | Show a verified access/detail solution | Technical review and actual assembly evidence; distinguish from general maintenance advice |
| Material traceability for repeated orders | Maintain consistency between actual batch documents | Verified supplier records and workflow; do not imply certification |
| A documented CNC joint experiment | Report measured results with materials and methods | Actual experiment, measurement uncertainty, photos, and clear limits; no universal kerf values |
| Local ornament conversation with a cultural practitioner | Add verified context and attributed interpretation | Informed consent, accurate attribution, and review by the source; avoid duplicating the existing introductory guide |
| Customer questions from real consultations | Address a recurring unanswered decision | Operator-supplied anonymized questions; remove private information and merge repeated intents |
| Transport constraints for a specific panel assembly | Explain a real planning decision | Verified dimensions, packaging, access, and project permission; no fabricated logistics capability |

## Mandatory publication gate

Before writing: record primary intent, target reader, supporting service, unique value, portfolio relationship, and cannibalization risk. Compare against both article and service maps. A new synonym is not a new intent.

Before publishing: verify factual sources and business claims; inspect useful decisions, examples, tradeoffs, and limitations; check repeated paragraphs and headings; confirm 2–4 related articles and a contextual conversion path. Article length follows the question, not a quota. Automated thresholds flag weak structure but cannot replace editorial review.

Use `status: "draft"` or `noindex: true` while preparing material. Draft, future-dated, and noindex entries are excluded from public article routes, hub, social-image routes, and sitemap by the shared publication query. Do not ship empty drafts for page-count targets. Set publication dates truthfully and update the modified date only for meaningful edits.

Run `npm run verify`, inspect desktop/mobile, and run `npm run audit:lighthouse` before release. After GitHub-to-Hostinger deployment, run `npm run audit:production` and Lighthouse against the real domain. Publish only when the proposed article adds value beyond the existing library.
