# Google Search Console readiness

Canonical production origin: https://cuttinglaserlampung.com

Sitemap to submit: **https://cuttinglaserlampung.com/sitemap.xml**

## Operator steps

1. Sign in to Google Search Console with the account that should own the property. Choose Add property and enter `cuttinglaserlampung.com` as a Domain property, without a protocol or path. This covers protocol and subdomain variants.
2. Copy the DNS verification record supplied by Google. Add that exact record at the authoritative DNS provider, then return to Search Console and verify. Keep the verification record after verification. Do not invent or reuse a token from an example.
3. In Sitemaps, submit the canonical sitemap URL above. Confirm that Search Console can fetch it. A successful sitemap fetch does not mean every URL is indexed.
4. Use URL Inspection on the homepage, article hub, a service page, and representative articles. Run the live test, inspect the canonical selected by Google, and request indexing where appropriate.
   If Google's live test reports 403/429, review Hostinger CDN rules with the request evidence in `reports/LIGHTHOUSE-PRODUCTION-TRANSPORT.json`. A local headless-audit block does not by itself establish that verified Googlebot is blocked; use the actual Search Console live result.
5. Review Page indexing for exclusions, crawl failures, and canonical issues. Inspect historical URLs that receive impressions or external links. Only add a permanent redirect when a known old URL has a genuinely equivalent current destination.
6. After data appears, compare queries and landing pages. Commercial terms should primarily lead to existing service pages; articles should support informational decisions. Merge or refocus overlapping content when actual query evidence supports doing so.
7. Review Core Web Vitals once sufficient field data exists. Lighthouse is a repeatable lab test; it does not establish real-user INP or field performance.

A URL-prefix property for `https://cuttinglaserlampung.com/` is an alternative if Domain verification cannot be used. The site supports the optional HTML verification token in `business.analytics.searchConsoleVerification`; leave it empty until Google supplies the actual token. No analytics or tracking script is required for DNS verification.

Official references: [adding a property](https://support.google.com/webmasters/answer/34592?hl=en), [ownership verification](https://support.google.com/webmasters/answer/9008080?hl=en-EN), and [building/submitting a sitemap](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap).

No Search Console connection, sitemap submission, indexing, ranking, or rich-result appearance is claimed by this release. These require the operator's account and Google's subsequent processing.
