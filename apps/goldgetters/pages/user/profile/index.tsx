import { Hero } from '@pellegrims/goldgetters/ui/organisms';
import { Container, Section } from '@pellegrims/goldgetters/ui/templates';
import { useSession } from 'next-auth/react';
import { FunctionComponent } from 'react';
import { WithLoading } from '@pellegrims/goldgetters/ui/atoms';

export interface User {
  name?: string | null;
  email?: string | null;
  image?: string | null;
}

const KeyValue: FunctionComponent<{ label: string; value?: string }> = ({
  value,
  label,
}) => (
  <div>
    <label
      htmlFor={label}
      className="text-dark-900 dark:text-dark-300 mb-2 block text-sm font-medium"
    >
      {label}
    </label>
    <input
      type="text"
      id={label}
      className="border-dark-300 bg-dark-50 text-dark-900 dark:border-dark-600 dark:bg-dark-700 dark:placeholder-dark-400 block w-full rounded-lg border p-2.5 text-sm focus:border-blue-500 focus:ring-blue-500 dark:text-white dark:focus:border-blue-500 dark:focus:ring-blue-500"
      required
      disabled
      value={value ?? ''}
    />
  </div>
);

export const Profile = () => {
  const session = useSession();
  return (
    <>
      <Hero title="Profiel" subtitle="Bekijk en wijzig je gegevens" />
      <Section>
        <Container>
          <WithLoading loading={session.status === 'loading'}>
            <div className="grid gap-6 md:grid-cols-2">
              <KeyValue
                label="Naam"
                value={session.data?.user?.name ?? undefined}
              />
              <KeyValue
                label="E-Mail"
                value={session.data?.user?.email ?? undefined}
              />
              <KeyValue
                label="Afbeelding"
                value={session.data?.user?.image ?? undefined}
              />
            </div>
          </WithLoading>
        </Container>
      </Section>
    </>
  );
};

export default Profile;
