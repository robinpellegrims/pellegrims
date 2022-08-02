import { canonicalOrigin, currentOrigin } from '../constants';

export const buildRelativeBlogArticleUrl = (slug: string) => `/blog/${slug}`;

export const buildCanonicalBlogArticleUrl = (slug: string) =>
  `${canonicalOrigin}${buildRelativeBlogArticleUrl(slug)}/`;

export const buildBlogArticleUrlToShare = (slug: string) =>
  `${getCurrentOrigin()}${buildRelativeBlogArticleUrl(slug)}/`;

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
  `/api/og-image?title=${encodeURIComponent(
    title ?? ''
  )}&description=${encodeURIComponent(
    description ?? ''
  )}&date=${date}&readMinutes=${readMinutes}`;

export const getCurrentOrigin = () =>
  typeof window !== 'undefined' ? window.location.origin : currentOrigin;

export const buildOgImageUrl = (ogImageParams: OGImageParams) =>
  `${getCurrentOrigin()}${buildRelativeOgImageUrl(ogImageParams)}`;
