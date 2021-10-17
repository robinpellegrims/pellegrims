import './[slug].module.css';
import { GetStaticPaths, GetStaticProps } from 'next';
import fs from 'fs';
import { join } from 'path';
import {
  getParsedFileContentBySlug,
  MarkdownRenderingResult,
  renderMarkdown,
} from '@pellegrims/markdown';
import { ParsedUrlQuery } from 'querystring';

interface ArticleProps extends ParsedUrlQuery {
  slug: string;
}

const POSTS_PATH = join(process.cwd(), 'apps/pellegrims-dev/_blog');

export default function Article(props: MarkdownRenderingResult) {
  return (
    <article>
      <h1>{props.frontMatter.title}</h1>
      <hr />
      <main dangerouslySetInnerHTML={{ __html: props.html }} />
    </article>
  );
}

export const getStaticPaths: GetStaticPaths<ArticleProps> = async () => {
  const paths = fs
    .readdirSync(POSTS_PATH)
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ''))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<MarkdownRenderingResult> = async ({
  params,
}: {
  params: ArticleProps;
}) => {
  const articleMarkdownContent = getParsedFileContentBySlug(
    params.slug,
    POSTS_PATH
  );

  const renderedHTML = await renderMarkdown(articleMarkdownContent.content);

  return {
    props: {
      frontMatter: articleMarkdownContent.frontMatter,
      html: renderedHTML,
    },
  };
};
