import { describe, expect, it } from 'vitest';
import {
  getMessages,
  localeHomePath,
  localizedPath,
  switchLocalePath,
} from '../src/i18n';

describe('i18n helpers', () => {
  it('keeps FR at root and prefixes EN', () => {
    expect(localeHomePath('fr')).toBe('/');
    expect(localeHomePath('en')).toBe('/en');
    expect(localizedPath('fr', '/mentions')).toBe('/mentions');
    expect(localizedPath('en', '/mentions')).toBe('/en/mentions');
    expect(localizedPath('en', '/#menu')).toBe('/en#menu');
    expect(localizedPath('fr', '/#menu')).toBe('/#menu');
  });

  it('switches locale while preserving page path and BASE_PATH', () => {
    expect(switchLocalePath('/poke-bar', 'en', '/poke-bar')).toBe('/en');
    expect(switchLocalePath('/poke-bar/en', 'fr', '/poke-bar')).toBe('/');
    expect(switchLocalePath('/poke-bar/mentions', 'en', '/poke-bar')).toBe('/en/mentions');
    expect(switchLocalePath('/poke-bar/en/confidentialite', 'fr', '/poke-bar')).toBe(
      '/confidentialite',
    );
  });

  it('exposes parallel FR/EN message catalogs', () => {
    expect(getMessages('fr').ui.contact).toBe('Contact');
    expect(getMessages('en').ui.contact).toBe('Contact');
    expect(getMessages('fr').footer.findUs).toBe('Nous trouver');
    expect(getMessages('en').footer.findUs).toBe('Find us');
  });
});
