import { Grid, PageTemplate } from '@pellegrims/pellegrims-dev/ui/templates';
import { fetchRaindropBookmarks } from '../utils/raindrop';
import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import { Card, CardProps } from '@pellegrims/pellegrims-dev/ui/organisms';
import { PageHero } from '@pellegrims/pellegrims-dev/ui/molecules';

export interface BookmarksProps {
  bookmarks: CardProps[];
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
  return {
    props: {
      bookmarks: bookmarks.map((bookmark) => ({
        ...bookmark,
        linkTarget: '_blank',
      })),
    },
    revalidate: 10,
  };
};
