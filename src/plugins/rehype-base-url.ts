import { visit } from 'unist-util-visit';
import { withBase } from '../lib/withBase.ts';

type Options = { base?: string };

type HastNode = {
  type: string;
  properties?: Record<string, unknown>;
};

/**
 * Prefix relative href/src in Markdown HTML with BASE_PATH.
 */
export function rehypeBaseUrl(options: Options = {}) {
  const base = options.base ?? '/';

  return (tree: unknown) => {
    visit(tree as HastNode, 'element', (node: HastNode) => {
      if (!node.properties) return;

      for (const key of ['href', 'src'] as const) {
        const value = node.properties[key];
        if (typeof value !== 'string') continue;
        node.properties[key] = withBase(value, base === '/' ? '/' : `${base}/`);
      }
    });
  };
}
