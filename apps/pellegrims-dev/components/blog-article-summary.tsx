import { MarkdownDocument } from '@pellegrims/markdown';
import RightArrow from './right-arrow';
import Link from 'next/link';
import BlogArticleCategories from './blog-article-categories';

export interface BlogArticleSummaryProps {
  post: MarkdownDocument;
  path: string;
}

export default function BlogArticleSummary(props: BlogArticleSummaryProps) {
  return (
    <article className="py-8 flex flex-wrap md:flex-nowrap">
      <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
        <BlogArticleCategories tags={props.post.frontMatter.tags} />
        <span className="mt-1 text-gray-500 text-sm">
          {new Date(props.post.frontMatter.date).toLocaleDateString('en-BE')}
        </span>
      </div>
      <div className="md:flex-grow">
        <h2 className="text-2xl font-medium title-font mb-2">
          {props.post.frontMatter.title}
        </h2>
        <p className="leading-relaxed">{props.post.frontMatter.excerpt}</p>
        <Link href={`${props.path}/${props.post.slug}`}>
          <a className="text-indigo-500 inline-flex items-center mt-4">
            Learn More
            <RightArrow />
          </a>
        </Link>
      </div>
    </article>
  );
}
