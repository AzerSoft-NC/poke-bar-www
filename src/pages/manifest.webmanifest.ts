import type { APIRoute } from 'astro';
import { siteConfig } from '../config/site';
import { withBase } from '../lib/withBase';

export const GET: APIRoute = () => {
  const body = {
    name: siteConfig.name,
    short_name: 'Poke Bar',
    description: siteConfig.description,
    start_url: withBase('/'),
    display: 'standalone',
    background_color: '#f7f1e6',
    theme_color: '#e8892c',
    lang: 'fr',
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
