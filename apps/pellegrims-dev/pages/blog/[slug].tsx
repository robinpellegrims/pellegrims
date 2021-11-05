import { GetStaticPaths, GetStaticProps } from 'next';
import {
  getMarkdownDocumentBySlug,
  getSlugsForMarkdownFiles,
  MarkdownDocument,
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
  markDown: MarkdownDocument;
  slug: string;
}

export default function Article({ slug, markDown }: ArticleProps) {
  return (
    <>
      <NextSeo
        title={markDown.frontMatter.title}
        description={markDown.frontMatter.description}
        canonical={`${productionUrl}/blog/${slug}`}
      />
      <Container>
        <BlogArticle markDown={markDown} />
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

export const getStaticProps: GetStaticProps<ArticleProps, BlogArticleUrlQuery> =
  async ({ params }) => {
    const slug = params?.slug ?? '';
    return {
      props: {
        slug: slug,
        markDown: getMarkdownDocumentBySlug(slug, POSTS_PATH),
      },
    };
  };
