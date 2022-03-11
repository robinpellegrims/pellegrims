import { getMarkdownDocuments, MarkdownDocument } from '@pellegrims/markdown';
import { POSTS_PATH } from '../../constants';
import BlogArticleList from '../../components/blog-article-list';
import Container from '../../components/container';
import { NextSeo } from 'next-seo';
import { GetStaticProps } from 'next';
import { FunctionComponent } from 'react';
import PageHero from '../../components/page-hero';

interface BlogProps {
  posts: MarkdownDocument[];
}

const title = 'Blog';

const Blog: FunctionComponent<BlogProps> = ({ posts }) => (
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

export const getStaticProps: GetStaticProps = async () => {
  const posts = getMarkdownDocuments(POSTS_PATH);
  return { props: { posts } };
};
