import type { APIRoute } from 'astro';
import { siteConfig } from '../config/site';
import { getMessages } from '../i18n';
import { withBase } from '../lib/withBase';

export const GET: APIRoute = () => {
  const t = getMessages('fr');
  const body = {
    name: siteConfig.name,
    short_name: 'Poke Bar',
    description: t.meta.description,
    start_url: withBase('/'),
    display: 'standalone',
    background_color: '#f7f1e6',
    theme_color: '#1f7a45',
    lang: t.meta.htmlLang,
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
