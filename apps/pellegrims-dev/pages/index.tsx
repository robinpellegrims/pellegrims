import HomeHero from '../components/home-hero';
import { Container } from '@pellegrims/pellegrims-dev/ui/atoms';
import { NextPage } from 'next';

const Index: NextPage = () => (
  <>
    <Container>
      <HomeHero />
    </Container>
  </>
);

export default Index;
