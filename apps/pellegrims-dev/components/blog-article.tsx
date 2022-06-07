import BlogArticleCategories from './blog-article-categories';
import DateFormatted from './date-formatted';
import { MarkdownDocument } from '@pellegrims/markdown';
import Markdown from './markdown';
import { FunctionComponent } from 'react';
import { twitterSvgIcon, twitterUserName } from '../constants';
import { buildCanonicalUrl } from '../utils/url';
import SocialIcon from './social-icon';
import Link from 'next/link';

interface BlogArticleProps {
  markDown: MarkdownDocument;
}

const shareOnTwitter = 'Share on twitter' as const;

const BlogArticle: FunctionComponent<BlogArticleProps> = ({ markDown }) => (
  <article className="mx-auto prose lg:prose-xl dark:prose-invert">
    <header className="flex flex-col gap-1">
      <DateFormatted date={markDown.frontMatter.date} />
      <BlogArticleCategories tags={markDown.frontMatter.tags} />
      <h1 className="pt-6">{markDown.frontMatter.title}</h1>
    </header>
    <Markdown markDown={markDown} />
    <footer className="mt-24">
      <Link
        href={`https://twitter.com/intent/tweet?text=${
          markDown.frontMatter.title
        }&via=${twitterUserName}&url=${buildCanonicalUrl(markDown.slug)}`}
      >
        <a
          rel="noopener noreferrer"
          target="_blank"
          aria-label={shareOnTwitter}
          className="flex gap-2 items-center justify-center"
        >
          <SocialIcon>
            <path d={twitterSvgIcon} />
          </SocialIcon>
          {shareOnTwitter}
        </a>
      </Link>
    </footer>
  </article>
);

export default BlogArticle;
