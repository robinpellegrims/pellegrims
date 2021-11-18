import BlogArticleCategories from './blog-article-categories';
import BlogArticleDate from './blog-article-date';
import { MarkdownDocument } from '@pellegrims/markdown';
import Markdown from './markdown';
import { FunctionComponent } from 'react';

interface BlogArticleProps {
  markDown: MarkdownDocument;
}

const BlogArticle: FunctionComponent<BlogArticleProps> = ({ markDown }) => (
  <article className="mx-auto prose lg:prose-xl">
    <header className="flex flex-col gap-1">
      <BlogArticleDate date={markDown.frontMatter.date} />
      <BlogArticleCategories tags={markDown.frontMatter.tags} />
      <h1 className="pt-6">{markDown.frontMatter.title}</h1>
    </header>
    <Markdown markDown={markDown} />
  </article>
);

export default BlogArticle;
