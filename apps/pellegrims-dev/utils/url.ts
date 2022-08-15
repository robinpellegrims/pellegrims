import { canonicalOrigin } from '../constants';
import { DateString } from '@pellegrims/shared/markdown';

export const buildRelativeBlogArticleUrl = (slug: string) => `/blog/${slug}`;

export const buildCanonicalBlogArticleUrl = (slug: string) =>
  `${canonicalOrigin}${buildRelativeBlogArticleUrl(slug)}/`;

export const buildBlogArticleUrlToShare = (slug: string) =>
  `${getCurrentOrigin()}${buildRelativeBlogArticleUrl(slug)}/`;

export interface OGImageParams {
  title?: string;
  description?: string;
  date?: DateString;
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
  typeof window !== 'undefined' && window.location.origin
    ? window.location.origin
    : canonicalOrigin;

export const buildOgImageUrl = (ogImageParams: OGImageParams) =>
  `${getCurrentOrigin()}${buildRelativeOgImageUrl(ogImageParams)}`;
