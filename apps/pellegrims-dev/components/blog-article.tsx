import { MarkdownRenderingResult } from '@pellegrims/markdown';
import BlogArticleCategories from './blog-article-categories';
import BlogArticleDate from './blog-article-date';

export interface BlogArticleProps {
  post: MarkdownRenderingResult;
}

export default function BlogArticle(props: BlogArticleProps) {
  return (
    <article className="mx-auto prose lg:prose-xl">
      <header className="flex flex-col gap-1">
        <BlogArticleDate date={props.post.frontMatter.date} />
        <BlogArticleCategories tags={props.post.frontMatter.tags} />
        <h1 className="pt-6">{props.post.frontMatter.title}</h1>
      </header>
      <main dangerouslySetInnerHTML={{ __html: props.post.html }} />
    </article>
  );
}
