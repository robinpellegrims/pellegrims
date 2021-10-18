import Chip from './chip';

export interface BlogArticleCategoriesProps {
  tags: string[];
}

export function BlogArticleCategories(props: BlogArticleCategoriesProps) {
  return (
    <div className="uppercase flex gap-1">
      {props.tags.map((tag) => (
        <Chip key={tag} text={tag} />
      ))}
    </div>
  );
}

export default BlogArticleCategories;
