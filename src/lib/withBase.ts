/**
 * Prefix a site-relative path with Astro `base` (BASE_PATH).
 * Absolute URLs, hashes, tel/mailto/sms, and protocol-relative URLs are left unchanged.
 *
 * Paths like `/#section` become `/poke-bar#section` (no slash before `#`) so they
 * work with `trailingSlash: 'never'`.
 */
export function withBase(path: string, base = import.meta.env.BASE_URL): string {
  if (!path) return normalizeBase(base);

  if (
    path.startsWith('http://') ||
    path.startsWith('https://') ||
    path.startsWith('//') ||
    path.startsWith('mailto:') ||
    path.startsWith('tel:') ||
    path.startsWith('sms:') ||
    path.startsWith('#')
  ) {
    return path;
  }

  const hashIndex = path.indexOf('#');
  const pathname = hashIndex === -1 ? path : path.slice(0, hashIndex);
  const hash = hashIndex === -1 ? '' : path.slice(hashIndex);

  const normalizedBase = normalizeBase(base);
  let normalizedPath = pathname.startsWith('/') ? pathname : `/${pathname}`;

  if (normalizedBase === '/') {
    if (normalizedPath === '/') return `/${hash}`;
    return `${normalizedPath}${hash}`;
  }

  if (normalizedPath === '/' || normalizedPath === '') {
    return `${normalizedBase}${hash}`;
  }

  if (normalizedPath.startsWith(`${normalizedBase}/`) || normalizedPath === normalizedBase) {
    return `${normalizedPath}${hash}`;
  }

  return `${normalizedBase}${normalizedPath}${hash}`;
}

function normalizeBase(base: string): string {
  if (!base || base === '/') return '/';
  let value = base.startsWith('/') ? base : `/${base}`;
  if (value.endsWith('/')) value = value.slice(0, -1);
  return value;
}
