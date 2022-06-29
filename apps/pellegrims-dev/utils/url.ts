import { canonicalBaseUrl } from '../constants';

export const buildRelativeBlogArticleUrl = (slug: string) => `/blog/${slug}`;

export const buildCanonicalBlogArticleUrl = (slug: string) =>
  `${canonicalBaseUrl}${buildRelativeBlogArticleUrl(slug)}/`;

export interface OGImageParams {
  title?: string;
  description?: string;
  date?: Date;
  readMinutes?: number;
}

export const buildRelativeOgImageUrl = ({
  title,
  description,
  date,
  readMinutes,
}: OGImageParams) =>
  `/api/og-image?title=${title ?? ''}&description=${
    description ?? ''
  }&date=${date}&readMinutes=${readMinutes}`;

export const buildOgImageUrl = (ogImageParams: OGImageParams) =>
  `${canonicalBaseUrl}${buildRelativeOgImageUrl(ogImageParams)}`;
