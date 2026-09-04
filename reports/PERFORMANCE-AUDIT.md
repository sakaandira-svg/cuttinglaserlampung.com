# Performance audit

The site is static Astro output with no client framework hydration, no analytics, no autoplay media, and no database requests. CSS is centralized and responsive. Portfolio placeholders avoid shipping large fake images.

Local Lighthouse and Playwright measurement are pending because Node.js is not installed in the current Windows environment. Run them after installing Node 22 LTS and before production launch. Pay particular attention to font loading, mobile LCP, CLS after real images are added, and the fixed WhatsApp bar.
