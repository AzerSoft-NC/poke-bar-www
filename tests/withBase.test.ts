import { describe, expect, it } from 'vitest';
import { withBase } from '../src/lib/withBase';

describe('withBase', () => {
  it('prefixes relative paths with base', () => {
    expect(withBase('/menu', '/poke-bar/')).toBe('/poke-bar/menu');
    expect(withBase('menu', '/poke-bar')).toBe('/poke-bar/menu');
  });

  it('handles root base', () => {
    expect(withBase('/menu', '/')).toBe('/menu');
  });

  it('leaves absolute and special schemes alone', () => {
    expect(withBase('https://example.com/x', '/poke-bar')).toBe('https://example.com/x');
    expect(withBase('mailto:a@b.c', '/poke-bar')).toBe('mailto:a@b.c');
    expect(withBase('tel:+687460808', '/poke-bar')).toBe('tel:+687460808');
    expect(withBase('#offre', '/poke-bar')).toBe('#offre');
  });

  it('does not double-prefix', () => {
    expect(withBase('/poke-bar/menu', '/poke-bar')).toBe('/poke-bar/menu');
  });
});
