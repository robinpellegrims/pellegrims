import {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage,
} from 'next';
import {
  getMarkdownDocumentBySlug,
  getSlugsForMarkdownFiles,
  MarkdownDocument,
} from '@pellegrims/markdown';
import { ParsedUrlQuery } from 'querystring';
import { POSTS_PATH, twitterSvgIcon, twitterUserName } from '../../constants';
import { BlogArticle } from '@pellegrims/pellegrims-dev/ui/organisms';
import { Container } from '@pellegrims/pellegrims-dev/ui/atoms';
import { NextSeo } from 'next-seo';
import { buildCanonicalUrl } from '../../utils/url';

interface BlogArticleUrlQuery extends ParsedUrlQuery {
  slug: string;
}

interface ArticleProps {
  markDown: MarkdownDocument;
  slug: string;
}

const Article: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  slug,
  markDown,
}) => (
  <>
    <NextSeo
      title={markDown.frontMatter.title}
      description={markDown.frontMatter.description}
      canonical={buildCanonicalUrl(slug)}
    />
    <Container>
      <BlogArticle
        markDown={markDown}
        twitterUserName={twitterUserName}
        canonicalUrl={buildCanonicalUrl(markDown.slug)}
        twitterSvgIcon={twitterSvgIcon}
      />
    </Container>
  </>
);

export const getStaticPaths: GetStaticPaths<BlogArticleUrlQuery> = async () => {
  const paths = getSlugsForMarkdownFiles(POSTS_PATH).map((slug) => ({
    params: { slug },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<
  ArticleProps,
  BlogArticleUrlQuery
> = async ({ params }) => {
  const slug = params?.slug ?? '';
  return {
    props: {
      slug,
      markDown: getMarkdownDocumentBySlug(slug, POSTS_PATH),
    },
  };
};

export default Article;
