# Hostinger deployment

## Build contract

- Node.js: 22 LTS, also recorded in `.nvmrc`
- Package manager: npm
- Install: `npm ci` using the committed lockfile (the existing host workflow may use `npm install`)
- Build: `npm run build`
- Output: `dist/`
- Runtime: static hosting; no server or database required

In Hostinger, connect the GitHub repository `sakaandira-svg/cuttinglaserlampung.com`, use branch `main`, install dependencies, and publish the `dist` directory according to the selected deployment workflow. Configure the production domain as `https://cuttinglaserlampung.com` and ensure the apex/www redirect policy matches the canonical domain.

## Before deployment

1. Verify the business values in `src/config/business.ts` match the operator-supplied data.
2. Run `npm run verify`.
3. Confirm `dist/robots.txt` and `dist/sitemap.xml` reference `https://cuttinglaserlampung.com`.
4. Configure HTTPS and redirect HTTP to HTTPS.
5. Do not commit credentials or environment secrets.

## After deployment

Run `npm run audit:production` after the article hub is live. It checks every verified indexable URL, metadata, canonicals, JSON-LD, article markers, Maps/WhatsApp links, social PNGs, stylesheets, robots, sitemap, HTTPS, www, and a deliberate missing URL. Then run `npm run audit:lighthouse -- --base=https://cuttinglaserlampung.com` for the same ten representative routes on mobile and desktop. Chrome must be installed; set `CHROME_PATH` if necessary. Inspect the deployed homepage, hub, articles, and portfolio on mobile and desktop. Production verification is not complete merely because a push succeeded.

`public/.htaccess` requests a permanent www-to-apex redirect, a real 404 document, and immutable caching for fingerprinted assets on hosts that execute Apache-compatible rules. Some Hostinger static/CDN hosting paths do not execute this file. Inspect the measured production report; if www remains 200 with the apex canonical, configure a path-preserving permanent www-to-apex redirect in the hosting/domain controls. Do not rewrite missing routes to a 200 homepage. Keep HTTP-to-HTTPS enforcement at the existing host layer.

Deployment continues through GitHub main. Do not upload or patch production files manually. Search Console verification is documented separately in `docs/SEARCH-CONSOLE.md`.

## Round 5 CDN audit exception

The deployed pages and assets return 200 to the HTTP audit and load in the in-app browser. Default headless Lighthouse Chrome requests received HTTP 403 through hcdn; the same browser successfully audited the real production URLs using HTTP/1.1. Reproduce the working test with `npm run audit:lighthouse -- --base=https://cuttinglaserlampung.com --transport=http1`. Reports explicitly record this transport restriction; these scores do not prove that the default transport problem has been fixed.

Have Hostinger review `reports/LIGHTHOUSE-PRODUCTION-TRANSPORT.json`, including the URL, timestamp, and `x-hcdn-request-id` of the 403 response. Inspect hPanel → Websites → Dashboard → Performance → CDN → Manage → Security and traffic rules for a false positive affecting legitimate audits. Do not broadly disable protection. After correction, rerun default-transport Lighthouse. The exact CDN rule cannot be determined from public response headers alone. [Hostinger's blocked-request diagnosis](https://www.hostinger.com/support/hostinger-cdn-how-to-fix-blocked-legitimate-requests/) describes the request evidence needed.

## Current status

The existing repository, main branch, verified business entity, and dist output are retained. Current release evidence is in `reports/SEO-FORTRESS-AUDIT.md`, `reports/PRODUCTION-SEO.json`, and `reports/LIGHTHOUSE-PRODUCTION.json` when the post-push audit has completed. Round 3 and Round 4 reports remain historical records.
