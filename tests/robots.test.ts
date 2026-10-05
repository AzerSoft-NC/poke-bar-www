import { describe, expect, it } from 'vitest';
import { sitemapUrl } from '../src/lib/sitemapUrl';

describe('sitemapUrl', () => {
  it('includes BASE_PATH under the site origin', () => {
    expect(sitemapUrl('https://apps.azersoft.nc', '/poke-bar')).toBe(
      'https://apps.azersoft.nc/poke-bar/sitemap-index.xml',
    );
  });

  it('handles root base', () => {
    expect(sitemapUrl('https://example.com', '/')).toBe(
      'https://example.com/sitemap-index.xml',
    );
  });
});
