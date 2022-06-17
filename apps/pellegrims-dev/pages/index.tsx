import { HomeHero } from '@pellegrims/pellegrims-dev/ui/organisms';
import { Container } from '@pellegrims/pellegrims-dev/ui/templates';
import { NextPage } from 'next';

const Index: NextPage = () => (
  <>
    <Container>
      <HomeHero
        imageSrc="/avataaar.svg"
        name="Robin Pellegrims"
        contactPath="/contact"
      />
    </Container>
  </>
);

export default Index;
