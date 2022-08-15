import { BlogArticleProps } from '@pellegrims/pellegrims-dev/ui/organisms';

export const sortArticlesByDateDesc = (
  article1: BlogArticleProps,
  article2: BlogArticleProps
) => {
  const date1 = article1.markDown.frontMatter.date;
  const date2 = article2.markDown.frontMatter.date;
  if (date2 === undefined) {
    return 1;
  } else if (date1 === undefined || date1 > date2) {
    return -1;
  } else if (date1 < date2) {
    return 1;
  }
  return 0;
};
