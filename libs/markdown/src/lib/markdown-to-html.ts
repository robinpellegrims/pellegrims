import { remark } from 'remark';
import remarkHtml from 'remark-html';

export async function markdownToHtml(markdown) {
  const result = await remark().use(remarkHtml).process(markdown);
  return result.toString();
}
