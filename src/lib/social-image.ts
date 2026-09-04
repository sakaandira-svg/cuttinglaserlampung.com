import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import opentype from 'opentype.js';
import sharp from 'sharp';
import { socialSvg, type Diagram } from './editorial-art';

// Build-only font: outlines make raster output independent of host font packages.
// The font and its SIL OFL license are kept together; neither is sent to browsers.
const bytes = readFileSync(resolve('src/assets/editorial/IBMPlexMono-Bold.ttf'));
const font = opentype.parse(bytes.buffer.slice(bytes.byteOffset, bytes.byteOffset + bytes.byteLength));
const decode = (text: string) => text.replace(/&(?:amp|lt|gt|quot|apos);/g, entity => ({'&amp;':'&','&lt;':'<','&gt;':'>','&quot;':'"','&apos;':"'"}[entity]!));
const attribute = (source: string, name: string) => source.match(new RegExp(`${name}="([^"]+)"`))?.[1];

export function outlinedSocialSvg(title: string, visual?: Diagram) {
  const svg = socialSvg(title, visual);
  const texts = [...svg.matchAll(/<text\b([^>]*)>([^<]*)<\/text>/g)];
  const widestTitle = Math.max(...texts.filter(m => attribute(m[1], 'font-size') === '38').map(m => font.getAdvanceWidth(decode(m[2]), 38)));
  const titleSize = Math.min(38, 38 * 450 / widestTitle);
  const outlined = svg.replace(/<text\b([^>]*)>([^<]*)<\/text>/g, (_, attrs: string, encoded: string) => {
    const text = decode(encoded);
    for (const character of text) if (!/\s/.test(character) && font.charToGlyphIndex(character) === 0) throw new Error(`Social font is missing glyph: ${character}`);
    const originalSize = Number(attribute(attrs, 'font-size'));
    let size = originalSize === 38 ? titleSize : originalSize;
    if (originalSize === 19) size = Math.min(size, size * 238 / font.getAdvanceWidth(text, size));
    const x = Number(attribute(attrs, 'x')), y = Number(attribute(attrs, 'y'));
    const path = font.getPath(text, x, y, size).toPathData(2);
    return `<path d="${path}" fill="${attribute(attrs, 'fill')}"/>`;
  });
  if (/<text\b/.test(outlined)) throw new Error('Social artwork still depends on host fonts');
  return outlined;
}

export async function socialPng(title: string, visual?: Diagram) {
  return new Uint8Array(await sharp(Buffer.from(outlinedSocialSvg(title, visual))).png().toBuffer());
}
