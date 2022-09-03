import { ContactForm, Hero } from '@pellegrims/goldgetters/ui/organisms';
import { trpc } from '@pellegrims/goldgetters/data-access';
import { Container, Section } from '@pellegrims/goldgetters/ui/templates';
import { NextPage } from 'next';

export const Contact: NextPage = () => {
  const send = trpc.useMutation('contact');

  return (
    <>
      <Container>
        <Hero
          title="Contact"
          subtitle="Via onderstaand contactformulier kan u ons contacteren"
        />
        <Section>
          <ContactForm
            onSubmit={(data) => send.mutateAsync(data)}
            error={send.error?.message}
          />
        </Section>
      </Container>
    </>
  );
};

export default Contact;
