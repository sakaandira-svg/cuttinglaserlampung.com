# Performance audit

The Round 4 design uses static Astro HTML, inline SVG, CSS, and system fonts. It ships zero client JavaScript, external fonts, raster portfolio images, autoplay media, analytics, or third-party media requests. Native details elements power mobile navigation and optional gallery information.

The homepage and portfolio each scored 100 Performance, 100 Accessibility, 100 Best Practices, and 100 SEO in Lighthouse 12.8.2 on mobile and desktop against the local production build. All four runs measured zero CLS and zero total blocking time. Simulated mobile LCP was approximately 1.0 second; desktop LCP was approximately 0.2 seconds.

See `reports/ROUND-4-LIGHTHOUSE.json` for recorded results and `reports/ROUND-4-REDESIGN.md` for validation and limitations. These are local lab measurements, not production hosting or real-user Core Web Vitals. Lighthouse still identifies the single CSS request as render-blocking; the stylesheet is retained to avoid unstyled content and visual shifts.

The original vector artwork has explicit viewBoxes and reserved CSS aspect ratios. Shared SVG instances have unique masks, gradients, patterns, and accessible titles. Future verified photographs use Astro WebP variants, explicit dimensions, focal crops, and lazy loading except for a deliberately prioritized leading image. Recheck visual crops and Lighthouse when photography is introduced.
