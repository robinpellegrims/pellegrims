import { FunctionComponent } from 'react';
import { Chip } from '@pellegrims/pellegrims-dev/ui/atoms';

interface BlogArticleCategoriesProps {
  tags: string[];
}

const BlogArticleCategories: FunctionComponent<BlogArticleCategoriesProps> = (
  props
) => (
  <div className="uppercase flex flex-wrap gap-1">
    {props.tags.map((tag) => (
      <Chip key={tag} text={tag} />
    ))}
  </div>
);

export default BlogArticleCategories;
