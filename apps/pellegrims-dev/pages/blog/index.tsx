import { getMarkdownDocuments } from '@pellegrims/markdown';
import { POSTS_PATH } from '../../constants';
import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import { PageHero } from '@pellegrims/pellegrims-dev/ui/molecules';
import { List, PageTemplate } from '@pellegrims/pellegrims-dev/ui/templates';
import {
  BlogArticleSummary,
  BlogArticleSummaryProps,
} from '@pellegrims/pellegrims-dev/ui/organisms';

interface BlogProps {
  posts: BlogArticleSummaryProps[];
}

const title = 'Blog';

const Blog: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  posts,
}) => (
  <PageTemplate
    seoProps={{ title }}
    header={
      <PageHero
        title={title}
        description="Articles about things that I found interesting enough to share."
      />
    }
  >
    <List ItemComponent={BlogArticleSummary} items={posts} />
  </PageTemplate>
);

export default Blog;

export const getStaticProps: GetStaticProps<BlogProps> = async () => {
  const posts = getMarkdownDocuments(POSTS_PATH);
  return { props: { posts: posts.map((post) => ({ post, path: '/blog' })) } };
};
