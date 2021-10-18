import { MarkdownRenderingResult } from '@pellegrims/markdown';
import BlogArticleCategories from './blog-article-categories';

export interface BlogArticleProps {
  post: MarkdownRenderingResult;
}

export default function BlogArticle(props: BlogArticleProps) {
  return (
    <article className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col items-center text-center w-full mb-20">
          <BlogArticleCategories tags={props.post.frontMatter.tags} />
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4">
            {props.post.frontMatter.title}
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            {props.post.frontMatter.excerpt}
          </p>
        </div>
        <div className="prose mx-auto">
          <main dangerouslySetInnerHTML={{ __html: props.post.html }} />
        </div>
      </div>
    </article>
  );
}
