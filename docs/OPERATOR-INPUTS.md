# Operator inputs

The site intentionally does not invent real-world business data. Fill these values in `src/config/business.ts` before production launch:

- WhatsApp number in international format, without `+` or spaces
- Public telephone and email
- Exact workshop address
- Google Maps URL and coordinates
- Opening hours
- Google Business Profile URL
- Official social profile URLs
- GA4, GTM, and Search Console IDs, only when genuinely available

After updating the file, run `npm run verify` and inspect every contact/CTA page. Do not publish placeholder contact information as if it were real.
