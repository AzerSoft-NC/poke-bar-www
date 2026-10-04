import { config as loadDotenv } from 'dotenv';
import { existsSync } from 'node:fs';
import { resolve } from 'node:path';

function loadEnvFile() {
  const root = process.cwd();
  const candidates = ['.env.local', '.env'];
  for (const file of candidates) {
    const path = resolve(root, file);
    if (existsSync(path)) {
      loadDotenv({ path, override: false });
      break;
    }
  }
}

export function loadEnv() {
  loadEnvFile();

  const siteUrl = (process.env.SITE_URL ?? 'https://apps.azersoft.nc').replace(/\/$/, '');
  let basePath = process.env.BASE_PATH ?? '/poke-bar';
  if (!basePath.startsWith('/')) basePath = `/${basePath}`;
  if (basePath !== '/' && basePath.endsWith('/')) basePath = basePath.slice(0, -1);

  return {
    siteUrl,
    basePath,
    googleSiteVerification: process.env.GOOGLE_SITE_VERIFICATION ?? '',
  };
}
