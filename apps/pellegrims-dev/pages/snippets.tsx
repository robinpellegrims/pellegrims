import {
  getMarkdownDocuments,
  MarkdownRenderingResult,
  renderMarkdown,
} from '@pellegrims/markdown';
import { SNIPPETS_PATH } from '../constants';
import Container from '../components/container';
import { GetStaticProps } from 'next';
import { NextSeo } from 'next-seo';
import SnippetArticleList from '../components/snippet-article-list';

export interface SnippetsProps {
  snippets: MarkdownRenderingResult[];
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
  const snippets = await Promise.all(
    getMarkdownDocuments(SNIPPETS_PATH).map((markDownDocument) =>
      renderMarkdown(markDownDocument.content).then((renderedHtml) => ({
        frontMatter: markDownDocument.frontMatter,
        html: renderedHtml,
      }))
    )
  );
  return { props: { snippets } };
};
