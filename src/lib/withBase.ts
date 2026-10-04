/**
 * Prefix a site-relative path with Astro `base` (BASE_PATH).
 * Absolute URLs, hashes, tel/mailto/sms, and protocol-relative URLs are left unchanged.
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

  const normalizedBase = normalizeBase(base);
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;

  if (normalizedBase === '/') return normalizedPath;
  if (normalizedPath === '/') return normalizedBase;
  if (normalizedPath.startsWith(`${normalizedBase}/`) || normalizedPath === normalizedBase) {
    return normalizedPath;
  }

  return `${normalizedBase}${normalizedPath}`;
}

function normalizeBase(base: string): string {
  if (!base || base === '/') return '/';
  let value = base.startsWith('/') ? base : `/${base}`;
  if (value.endsWith('/')) value = value.slice(0, -1);
  return value;
}
