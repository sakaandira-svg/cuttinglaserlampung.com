import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://cuttinglaserlampung.com',
  trailingSlash: 'always',
  output: 'static',
  compressHTML: true,
});
