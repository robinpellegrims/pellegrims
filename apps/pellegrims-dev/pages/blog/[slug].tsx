import {
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
  GetStaticPropsResult,
} from 'next';
import {
  getMarkdownDocumentBySlug,
  getSlugsForMarkdownFiles,
  MarkdownRenderingResult,
  renderMarkdown,
} from '@pellegrims/markdown';
import { ParsedUrlQuery } from 'querystring';
import { POSTS_PATH, productionUrl } from '../../constants';
import BlogArticle from '../../components/blog-article';
import Container from '../../components/container';
import { NextSeo } from 'next-seo';

interface BlogArticleUrlQuery extends ParsedUrlQuery {
  slug: string;
}

interface ArticleProps {
  markdownRenderingResult: MarkdownRenderingResult;
  slug: string;
}

export default function Article({
  markdownRenderingResult,
  slug,
}: ArticleProps) {
  return (
    <>
      <NextSeo
        title={markdownRenderingResult.frontMatter.title}
        description={markdownRenderingResult.frontMatter.description}
        canonical={`${productionUrl}/blog/${slug}`}
      />
      <Container>
        <BlogArticle post={markdownRenderingResult} />
      </Container>
    </>
  );
}

export const getStaticPaths: GetStaticPaths<BlogArticleUrlQuery> = async () => {
  const paths = getSlugsForMarkdownFiles(POSTS_PATH).map((slug) => ({
    params: { slug },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<ArticleProps> = async ({
  params,
}: GetStaticPropsContext<BlogArticleUrlQuery>): Promise<
  GetStaticPropsResult<ArticleProps>
> => {
  const articleMarkdownContent = getMarkdownDocumentBySlug(
    params.slug,
    POSTS_PATH
  );

  const renderedHTML = await renderMarkdown(articleMarkdownContent.content);

  return {
    props: {
      slug: params.slug,
      markdownRenderingResult: {
        frontMatter: articleMarkdownContent.frontMatter,
        html: renderedHTML,
      },
    },
  };
};
