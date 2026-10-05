/** Absolute sitemap-index URL for robots.txt, including BASE_PATH. */
export function sitemapUrl(siteUrl: string, basePath: string): string {
  const origin = siteUrl.replace(/\/$/, '');
  const base = !basePath || basePath === '/' ? '' : basePath.startsWith('/') ? basePath : `/${basePath}`;
  return `${origin}${base}/sitemap-index.xml`;
}
