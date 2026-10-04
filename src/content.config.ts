import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const legal = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/legal' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // YAML may coerce bare dates to Date — accept both
    updated: z.union([z.string(), z.date()]).optional().transform((v) => {
      if (v instanceof Date) return v.toISOString().slice(0, 10);
      return v;
    }),
  }),
});

export const collections = { legal };
