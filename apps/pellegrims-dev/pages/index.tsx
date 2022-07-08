import { HomeHero } from '@pellegrims/pellegrims-dev/ui/organisms';
import { Container } from '@pellegrims/pellegrims-dev/ui/templates';
import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import { generateRssFeed } from '../utils/feed';
import { name } from '../constants';

const Index: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = () => (
  <Container>
    <HomeHero imageSrc="/avataaar.svg" name={name} contactPath="/contact" />
  </Container>
);

export const getStaticProps: GetStaticProps = async () => {
  await generateRssFeed();
  return { props: {} };
};

export default Index;
