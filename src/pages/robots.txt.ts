import type { APIRoute } from 'astro';
import { loadEnv } from '../lib/env';
import { sitemapUrl } from '../lib/sitemapUrl';

export const GET: APIRoute = ({ site }) => {
  const { siteUrl, basePath } = loadEnv();
  const origin = site?.origin ?? siteUrl;
  const body = `User-agent: *
Allow: /

Sitemap: ${sitemapUrl(origin, basePath)}
`;
  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
