import { getMarkdownDocuments, MarkdownDocument } from '@pellegrims/markdown';
import { POSTS_PATH } from '../constants';
import BlogArticleList from '../components/blog-article-list';

export interface BlogProps {
  posts: MarkdownDocument[];
}

export default function Blog(props: BlogProps) {
  return <BlogArticleList posts={props.posts} />;
}

export const getStaticProps = async () => {
  const posts = getMarkdownDocuments(POSTS_PATH);
  return { props: { posts } };
};
