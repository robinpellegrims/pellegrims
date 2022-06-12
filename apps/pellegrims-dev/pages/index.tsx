import HomeHero from '../components/home-hero';
import Container from '../components/container';
import { NextPage } from 'next';

const Index: NextPage = () => (
  <>
    <Container>
      <HomeHero />
    </Container>
  </>
);

export default Index;
