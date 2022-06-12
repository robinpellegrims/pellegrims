import { getMarkdownDocuments, MarkdownDocument } from '@pellegrims/markdown';
import { POSTS_PATH } from '../../constants';
import BlogArticleList from '../../components/blog-article-list';
import { Container } from '@pellegrims/pellegrims-dev/ui/atoms';
import { NextSeo } from 'next-seo';
import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import PageHero from '../../components/page-hero';

interface BlogProps {
  posts: MarkdownDocument[];
}

const title = 'Blog';

const Blog: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  posts,
}) => (
  <>
    <NextSeo title={title} />
    <Container>
      <PageHero
        title={title}
        description="Articles about things that I found interesting enough to share."
      />
      <BlogArticleList posts={posts} path="/blog" />
    </Container>
  </>
);

export default Blog;

export const getStaticProps: GetStaticProps<BlogProps> = async () => {
  const posts = getMarkdownDocuments(POSTS_PATH);
  return { props: { posts } };
};
