# Round 5 — production SEO and editorial release audit

Audit date: 5 September 2026 (Asia/Jakarta). Source release: cfa3b5e6fc830acbb4a0f3d002cab5c6c5936a0a (portable preview repair); initial editorial release f09b86559dcd77b61ba1740216941dc8ef0c9ebe. Both pushed to origin main and verified live.

## Scope and release status

Existing Astro 5 static site, GitHub origin main, Hostinger dist deployment. Work is confined to CuttingLaserLampung.com. The approved homepage composition and global visual stylesheet are unchanged; its visual-first body remains approximately 318 words. Navigation adds the article hub, and service pages gain short relevant reading modules.

Production audit ran at 2026-09-05T00:00:20.074Z: 40 intended URLs checked; 0 application errors. See the exact production observations below.

## Exact counts and guard evidence

| Measure | Result |
|---|---:|
| Indexable canonical URLs | 40 |
| Commercial service detail pages | 9 |
| Other indexable pages, including homepage, services index and article hub | 7 |
| Published articles | 24 |
| Draft/future/noindex articles published | 0 |
| HTML pages including noindex 404 | 41 |
| Internal links and anchors checked | 1,467 |
| Broken internal links / anchors | 0 |
| Orphan URLs | 0 |
| Duplicate titles / descriptions / canonicals | 0 / 0 / 0 |
| Canonical / schema / sitemap errors | 0 / 0 / 0 |
| Article contextual WhatsApp coverage | 24 / 24 (100%) |
| Distinct article WhatsApp messages | 24 |
| Related service and portfolio coverage | 24 / 24 each |
| Related articles per article | 2–4 |
| Articles with an incoming related-article link | 24 / 24 |
| Content duplication/value review flags | 0 |
| Client JavaScript delivered | 0 |

Astro check: 49 files, **0 errors, 0 warnings, 0 hints**. Static build: **passed**, 41 HTML pages plus sitemap, robots, and 25 social PNGs. npm run verify: **passed**, including existing business/artwork invariants, link checking, SEO guard, and eight deliberately invalid content regression cases. Draft, future-date, and noindex exclusion regression cases passed. Original artwork remains visibly labeled as illustration; no customer projects, reviews, statistics, capacities, prices, or named authors were invented.

## Topic and editorial intent audit

- Proses & desain: 4 articles.
- Material: 7 articles.
- Aplikasi & arsitektur: 8 articles.
- Perencanaan & konsultasi: 5 articles.

The library contains 15,124 normalized article-body words, 573–724 per article. Length follows the deliberately narrow decision being answered. Each article provides multiple selection criteria, practical examples or checklists, material/process implications, and distinct headings. The guard checks several value signals and substantial paragraph/headings duplication; it does not equate word count with usefulness. Human review remains necessary for future publishing.

Each article stores primary search intent, target user, unique value, cannibalization risk, related service(s), related articles, portfolio category, and a distinct consultation message. The complete intent matrix is in [CONTENT-QUALITY.json](CONTENT-QUALITY.json). Selection articles do not repeat a service landing-page pitch. Existing file-preparation intent remains on /panduan-file-desain-laser-cutting/ instead of creating a duplicate guide. Acrylic/akrilik and fasad/facade are consolidated. MDF/HMR share one differentiated informational comparison. PVC is a material-safety/process-selection guide, not a laser-service claim. Foam composition and unsupported business capabilities remain explicit unknowns.

## Commercial keyword-to-URL map

