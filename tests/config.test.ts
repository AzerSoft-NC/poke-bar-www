import { describe, expect, it } from 'vitest';
import { homeContent } from '../src/config/home';
import { instagramPostHref, instagramPosts } from '../src/config/instagram';
import { siteConfig } from '../src/config/site';

describe('site configs', () => {
  it('exposes FR contact channels', () => {
    expect(siteConfig.phone).toMatch(/\d/);
    expect(siteConfig.email).toContain('@');
    expect(siteConfig.whatsapp).toBeTruthy();
    expect(siteConfig.locale).toBe('fr_NC');
  });

  it('has tasting courses and menu PDF path', () => {
    expect(homeContent.tasting.courses.length).toBeGreaterThanOrEqual(4);
    expect(siteConfig.menuPdf).toBe('/menu.pdf');
  });

  it('has no reservation form action', () => {
    expect(siteConfig).not.toHaveProperty('reservation');
    expect(homeContent).toHaveProperty('contact');
    expect(homeContent).not.toHaveProperty('reservation');
  });

  it('lists 18 Instagram thumbs for the interior grid', () => {
    expect(instagramPosts).toHaveLength(18);
    expect(new Set(instagramPosts.map((post) => post.code)).size).toBe(18);
    expect(instagramPosts.every((post) => post.file.endsWith('.jpg'))).toBe(true);
    expect(instagramPostHref(instagramPosts[0].code)).toContain('/p/');
    expect(siteConfig.social.some((item) => item.href.includes('pokebar_cocotiers'))).toBe(true);
  });
});
