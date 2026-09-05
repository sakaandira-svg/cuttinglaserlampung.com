# Performance audit — Round 5

The approved static Astro design now includes 24 editorial articles without adding client JavaScript, external fonts, trackers, animation libraries, or an initial Maps iframe. System fonts and reserved SVG aspect ratios preserve the visual identity and avoid font/image layout shifts. Social PNGs are build-time metadata assets, not initial page images.

Local Lighthouse 12.8.2: all 20 mobile/desktop runs scored 100 Performance, Accessibility, Best Practices and SEO, with CLS 0 and TBT 0.

Real production Lighthouse over HTTP/1.1: 20 runs; Performance 100, Accessibility 100, Best Practices 100, SEO 100; CLS 0–0, TBT 0–0 ms.

Full route/device tables and LCP selectors are in [SEO-FORTRESS-AUDIT.md](SEO-FORTRESS-AUDIT.md), with timestamps and metrics in LIGHTHOUSE-LOCAL.json and LIGHTHOUSE-PRODUCTION.json after production auditing. Lab scores are not field Core Web Vitals or a guarantee of ranking/performance on every connection.

A small render-blocking stylesheet remains necessary for correct initial styling. Production compression/cache headers are recorded by production-audit.mjs. Future photographs use Astro responsive WebP variants and require another crop/layout/performance review.

Default-transport headless Chrome received CDN HTTP 403 on the initial 20 production attempts and produced no valid scores. The successful production matrix explicitly uses HTTP/1.1; it does not establish that the CDN's default-transport behavior is fixed. Hostinger request evidence and operator next steps are in `LIGHTHOUSE-PRODUCTION-TRANSPORT.json`. The independent PageSpeed API attempt returned quota error 429, so no PageSpeed API score is claimed.

Local Lighthouse measured the unchanged page layout before the social-font repair. The latest portable-preview release passed Astro/build/SEO verification and the complete real-production matrix. Repaired social PNGs were visually checked on Hostinger; the licensed build-only font adds no browser font request.
