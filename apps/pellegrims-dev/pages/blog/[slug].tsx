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
} from '@pellegrims/shared/markdown';
import { ParsedUrlQuery } from 'querystring';
import { oGImageHeight, oGImageWidth, twitterUserName } from '../../constants';
import { BlogArticle } from '@pellegrims/pellegrims-dev/ui/organisms';
import { Container } from '@pellegrims/pellegrims-dev/ui/templates';
import { NextSeo } from 'next-seo';
import {
  buildBlogArticleUrlToShare,
  buildCanonicalBlogArticleUrl,
  buildOgImageUrl,
} from '../../utils/url';
import { POSTS_PATH } from '../../utils/paths';

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
      canonical={buildCanonicalBlogArticleUrl(slug)}
      openGraph={{
        type: 'article',
        images: [
          {
            height: oGImageHeight,
            width: oGImageWidth,
            url: buildOgImageUrl({
              date: markDown.frontMatter.date,
              description: markDown.frontMatter.description,
              readMinutes: markDown.readingTimeMins,
              title: markDown.frontMatter.title,
            }),
          },
        ],
      }}
    />
    <Container>
      <BlogArticle
        markDown={markDown}
        twitterUserName={twitterUserName}
        urlToShare={buildBlogArticleUrlToShare(markDown.slug)}
      />
    </Container>
  </>
);

export const getStaticPaths: GetStaticPaths<BlogArticleUrlQuery> = async () => {
  const paths = getSlugsForMarkdownFiles(POSTS_PATH).map((slug) => ({
    params: { slug },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<
  ArticleProps,
  BlogArticleUrlQuery
> = async ({ params }) => {
  const slug = params?.slug ?? '';
  return {
    props: { slug, markDown: getMarkdownDocumentBySlug(slug, POSTS_PATH) },
  };
};

export default Article;
