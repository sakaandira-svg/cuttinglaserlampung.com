# Image replacement

Place real, permission-cleared project photos under `public/images/replace/`. Keep descriptive filenames and record the material, application, and visible context for each image.

The current portfolio deliberately uses labeled placeholders and makes no claim that the examples are completed projects. When photos are available, update `src/pages/portfolio/index.astro` with explicit `width`, `height`, useful Indonesian `alt`, and `loading="lazy"` for non-hero images. Keep the first visible image eager-loaded if one is introduced.

Recommended workflow:

1. Resize source photos to the largest display size needed.
2. Export WebP or AVIF where practical and retain a fallback.
3. Confirm the photo actually represents the stated material or application.
4. Run `npm run build` and inspect the portfolio at mobile and desktop widths.
