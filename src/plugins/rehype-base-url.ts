import type { Root } from 'hast';
import type { Plugin } from 'unified';
import { visit } from 'unist-util-visit';
import { withBase } from '../lib/withBase.ts';

type Options = { base?: string };

/**
 * Prefix relative href/src in Markdown HTML with BASE_PATH.
 */
export const rehypeBaseUrl: Plugin<[Options?], Root> = (options = {}) => {
  const base = options.base ?? '/';

  return (tree) => {
    visit(tree, 'element', (node) => {
      if (!node.properties) return;

      for (const key of ['href', 'src'] as const) {
        const value = node.properties[key];
        if (typeof value !== 'string') continue;
        node.properties[key] = withBase(value, base === '/' ? '/' : `${base}/`);
      }
    });
  };
};
