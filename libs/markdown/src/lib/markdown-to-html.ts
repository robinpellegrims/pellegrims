import { remark } from 'remark';
import remarkHtml from 'remark-html';
import externalLinks from 'remark-external-links';

export async function markdownToHtml(markdown: string) {
  const result = await remark()
    .use(externalLinks, { target: '_blank', rel: ['nofollow'] })
    .use(remarkHtml)
    .process(markdown);
  return result.toString();
}
