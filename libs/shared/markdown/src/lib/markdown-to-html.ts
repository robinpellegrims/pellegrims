import { remark } from 'remark';
import remarkHtml from 'remark-html';
import externalLinks from 'remark-external-links';
import { visit } from 'unist-util-visit';
import { Visitor } from 'unist-util-visit/complex-types';

export const markdownToHtml = (
  markdown: string,
  absolutePath: string
): string =>
  remark()
    .use(externalLinks, { target: '_blank', rel: ['noreferrer'] })
    .use(remarkHtml)
    .use(fixImages, { absolutePath })
    .processSync(markdown)
    .toString();

type UnistNode = Parameters<typeof visit>[0];

const hasUrlProperty = (node: UnistNode): node is UnistNode & { url: string } =>
  'url' in node;

const fixImages = (options?: { absolutePath: string }) => {
  const visitor: Visitor = (node) => {
    if (hasUrlProperty(node)) {
      // Sanitize URL by removing leading `/`
      const relativeUrl = node.url.replace(/^\//, '');
      node.url = new URL(relativeUrl, options?.absolutePath).href;
    }
  };

  return (tree: UnistNode) => {
    if (options?.absolutePath) {
      visit(tree, 'image', visitor);
    } else {
      throw Error('Missing required `absolutePath` option.');
    }
  };
};
