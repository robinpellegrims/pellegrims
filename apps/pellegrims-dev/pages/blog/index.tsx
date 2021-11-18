import { getMarkdownDocuments, MarkdownDocument } from '@pellegrims/markdown';
import { POSTS_PATH } from '../../constants';
import BlogArticleList from '../../components/blog-article-list';
import Container from '../../components/container';
import { NextSeo } from 'next-seo';
import { GetStaticProps } from 'next';
import { FunctionComponent } from 'react';

interface BlogProps {
  posts: MarkdownDocument[];
}

const Blog: FunctionComponent<BlogProps> = ({ posts }) => (
  <>
    <NextSeo title="Blog" />
    <Container>
      <BlogArticleList posts={posts} title="Blog" path="/blog" />
    </Container>
  </>
);

export default Blog;

export const getStaticProps: GetStaticProps = async () => {
  const posts = getMarkdownDocuments(POSTS_PATH);
  return { props: { posts } };
};
