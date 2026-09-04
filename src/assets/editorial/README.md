# Build-only social image font

IBM Plex Mono Bold, unmodified, distributed under the SIL Open Font License in `OFL.txt`.

Source: https://github.com/google/fonts/tree/main/ofl/ibmplexmono

Downloaded 5 September 2026. `src/lib/social-image.ts` uses OpenType.js to turn the font's glyphs into SVG paths before Sharp rasterizes social previews. This avoids missing glyphs on production builders with no installed fonts. The font is not imported by page CSS, preloaded, or copied to the public output. Browser typography retains the approved system-font stack.
