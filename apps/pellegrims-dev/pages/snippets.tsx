import { getMarkdownDocuments, MarkdownDocument } from '@pellegrims/markdown';
import { SNIPPETS_PATH } from '../constants';
import Container from '../components/container';
import { GetStaticProps } from 'next';
import { NextSeo } from 'next-seo';
import SnippetArticleList from '../components/snippet-article-list';
import { FunctionComponent } from 'react';

interface SnippetsProps {
  snippets: MarkdownDocument[];
}

const Snippets: FunctionComponent<SnippetsProps> = ({ snippets }) => (
  <>
    <NextSeo title="Snippets" />
    <Container>
      <SnippetArticleList snippets={snippets} />
    </Container>
  </>
);

export default Snippets;

export const getStaticProps: GetStaticProps<SnippetsProps> = async () => {
  const snippets = getMarkdownDocuments(SNIPPETS_PATH);
  return { props: { snippets } };
};
