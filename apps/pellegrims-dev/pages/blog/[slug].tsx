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
    <article className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              {props.frontMatter.title}
            </h1>
            <div className="h-1 w-20 bg-indigo-500 rounded"></div>
          </div>
          <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
            {props.frontMatter.excerpt}
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          <main dangerouslySetInnerHTML={{ __html: props.html }} />
        </div>
      </div>
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
