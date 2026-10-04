// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';
import { loadEnv } from './src/lib/env.ts';
import { rehypeBaseUrl } from './src/plugins/rehype-base-url.ts';

const { siteUrl, basePath } = loadEnv();

export default defineConfig({
  site: siteUrl,
  base: basePath,
  output: 'static',
  integrations: [sitemap(), icon({ include: { lucide: ['*'] } })],
  markdown: {
    rehypePlugins: [[rehypeBaseUrl, { base: basePath }]],
  },
});
