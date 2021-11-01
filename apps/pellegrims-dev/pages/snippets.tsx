import { getMarkdownDocuments, MarkdownDocument } from '@pellegrims/markdown';
import { SNIPPETS_PATH } from '../constants';
import BlogArticleList from '../components/blog-article-list';
import Container from '../components/container';
import { GetStaticProps } from 'next';

export interface SnippetsProps {
  snippets: MarkdownDocument[];
}

export default function Snippets({ snippets }: SnippetsProps) {
  return (
    <Container>
      <BlogArticleList posts={snippets} title="Snippets" path="/snippets" />
    </Container>
  );
}

export const getStaticProps: GetStaticProps<SnippetsProps> = async () => {
  const snippets = getMarkdownDocuments(SNIPPETS_PATH);
  return { props: { snippets } };
};
