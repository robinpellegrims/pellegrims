import { getMarkdownDocuments, MarkdownDocument } from '@pellegrims/markdown';
import { SNIPPETS_PATH } from '../constants';
import { Container } from '@pellegrims/pellegrims-dev/ui/atoms';
import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import { NextSeo } from 'next-seo';
import SnippetArticleList from '../components/snippet-article-list';
import { PageHero } from '@pellegrims/pellegrims-dev/ui/molecules';

interface SnippetsProps {
  snippets: MarkdownDocument[];
}

const Snippets: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  snippets,
}) => (
  <>
    <NextSeo title="Snippets" />
    <Container>
      <PageHero
        title="Snippets"
        description="Short notes for future reference."
      />
      <SnippetArticleList snippets={snippets} />
    </Container>
  </>
);

export const getStaticProps: GetStaticProps<SnippetsProps> = async () => {
  const snippets = getMarkdownDocuments(SNIPPETS_PATH);
  return { props: { snippets } };
};

export default Snippets;
