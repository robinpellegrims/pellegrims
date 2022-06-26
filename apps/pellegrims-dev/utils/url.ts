import { productionUrl } from '../constants';

export const buildRelativeBlogArticleUrl = (slug: string) => `/blog/${slug}`;

export const buildCanonicalBlogArticleUrl = (slug: string) =>
  `${productionUrl}${buildRelativeBlogArticleUrl(slug)}`;

export const buildOgImageUrl = ({
  title,
  description,
  date,
}: {
  title?: string;
  description?: string;
  date?: Date;
}) =>
  `${productionUrl}/api/og-image?title=${title ?? ''}&description=${
    description ?? ''
  }&date=${date}`;
