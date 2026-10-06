import { en } from './en';
import { fr } from './fr';
import { defaultLocale, type Locale, type Messages, locales } from './types';

export { defaultLocale, locales };
export type { Locale, Messages };

const catalog: Record<Locale, Messages> = { fr, en };

export function isLocale(value: string | undefined): value is Locale {
  return !!value && (locales as readonly string[]).includes(value);
}

export function getLocale(value: string | undefined): Locale {
  return isLocale(value) ? value : defaultLocale;
}

export function getMessages(locale: string | undefined): Messages {
  return catalog[getLocale(locale)];
}

/** Site-relative path for a locale (no BASE_PATH). Home is `/` or `/en`. */
export function localeHomePath(locale: Locale): string {
  return locale === defaultLocale ? '/' : `/${locale}`;
}

/** Prefix a site path with locale when needed. `path` like `/mentions` or `/#menu`. */
export function localizedPath(locale: Locale, path: string): string {
  if (
    path.startsWith('http://') ||
    path.startsWith('https://') ||
    path.startsWith('mailto:') ||
    path.startsWith('tel:') ||
    path.startsWith('sms:')
  ) {
    return path;
  }

  const hashIndex = path.indexOf('#');
  const pathname = hashIndex === -1 ? path : path.slice(0, hashIndex);
  const hash = hashIndex === -1 ? '' : path.slice(hashIndex);

  let normalized = pathname.startsWith('/') ? pathname : `/${pathname}`;
  if (normalized === '/') {
    return `${localeHomePath(locale)}${hash === '#' ? '' : hash}`;
  }

  // Already locale-prefixed
  for (const loc of locales) {
    if (normalized === `/${loc}` || normalized.startsWith(`/${loc}/`)) {
      return `${normalized}${hash}`;
    }
  }

  if (locale === defaultLocale) {
    return `${normalized}${hash}`;
  }

  return `/${locale}${normalized}${hash}`;
}

/** Map current pathname (may include BASE_PATH) to the same page in `target`. */
export function switchLocalePath(
  currentPathname: string,
  target: Locale,
  base = import.meta.env.BASE_URL,
): string {
  const normalizedBase = !base || base === '/' ? '' : base.replace(/\/$/, '');
  let path = currentPathname;
  if (normalizedBase && path.startsWith(normalizedBase)) {
    path = path.slice(normalizedBase.length) || '/';
  }
  if (!path.startsWith('/')) path = `/${path}`;

  // Strip any locale prefix
  for (const loc of locales) {
    if (path === `/${loc}`) {
      path = '/';
      break;
    }
    if (path.startsWith(`/${loc}/`)) {
      path = path.slice(loc.length + 1);
      if (!path.startsWith('/')) path = `/${path}`;
      break;
    }
  }

  return localizedPath(target, path);
}
