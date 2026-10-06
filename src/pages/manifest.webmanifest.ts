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
    background_color: '#e6f2ea',
    theme_color: '#1f7a45',
    lang: 'fr',
    icons: [
      {
        src: withBase('/icon-192.png'),
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: withBase('/icon-512.png'),
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
    ],
  };

  return new Response(JSON.stringify(body, null, 2), {
    headers: { 'Content-Type': 'application/manifest+json; charset=utf-8' },
  });
};
