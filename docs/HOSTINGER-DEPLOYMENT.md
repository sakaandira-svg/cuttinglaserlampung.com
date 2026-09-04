# Hostinger deployment

## Build contract

- Node.js: 22 LTS, also recorded in `.nvmrc`
- Package manager: npm
- Install: `npm install`
- Build: `npm run build`
- Output: `dist/`
- Runtime: static hosting; no server or database required

In Hostinger, connect the GitHub repository `sakaandira-svg/cuttinglaserlampung.com`, use branch `main`, install dependencies, and publish the `dist` directory according to the selected deployment workflow. Configure the production domain as `https://cuttinglaserlampung.com` and ensure the apex/www redirect policy matches the canonical domain.

## Before deployment

1. Fill genuine business values in `src/config/business.ts`.
2. Run `npm run verify`.
3. Confirm `dist/robots.txt` and `dist/sitemap.xml` reference `https://cuttinglaserlampung.com`.
4. Configure HTTPS and redirect HTTP to HTTPS.
5. Do not commit credentials or environment secrets.

## After deployment

Check the homepage, representative service page, contact CTA, robots, sitemap, canonical tags, 404, mobile layout, and WhatsApp link on the real domain. Production verification is not complete until those checks pass.
