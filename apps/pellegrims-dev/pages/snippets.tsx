import { getMarkdownDocuments } from '@pellegrims/markdown';
import { SNIPPETS_PATH, twitterUserName } from '../constants';
import { List, PageTemplate } from '@pellegrims/pellegrims-dev/ui/templates';
import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import { PageHero } from '@pellegrims/pellegrims-dev/ui/molecules';
import {
  BlogArticle,
  BlogArticleProps,
} from '@pellegrims/pellegrims-dev/ui/organisms';

interface SnippetsProps {
  snippets: BlogArticleProps[];
}

const Snippets: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  snippets,
}) => (
  <PageTemplate
    seoProps={{ title: 'Snippets' }}
    header={
      <PageHero
        title="Snippets"
        description="Short notes for future reference."
      />
    }
  >
    <List items={snippets} ItemComponent={BlogArticle} />
  </PageTemplate>
);

export const getStaticProps: GetStaticProps<SnippetsProps> = async () => {
  const snippets = getMarkdownDocuments(SNIPPETS_PATH);
  return {
    props: {
      snippets: snippets.map((snippet) => ({
        markDown: snippet,
        twitterUserName,
      })),
    },
  };
};

export default Snippets;
