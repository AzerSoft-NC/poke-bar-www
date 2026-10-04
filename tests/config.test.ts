import { describe, expect, it } from 'vitest';
import { locations } from '../src/config/locations.config';
import { menuCategories } from '../src/config/menu.config';
import { siteConfig } from '../src/config/site.config';

describe('site configs', () => {
  it('has at least one location', () => {
    expect(locations.length).toBeGreaterThanOrEqual(1);
    expect(locations[0]?.id).toBeTruthy();
    expect(locations[0]?.hours.length).toBeGreaterThan(0);
  });

  it('has non-empty menu categories', () => {
    expect(menuCategories.length).toBeGreaterThan(0);
    for (const category of menuCategories) {
      expect(category.items.length).toBeGreaterThan(0);
    }
  });

  it('exposes contact channels', () => {
    expect(siteConfig.phone.tel).toMatch(/^\+?\d+/);
    expect(siteConfig.email).toContain('@');
    expect(siteConfig.phone.whatsapp).toBeTruthy();
  });
});
