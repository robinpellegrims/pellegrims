import { NextPage } from 'next';
import { trpc } from '@pellegrims/goldgetters/data-access';
import { WithLoading } from '@pellegrims/goldgetters/ui/atoms';
import { Hero } from '@pellegrims/goldgetters/ui/organisms';
import { Container, Section } from '@pellegrims/goldgetters/ui/templates';

export const Locations: NextPage = () => {
  const { data } = trpc.locations.useQuery();

  return (
    <>
      <Hero
        title="Locaties"
        subtitle="Alle locaties waarop ZVC Goldgetters te bewonderen valt"
      />
      <Section>
        <Container>
          <WithLoading loading={!data}>
            <ul>
              {data?.list.map((location) => (
                <li key={location.id}>{location.name}</li>
              ))}
            </ul>
          </WithLoading>
        </Container>
      </Section>
    </>
  );
};

export default Locations;
