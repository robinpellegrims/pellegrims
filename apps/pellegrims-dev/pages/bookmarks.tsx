import { Grid, PageTemplate } from '@pellegrims/pellegrims-dev/ui/templates';
import { fetchRaindropBookmarks, RaindropBookmark } from '../utils/raindrop';
import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import { Card } from '@pellegrims/pellegrims-dev/ui/organisms';
import { PageHero } from '@pellegrims/pellegrims-dev/ui/molecules';

export interface BookmarksProps {
  bookmarks: RaindropBookmark[];
}

const title = 'Bookmarks';

export const Bookmarks: NextPage<
  InferGetStaticPropsType<typeof getStaticProps>
> = (props) => (
  <PageTemplate
    header={
      <PageHero
        title={title}
        description="Collection of links to articles and other resources I recently liked."
      />
    }
    seoProps={{ title }}
  >
    <Grid items={props.bookmarks} ItemComponent={Card} />
  </PageTemplate>
);

export default Bookmarks;

export const getStaticProps: GetStaticProps<BookmarksProps> = async () => {
  const bookmarks = await fetchRaindropBookmarks();
  return { props: { bookmarks }, revalidate: 10 };
};
