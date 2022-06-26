import { MarkdownDocument } from '@pellegrims/markdown';
import { Tags, Markdown } from '@pellegrims/pellegrims-dev/ui/molecules';
import { FunctionComponent } from 'react';
import Link from 'next/link';
import { DateFormatted, SocialIcon } from '@pellegrims/pellegrims-dev/ui/atoms';

export interface BlogArticleProps {
  markDown: MarkdownDocument;
  twitterUserName: string;
  canonicalUrl: string;
  twitterSvgIcon: string;
}

const shareOnTwitter = 'Share on twitter' as const;

export const BlogArticle: FunctionComponent<BlogArticleProps> = ({
  markDown,
  twitterUserName,
  canonicalUrl,
  twitterSvgIcon,
}) => (
  <article className="mx-auto prose lg:prose-xl dark:prose-invert">
    <header className="flex flex-col gap-2">
      <div className="flex flex-row justify-between w-full items-center">
        <DateFormatted date={markDown.frontMatter.date} />
        {markDown.readingTimeMins} min read
      </div>
      <Tags tags={markDown.frontMatter.tags} />
      <h1 className="pt-6">{markDown.frontMatter.title}</h1>
    </header>
    <Markdown markDown={markDown} />
    <footer className="mt-24">
      <Link
        href={`https://twitter.com/intent/tweet?text=${markDown.frontMatter.title}&via=${twitterUserName}&url=${canonicalUrl}`}
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
