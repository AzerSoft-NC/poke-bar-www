import type { APIRoute } from 'astro';
import { siteConfig } from '../config/site.config';
import { withBase } from '../lib/withBase';

export const GET: APIRoute = () => {
  const body = {
    name: siteConfig.name,
    short_name: 'Poke Bar',
    description: siteConfig.description,
    start_url: withBase('/'),
    display: 'standalone',
    background_color: siteConfig.branding.sand,
    theme_color: siteConfig.themeColor,
    lang: siteConfig.lang,
    icons: [
      {
        src: withBase('/favicon.svg'),
        sizes: 'any',
        type: 'image/svg+xml',
        purpose: 'any',
      },
    ],
  };

  return new Response(JSON.stringify(body, null, 2), {
    headers: { 'Content-Type': 'application/manifest+json; charset=utf-8' },
  });
};
