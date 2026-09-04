# Performance audit — Round 5

The approved static Astro design now includes 24 editorial articles without adding client JavaScript, external fonts, trackers, animation libraries, or an initial Maps iframe. System fonts and reserved SVG aspect ratios preserve the visual identity and avoid font/image layout shifts. Social PNGs are build-time metadata assets, not initial page images.

Local Lighthouse 12.8.2: all 20 mobile/desktop runs scored 100 Performance, Accessibility, Best Practices and SEO, with CLS 0 and TBT 0.

Real production Lighthouse is pending the source deployment; no production score is claimed yet.

Full route/device tables and LCP selectors are in [SEO-FORTRESS-AUDIT.md](SEO-FORTRESS-AUDIT.md), with timestamps and metrics in LIGHTHOUSE-LOCAL.json and LIGHTHOUSE-PRODUCTION.json after production auditing. Lab scores are not field Core Web Vitals or a guarantee of ranking/performance on every connection.

A small render-blocking stylesheet remains necessary for correct initial styling. Production compression/cache headers are recorded by production-audit.mjs. Future photographs use Astro responsive WebP variants and require another crop/layout/performance review.
