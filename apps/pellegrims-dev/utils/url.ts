import { productionUrl } from '../constants';

export const buildCanonicalUrl = (slug: string) =>
  `${productionUrl}/blog/${slug}`;
