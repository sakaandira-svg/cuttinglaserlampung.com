# Performance audit

The Round 3 redesign remains static Astro output with zero client JavaScript, no external fonts, no autoplay media, no analytics, and no third-party media requests. Native mobile navigation and restrained CSS transitions preserve the static-first architecture.

The homepage and portfolio each score 100 Performance, 100 Accessibility, 100 Best Practices, and 100 SEO in Lighthouse 12.8.2 on both mobile and desktop against the local production build. All four runs report zero CLS and zero total blocking time. Mobile LCP is approximately 1.6 seconds in the simulated test.

See `reports/ROUND-3-LIGHTHOUSE.json` for recorded results and `reports/ROUND-3-REDESIGN.md` for scope and limitations. These are local lab results; production hosting and real-user Core Web Vitals need separate measurement after deployment.

Astro produces 12 WebP variants from three concept source images. Explicit dimensions and CSS aspect ratios reserve image space. The leading image is eager-loaded with high priority; lower gallery images are lazy-loaded. Recheck image sizing, focal crops, and Lighthouse when real project photos are added.
