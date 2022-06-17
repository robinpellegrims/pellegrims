import { NextSeo } from 'next-seo';
import { Container } from '@pellegrims/pellegrims-dev/ui/atoms';
import { fetchRaindropBookmarks, RaindropBookmark } from '../utils/raindrop';
import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import { Bookmark } from '@pellegrims/pellegrims-dev/ui/organisms';
import { PageHero } from '@pellegrims/pellegrims-dev/ui/molecules';

export interface BookmarksProps {
  bookmarks: RaindropBookmark[];
}

const pageTitle = 'Bookmarks';

export const Bookmarks: NextPage<
  InferGetStaticPropsType<typeof getStaticProps>
> = (props) => (
  <>
    <NextSeo title={pageTitle} />
    <Container>
      <PageHero
        title={pageTitle}
        description="Collection of links to articles and other resources I recently liked."
      />
      <section>
        <div className="flex flex-wrap">
          {props.bookmarks.map((bookmark) => (
            <div key={bookmark._id} className="p-4 md:w-1/3">
              <Bookmark bookmark={bookmark} />
            </div>
          ))}
        </div>
      </section>
    </Container>
  </>
);

export default Bookmarks;

export const getStaticProps: GetStaticProps<BookmarksProps> = async () => {
  const bookmarks = await fetchRaindropBookmarks();
  return { props: { bookmarks }, revalidate: 10 };
};
