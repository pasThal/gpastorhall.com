import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://gpastorhall.com', // Update with your domain
  base: '/',                      // Root-level site
  trailingSlash: 'always',        // Ensures /links/ creates /links/index.html
  output: 'static',
  integrations: [tailwind(), sitemap()],
  outDir: 'dist', // Default output directory (adjust this if customized)
});
