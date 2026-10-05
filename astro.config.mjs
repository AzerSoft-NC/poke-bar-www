// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { loadEnv } from './src/lib/env.ts';
import { rehypeBaseUrl } from './src/plugins/rehype-base-url.ts';

const { siteUrl, basePath } = loadEnv();

export default defineConfig({
  site: siteUrl,
  base: basePath,
  output: 'static',
  trailingSlash: 'never',
  integrations: [sitemap()],
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp',
    },
  },
  markdown: {
    rehypePlugins: [[rehypeBaseUrl, { base: basePath }]],
  },
});
