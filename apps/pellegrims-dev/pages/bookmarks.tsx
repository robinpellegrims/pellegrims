import { NextSeo } from 'next-seo';
import Container from '../components/container';
import { fetchRaindropBookmarks, RaindropBookmark } from '../utils/raindrop';
import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import PageHero from '../components/page-hero';
import { Bookmark } from '../components/bookmark';
import Section from '../components/section';

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
      <Section>
        <div className="flex flex-wrap">
          {props.bookmarks.map((bookmark) => (
            <div key={bookmark._id} className="p-4 md:w-1/3">
              <Bookmark bookmark={bookmark} />
            </div>
          ))}
        </div>
      </Section>
    </Container>
  </>
);

export default Bookmarks;

export const getStaticProps: GetStaticProps<BookmarksProps> = async () => {
  const bookmarks = await fetchRaindropBookmarks();
  return { props: { bookmarks }, revalidate: 10 };
};
