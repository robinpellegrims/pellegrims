import { getMarkdownDocuments, MarkdownDocument } from '@pellegrims/markdown';
import { SNIPPETS_PATH } from '../constants';
import Container from '../components/container';
import { GetStaticProps } from 'next';
import { NextSeo } from 'next-seo';
import SnippetArticleList from '../components/snippet-article-list';

export interface SnippetsProps {
  snippets: MarkdownDocument[];
}

export default function Snippets({ snippets }: SnippetsProps) {
  return (
    <>
      <NextSeo title="Snippets" />
      <Container>
        <SnippetArticleList snippets={snippets} />
      </Container>
    </>
  );
}

export const getStaticProps: GetStaticProps<SnippetsProps> = async () => {
  const snippets = getMarkdownDocuments(SNIPPETS_PATH);
  return { props: { snippets } };
};
