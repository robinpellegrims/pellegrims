import { Hero, ProfileForm } from '@pellegrims/goldgetters/ui/organisms';
import { Container, Section } from '@pellegrims/goldgetters/ui/templates';
import { useSession } from 'next-auth/react';
import { trpc } from '@pellegrims/goldgetters/data-access';

export interface User {
  name?: string | null;
  email?: string | null;
  image?: string | null;
}

const reloadSession = () => {
  // update next-auth session hack: https://stackoverflow.com/a/70405437
  const event = new Event('visibilitychange');
  document.dispatchEvent(event);
};

export const Profile = () => {
  const session = useSession();

  const updateUser = trpc.user.useMutation({
    onSuccess: () => reloadSession(),
  });

  return (
    <Container>
      <Hero title="Profiel" subtitle="Bekijk en wijzig je gegevens" />
      <Section>
        <ProfileForm
          profileFormValue={{
            name: session.data?.user?.name ?? undefined,
            image: session.data?.user?.image
              ? { previewUrl: '', value: session.data.user.image }
              : undefined,
            mail: session.data?.user?.email ?? undefined,
          }}
          submitHandler={(value) =>
            updateUser.mutateAsync({ name: value.name ?? null, image: '' })
          }
        ></ProfileForm>
      </Section>
    </Container>
  );
};

export default Profile;