| Search intent | Dominant commercial destination | Scope / cannibalization control |
|---|---|---|
| cutting laser Lampung; laser cutting Lampung; jasa laser cutting Lampung | [/](https://cuttinglaserlampung.com/) | Primary local brand/service overview; /layanan/ is the navigational service index. |
| CNC router Lampung | [/cnc-router-lampung/](https://cuttinglaserlampung.com/cnc-router-lampung/) | Routing and milling commercial intent. |
| laser cutting plat besi Lampung | [/laser-cutting-plat-besi-lampung/](https://cuttinglaserlampung.com/laser-cutting-plat-besi-lampung/) | Metal cutting service; finishing article supports selection. |
| laser cutting stainless Lampung; huruf timbul stainless Lampung | [/laser-cutting-stainless-lampung/](https://cuttinglaserlampung.com/laser-cutting-stainless-lampung/) | Stainless service; lettering article explains readability and fabrication scope. |
| laser cutting acrylic / akrilik Lampung; huruf timbul acrylic Lampung | [/laser-cutting-acrylic-lampung/](https://cuttinglaserlampung.com/laser-cutting-acrylic-lampung/) | One commercial URL for both spellings; no duplicate akrilik route. |
| laser cutting ACP Lampung | [/laser-cutting-acp-lampung/](https://cuttinglaserlampung.com/laser-cutting-acp-lampung/) | Existing URL retained; composition and method must be verified, not an unrestricted laser claim. |
| laser cutting MDF Lampung | [/laser-cutting-mdf-lampung/](https://cuttinglaserlampung.com/laser-cutting-mdf-lampung/) | MDF commercial intent. |
| laser cutting HMR Lampung | [/laser-cutting-mdf-lampung/](https://cuttinglaserlampung.com/laser-cutting-mdf-lampung/) | Shared board-material discussion supported by MDF/HMR article; HMR label/grade and process require verification. No invented dedicated capability page. |
| laser cutting PVC Lampung | [/cnc-router-lampung/](https://cuttinglaserlampung.com/cnc-router-lampung/) | Alternative-process consultation only. Informational PVC page explicitly excludes PVC from laser processing; CNC suitability remains material-specific. |
| laser cutting spons Lampung | [/layanan/#material](https://cuttinglaserlampung.com/layanan/#material) | Material-identification consultation, supported by foam guide; no unverified machine/process promise. |
| pagar laser cutting Lampung | [/pagar-laser-cutting-lampung/](https://cuttinglaserlampung.com/pagar-laser-cutting-lampung/) | Pagar service; motif selection remains informational. |
| fasad / facade laser cutting Lampung | [/fasad-laser-cutting-lampung/](https://cuttinglaserlampung.com/fasad-laser-cutting-lampung/) | One commercial URL for both language variants. |
| partisi laser cutting Lampung | [/partisi-laser-cutting-lampung/](https://cuttinglaserlampung.com/partisi-laser-cutting-lampung/) | Interior divider service; privacy/light guide supports decisions. |
| railing tangga laser cutting Lampung | [/layanan/#aplikasi](https://cuttinglaserlampung.com/layanan/#aplikasi) | Related decorative-panel consultation only; no claim that a cut panel is a compliant structural guard. |
| ornamen laser cutting Lampung; ornamen Lampung laser cutting; motif Siger laser cutting | [/laser-cutting-plat-besi-lampung/](https://cuttinglaserlampung.com/laser-cutting-plat-besi-lampung/) | Existing fabrication service plus /portfolio/#ornamen. Cultural guide distinguishes contemporary geometric studies from authenticated traditional motifs. |

The last map entries are honest consultation paths, not invented dedicated service pages. New commercial pages require verified business scope and enough distinct useful content. No doorway regency/city pages or spelling-variant pages were created.

## Published article URLs → service → portfolio

Every URL below is published, indexable, linked from [the article hub](https://cuttinglaserlampung.com/artikel/), and included in the sitemap. Portfolio mappings resolve centrally through src/data/portfolio.ts; future verified photo replacements propagate to the article modules.

| Article URL | Cluster | Related commercial services | Portfolio category |
|---|---|---|---|
| [acrylic-bening-opal-warna](https://cuttinglaserlampung.com/artikel/acrylic-bening-opal-warna/) | Material | [laser-cutting-acrylic-lampung](https://cuttinglaserlampung.com/laser-cutting-acrylic-lampung/) | [signage](https://cuttinglaserlampung.com/portfolio/#signage) |
| [finishing-panel-plat-besi](https://cuttinglaserlampung.com/artikel/finishing-panel-plat-besi/) | Material | [laser-cutting-plat-besi-lampung](https://cuttinglaserlampung.com/laser-cutting-plat-besi-lampung/)<br>[pagar-laser-cutting-lampung](https://cuttinglaserlampung.com/pagar-laser-cutting-lampung/) | [material](https://cuttinglaserlampung.com/portfolio/#material) |
| [huruf-timbul-jarak-baca](https://cuttinglaserlampung.com/artikel/huruf-timbul-jarak-baca/) | Aplikasi & arsitektur | [laser-cutting-acrylic-lampung](https://cuttinglaserlampung.com/laser-cutting-acrylic-lampung/)<br>[laser-cutting-stainless-lampung](https://cuttinglaserlampung.com/laser-cutting-stainless-lampung/) | [signage](https://cuttinglaserlampung.com/portfolio/#signage) |
| [laser-cutting-vs-cnc-router](https://cuttinglaserlampung.com/artikel/laser-cutting-vs-cnc-router/) | Proses & desain | [cnc-router-lampung](https://cuttinglaserlampung.com/cnc-router-lampung/)<br>[laser-cutting-plat-besi-lampung](https://cuttinglaserlampung.com/laser-cutting-plat-besi-lampung/) | [cnc](https://cuttinglaserlampung.com/portfolio/#cnc) |
| [mdf-dan-hmr-untuk-interior](https://cuttinglaserlampung.com/artikel/mdf-dan-hmr-untuk-interior/) | Material | [laser-cutting-mdf-lampung](https://cuttinglaserlampung.com/laser-cutting-mdf-lampung/)<br>[cnc-router-lampung](https://cuttinglaserlampung.com/cnc-router-lampung/) | [interior](https://cuttinglaserlampung.com/portfolio/#interior) |
| [memahami-kerf-dan-sambungan](https://cuttinglaserlampung.com/artikel/memahami-kerf-dan-sambungan/) | Proses & desain | [cnc-router-lampung](https://cuttinglaserlampung.com/cnc-router-lampung/)<br>[laser-cutting-acrylic-lampung](https://cuttinglaserlampung.com/laser-cutting-acrylic-lampung/) | [cnc](https://cuttinglaserlampung.com/portfolio/#cnc) |
| [memahami-panel-acp-dan-metode-potong](https://cuttinglaserlampung.com/artikel/memahami-panel-acp-dan-metode-potong/) | Material | [laser-cutting-acp-lampung](https://cuttinglaserlampung.com/laser-cutting-acp-lampung/)<br>[cnc-router-lampung](https://cuttinglaserlampung.com/cnc-router-lampung/) | [eksterior](https://cuttinglaserlampung.com/portfolio/#eksterior) |
| [memilih-motif-pagar](https://cuttinglaserlampung.com/artikel/memilih-motif-pagar/) | Aplikasi & arsitektur | [pagar-laser-cutting-lampung](https://cuttinglaserlampung.com/pagar-laser-cutting-lampung/)<br>[laser-cutting-plat-besi-lampung](https://cuttinglaserlampung.com/laser-cutting-plat-besi-lampung/) | [eksterior](https://cuttinglaserlampung.com/portfolio/#eksterior) |
| [memilih-permukaan-stainless](https://cuttinglaserlampung.com/artikel/memilih-permukaan-stainless/) | Material | [laser-cutting-stainless-lampung](https://cuttinglaserlampung.com/laser-cutting-stainless-lampung/) | [signage](https://cuttinglaserlampung.com/portfolio/#signage) |
| [memilih-spons-foam-untuk-cutting](https://cuttinglaserlampung.com/artikel/memilih-spons-foam-untuk-cutting/) | Material | [cnc-router-lampung](https://cuttinglaserlampung.com/cnc-router-lampung/) | [material](https://cuttinglaserlampung.com/portfolio/#material) |
| [memilih-workshop-laser-cutting-lampung](https://cuttinglaserlampung.com/artikel/memilih-workshop-laser-cutting-lampung/) | Perencanaan & konsultasi | [laser-cutting-plat-besi-lampung](https://cuttinglaserlampung.com/laser-cutting-plat-besi-lampung/)<br>[cnc-router-lampung](https://cuttinglaserlampung.com/cnc-router-lampung/) | [eksterior](https://cuttinglaserlampung.com/portfolio/#eksterior) |
| [mengubah-foto-referensi-menjadi-brief](https://cuttinglaserlampung.com/artikel/mengubah-foto-referensi-menjadi-brief/) | Proses & desain | [partisi-laser-cutting-lampung](https://cuttinglaserlampung.com/partisi-laser-cutting-lampung/)<br>[fasad-laser-cutting-lampung](https://cuttinglaserlampung.com/fasad-laser-cutting-lampung/) | [interior](https://cuttinglaserlampung.com/portfolio/#interior) |
| [menguji-sampel-sebelum-produksi](https://cuttinglaserlampung.com/artikel/menguji-sampel-sebelum-produksi/) | Perencanaan & konsultasi | [cnc-router-lampung](https://cuttinglaserlampung.com/cnc-router-lampung/)<br>[laser-cutting-acrylic-lampung](https://cuttinglaserlampung.com/laser-cutting-acrylic-lampung/) | [cnc](https://cuttinglaserlampung.com/portfolio/#cnc) |
| [mengukur-bidang-sebelum-konsultasi](https://cuttinglaserlampung.com/artikel/mengukur-bidang-sebelum-konsultasi/) | Perencanaan & konsultasi | [pagar-laser-cutting-lampung](https://cuttinglaserlampung.com/pagar-laser-cutting-lampung/)<br>[partisi-laser-cutting-lampung](https://cuttinglaserlampung.com/partisi-laser-cutting-lampung/) | [interior](https://cuttinglaserlampung.com/portfolio/#interior) |
| [menyiapkan-data-penawaran-fabrikasi](https://cuttinglaserlampung.com/artikel/menyiapkan-data-penawaran-fabrikasi/) | Perencanaan & konsultasi | [laser-cutting-plat-besi-lampung](https://cuttinglaserlampung.com/laser-cutting-plat-besi-lampung/)<br>[cnc-router-lampung](https://cuttinglaserlampung.com/cnc-router-lampung/) | [material](https://cuttinglaserlampung.com/portfolio/#material) |
| [merawat-panel-dekoratif](https://cuttinglaserlampung.com/artikel/merawat-panel-dekoratif/) | Aplikasi & arsitektur | [laser-cutting-plat-besi-lampung](https://cuttinglaserlampung.com/laser-cutting-plat-besi-lampung/)<br>[laser-cutting-stainless-lampung](https://cuttinglaserlampung.com/laser-cutting-stainless-lampung/)<br>[laser-cutting-acrylic-lampung](https://cuttinglaserlampung.com/laser-cutting-acrylic-lampung/) | [material](https://cuttinglaserlampung.com/portfolio/#material) |
| [merencanakan-screen-fasad-tropis](https://cuttinglaserlampung.com/artikel/merencanakan-screen-fasad-tropis/) | Aplikasi & arsitektur | [fasad-laser-cutting-lampung](https://cuttinglaserlampung.com/fasad-laser-cutting-lampung/)<br>[laser-cutting-acp-lampung](https://cuttinglaserlampung.com/laser-cutting-acp-lampung/) | [eksterior](https://cuttinglaserlampung.com/portfolio/#eksterior) |
| [ornamen-lampung-dan-siger-kontemporer](https://cuttinglaserlampung.com/artikel/ornamen-lampung-dan-siger-kontemporer/) | Aplikasi & arsitektur | [laser-cutting-plat-besi-lampung](https://cuttinglaserlampung.com/laser-cutting-plat-besi-lampung/)<br>[fasad-laser-cutting-lampung](https://cuttinglaserlampung.com/fasad-laser-cutting-lampung/) | [ornamen](https://cuttinglaserlampung.com/portfolio/#ornamen) |
| [panel-railing-bukan-struktur-utama](https://cuttinglaserlampung.com/artikel/panel-railing-bukan-struktur-utama/) | Aplikasi & arsitektur | [laser-cutting-plat-besi-lampung](https://cuttinglaserlampung.com/laser-cutting-plat-besi-lampung/)<br>[laser-cutting-stainless-lampung](https://cuttinglaserlampung.com/laser-cutting-stainless-lampung/) | [ornamen](https://cuttinglaserlampung.com/portfolio/#ornamen) |
| [partisi-privasi-dan-cahaya](https://cuttinglaserlampung.com/artikel/partisi-privasi-dan-cahaya/) | Aplikasi & arsitektur | [partisi-laser-cutting-lampung](https://cuttinglaserlampung.com/partisi-laser-cutting-lampung/) | [interior](https://cuttinglaserlampung.com/portfolio/#interior) |
| [persetujuan-desain-dan-serah-terima](https://cuttinglaserlampung.com/artikel/persetujuan-desain-dan-serah-terima/) | Perencanaan & konsultasi | [laser-cutting-plat-besi-lampung](https://cuttinglaserlampung.com/laser-cutting-plat-besi-lampung/)<br>[cnc-router-lampung](https://cuttinglaserlampung.com/cnc-router-lampung/) | [material](https://cuttinglaserlampung.com/portfolio/#material) |
| [pola-cutting-jembatan-dan-detail](https://cuttinglaserlampung.com/artikel/pola-cutting-jembatan-dan-detail/) | Proses & desain | [laser-cutting-plat-besi-lampung](https://cuttinglaserlampung.com/laser-cutting-plat-besi-lampung/)<br>[laser-cutting-acrylic-lampung](https://cuttinglaserlampung.com/laser-cutting-acrylic-lampung/) | [ornamen](https://cuttinglaserlampung.com/portfolio/#ornamen) |
| [pvc-bukan-bahan-untuk-laser](https://cuttinglaserlampung.com/artikel/pvc-bukan-bahan-untuk-laser/) | Material | [cnc-router-lampung](https://cuttinglaserlampung.com/cnc-router-lampung/) | [cnc](https://cuttinglaserlampung.com/portfolio/#cnc) |
| [skala-motif-dan-pembagian-panel](https://cuttinglaserlampung.com/artikel/skala-motif-dan-pembagian-panel/) | Aplikasi & arsitektur | [fasad-laser-cutting-lampung](https://cuttinglaserlampung.com/fasad-laser-cutting-lampung/)<br>[pagar-laser-cutting-lampung](https://cuttinglaserlampung.com/pagar-laser-cutting-lampung/)<br>[partisi-laser-cutting-lampung](https://cuttinglaserlampung.com/partisi-laser-cutting-lampung/) | [ornamen](https://cuttinglaserlampung.com/portfolio/#ornamen) |

## Metadata, schema, indexability and local identity

Production visual QA found that the original host rasterizer had no usable installed fonts. This was repaired with licensed IBM Plex Mono glyph outlines generated by OpenType.js before Sharp renders each PNG. Build-time checks reject missing glyphs and any remaining SVG text nodes. Versioned -v2 image URLs avoid cached broken previews. The repaired production artwork was visually inspected and all 25 live social images return valid PNGs. The font is build-only and adds no browser font request or client JavaScript.

Every indexable page has one H1, unique title/description, a self-referencing HTTPS apex canonical, matching OG fields, and a valid 1200×630 social PNG. Article illustration SVGs have reserved space and meaningful accessible titles/captions; a readable HTML legend replaces tiny SVG labels on mobile. Social PNGs are metadata resources, not render-blocking page images. Future portfolio photography retains responsive WebP sizing, dimensions, focal crops, and appropriate loading.

Visible breadcrumbs and BreadcrumbList use the same items. Article schema references the real organization as publisher/author and the existing WebSite/WebPage entities, with the actual publication date and image. Visible editorial attribution and AI-assistance disclosure support that organization attribution. The unimplemented SearchAction was removed. No fake person, review, aggregate rating, or speculative FAQ rich-result schema was added. business.ts remains the verified entity source for address, hours, phone, WhatsApp, Maps, and Google Business Profile.

Sitemap: [/sitemap.xml](https://cuttinglaserlampung.com/sitemap.xml); 40 eligible URLs. Robots allows intended crawling and references this sitemap. The central publication query excludes drafts, future dates, and noindex entries from routes, hub, related reading, social image generation and sitemap. The 404 remains noindex, with its own canonical and a genuine missing-page response.

## Historical URL evidence

Available Git history starts with the current Astro source and subsequent releases; it contains no recoverable pre-Astro route inventory. A public search snapshot exposed an older homepage title, but no evidenced important old deep URL. The homepage URL remains in place. No speculative 301s, catch-all homepage redirects, or fabricated historical URLs were added. If Search Console or host logs expose a real old URL, map it only to a genuinely relevant current page; otherwise retain 404.

## Local Lighthouse release gate

Lighthouse 12.8.2, headless Chrome, local static production build, ten routes × mobile/desktop = 20 runs. These are lab results. All local runs scored 100 Performance, Accessibility, Best Practices and SEO, with CLS 0 and TBT 0. Mobile LCP 790–977 ms; desktop 245–263 ms. Exact timestamps, actual LCP nodes, metrics, and diagnostics: [LIGHTHOUSE-LOCAL.json](LIGHTHOUSE-LOCAL.json).

P / A / BP / SEO means Performance / Accessibility / Best Practices / SEO.

| Route | Mobile P / A / BP / SEO | Desktop P / A / BP / SEO | Mobile LCP ms | Desktop LCP ms |
|---|---|---|---:|---:|
| [/](https://cuttinglaserlampung.com/) | 100 / 100 / 100 / 100 | 100 / 100 / 100 / 100 | 906 | 253 |
| [/layanan/](https://cuttinglaserlampung.com/layanan/) | 100 / 100 / 100 / 100 | 100 / 100 / 100 / 100 | 907 | 245 |
| [/portfolio/](https://cuttinglaserlampung.com/portfolio/) | 100 / 100 / 100 / 100 | 100 / 100 / 100 / 100 | 860 | 255 |
| [/kontak/](https://cuttinglaserlampung.com/kontak/) | 100 / 100 / 100 / 100 | 100 / 100 / 100 / 100 | 790 | 258 |
| [/laser-cutting-acrylic-lampung/](https://cuttinglaserlampung.com/laser-cutting-acrylic-lampung/) | 100 / 100 / 100 / 100 | 100 / 100 / 100 / 100 | 906 | 252 |
| [/pagar-laser-cutting-lampung/](https://cuttinglaserlampung.com/pagar-laser-cutting-lampung/) | 100 / 100 / 100 / 100 | 100 / 100 / 100 / 100 | 906 | 249 |
| [/artikel/](https://cuttinglaserlampung.com/artikel/) | 100 / 100 / 100 / 100 | 100 / 100 / 100 / 100 | 909 | 250 |
| [/artikel/laser-cutting-vs-cnc-router/](https://cuttinglaserlampung.com/artikel/laser-cutting-vs-cnc-router/) | 100 / 100 / 100 / 100 | 100 / 100 / 100 / 100 | 946 | 263 |
| [/artikel/pvc-bukan-bahan-untuk-laser/](https://cuttinglaserlampung.com/artikel/pvc-bukan-bahan-untuk-laser/) | 100 / 100 / 100 / 100 | 100 / 100 / 100 / 100 | 977 | 250 |
| [/artikel/menyiapkan-data-penawaran-fabrikasi/](https://cuttinglaserlampung.com/artikel/menyiapkan-data-penawaran-fabrikasi/) | 100 / 100 / 100 / 100 | 100 / 100 / 100 / 100 | 904 | 247 |

## Real production Lighthouse

Lighthouse 12.8.2, real HTTPS production URLs, 20 runs, **HTTP/1.1 transport**. Mobile Performance 100, desktop Performance 100, all-run SEO 100. These are simulated-throttling lab measurements from this machine, not PageSpeed Insights API results or real-user CrUX/INP evidence. See [LIGHTHOUSE-PRODUCTION.json](LIGHTHOUSE-PRODUCTION.json).

**Transport exception:** all 20 initial default-transport headless Chrome attempts received HTTP 403 through Hostinger hcdn, so they produced no valid scores. A separate HTTP/1.1 diagnostic returned 200 and allowed the full real-production matrix below to run. This uses Chrome flags --disable-http2 and --disable-quic; no site or CDN security setting was changed. It demonstrates a client/transport-dependent response, not the exact host rule responsible. The in-app browser and HTTP URL audit also load the deployed site successfully. Default-transport compatibility remains a Hostinger review item.

The diagnostic 403 had x-hcdn-request-id **069cbc3247163404851c90276f7c27cd-dci-edge4**, timestamp **2026-09-04 23:43:01 UTC**. Google's independent PageSpeed API returned HTTP 429 (daily quota exhausted), so no PageSpeed API score is claimed. See [LIGHTHOUSE-PRODUCTION-TRANSPORT.json](LIGHTHOUSE-PRODUCTION-TRANSPORT.json) for the initial 20 attempts and the successful transport diagnostic, and [Hostinger's request diagnosis](https://www.hostinger.com/support/hostinger-cdn-how-to-fix-blocked-legitimate-requests/).

| Route | Mobile P / A / BP / SEO | Desktop P / A / BP / SEO | Mobile LCP ms | Desktop LCP ms |
|---|---|---|---:|---:|
| [/](https://cuttinglaserlampung.com/) | 100 / 100 / 100 / 100 | 100 / 100 / 100 / 100 | 995 | 346 |
| [/layanan/](https://cuttinglaserlampung.com/layanan/) | 100 / 100 / 100 / 100 | 100 / 100 / 100 / 100 | 1224 | 275 |
| [/portfolio/](https://cuttinglaserlampung.com/portfolio/) | 100 / 100 / 100 / 100 | 100 / 100 / 100 / 100 | 984 | 269 |
| [/kontak/](https://cuttinglaserlampung.com/kontak/) | 100 / 100 / 100 / 100 | 100 / 100 / 100 / 100 | 1227 | 269 |
| [/laser-cutting-acrylic-lampung/](https://cuttinglaserlampung.com/laser-cutting-acrylic-lampung/) | 100 / 100 / 100 / 100 | 100 / 100 / 100 / 100 | 1230 | 350 |
| [/pagar-laser-cutting-lampung/](https://cuttinglaserlampung.com/pagar-laser-cutting-lampung/) | 100 / 100 / 100 / 100 | 100 / 100 / 100 / 100 | 1228 | 347 |
| [/artikel/](https://cuttinglaserlampung.com/artikel/) | 100 / 100 / 100 / 100 | 100 / 100 / 100 / 100 | 1224 | 345 |
| [/artikel/laser-cutting-vs-cnc-router/](https://cuttinglaserlampung.com/artikel/laser-cutting-vs-cnc-router/) | 100 / 100 / 100 / 100 | 100 / 100 / 100 / 100 | 1226 | 353 |
| [/artikel/pvc-bukan-bahan-untuk-laser/](https://cuttinglaserlampung.com/artikel/pvc-bukan-bahan-untuk-laser/) | 100 / 100 / 100 / 100 | 100 / 100 / 100 / 100 | 1228 | 348 |
| [/artikel/menyiapkan-data-penawaran-fabrikasi/](https://cuttinglaserlampung.com/artikel/menyiapkan-data-penawaran-fabrikasi/) | 100 / 100 / 100 / 100 | 100 / 100 / 100 / 100 | 1224 | 347 |

## Actual LCP and performance architecture

- /: section.cut-hero > div.shell > div.hero-title-block > h1#hero-title.
- /portfolio/: div.shell > div.gallery-title-row > h1 > span.cut-word.
- /laser-cutting-acrylic-lampung/: main#main-content > section.page-hero > div.shell > h1.
- /artikel/laser-cutting-vs-cnc-router/: main#main-content > article > header.article-header > h1.

LCP elements are text in these runs, not lazy-loaded photos. Static HTML, inline lightweight SVG, system fonts, no hydration, no initial Maps iframe, and no external fonts/analytics keep the page request graph small. Artwork reserves aspect ratios, and the fixed WhatsApp control does not move layout. No unnecessary image preload is added. A small render-blocking stylesheet is retained for correct first paint; diagnostics can identify it even when all scores are 100. Client INP architecture is simple, but real-user INP cannot be inferred from zero lab blocking time.

## Production HTTP and asset verification

- All 40 canonical pages: HTTP 200, expected title/description/canonical, indexable, parseable JSON-LD, intended article identity, verified Maps and WhatsApp destination.
- 27 distinct live assets checked: 25 social PNGs plus 2 stylesheets; 0 failures.
- Sitemap HTTP 200: 40 URLs; robots HTTP 200.
- Deliberately missing URL: HTTP 404.
- HTTP → HTTPS: 301, destination https://cuttinglaserlampung.com/.
- www response: 301, Location https://cuttinglaserlampung.com/.
- Application audit errors: 0. Detailed statuses, timings, encoding and cache headers: [PRODUCTION-SEO.json](PRODUCTION-SEO.json).

Visual QA covers the approved homepage, premium hub, several article topics, native TOC navigation, comparison tables, service links, portfolio illustrations, and contextual WhatsApp URLs at desktop 1200px and mobile 390px/320px. Narrow comparison tables scroll within their own region rather than widening the document. Keyboard navigation and focus styles remain native and visible. No WhatsApp message was sent.

## Remaining external actions and evidence limits

1. Connect the existing business/domain to Google Search Console using the exact steps in [SEARCH-CONSOLE.md](../docs/SEARCH-CONSOLE.md), then submit [/sitemap.xml](https://cuttinglaserlampung.com/sitemap.xml). Indexing and ranking are not claimed. Domain ownership verification requires the operator's Google/DNS access.
2. Have Hostinger investigate the default-transport Lighthouse 403 using the request ID above and the steps in [HOSTINGER-DEPLOYMENT.md](../docs/HOSTINGER-DEPLOYMENT.md). Then repeat the standard transport matrix. The www-to-apex 301, real 404, and fingerprinted-asset immutable caching are verified working in production.
3. Maintain the verified Business Profile and website identity consistently. Add only permissioned, verified project photography and factual project details when available; current illustrations do not claim completed work.
4. Review Search Console queries, indexing, and real-user Core Web Vitals after data accumulates. New roadmap topics require editorial intent/value review; no automatic bulk publication is scheduled.

The public site can be tested directly; the Hostinger deployment dashboard and Search Console are not available in this session. A live route/metadata match proves the released content is served, not an unobserved dashboard status or Google indexing.

Build-tool maintenance: npm audit also flags the existing Astro 5.x/esbuild and Sharp dependency versions. No untrusted server rendering, server islands, hydrated transitions, or runtime image-upload endpoint is deployed here; all output is static and content is repository-controlled. This release is not a vulnerability-free toolchain certification. Supported framework/native-tool upgrades require a separate compatibility pass; no force-fix or framework-major migration was applied during the approved design/SEO release.
