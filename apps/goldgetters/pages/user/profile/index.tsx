import {
  Hero,
  ProfileForm,
  ProfileFormSubmitValue,
} from '@pellegrims/goldgetters/ui/organisms';
import { Container, Section } from '@pellegrims/goldgetters/ui/templates';
import { trpc } from '@pellegrims/goldgetters/data-access';
import { isString } from 'next/dist/build/webpack/plugins/jsconfig-paths-plugin';
import { NextPage } from 'next';

const reloadSession = () => {
  // update next-auth session hack: https://stackoverflow.com/a/70405437
  const event = new Event('visibilitychange');
  document.dispatchEvent(event);
};

export const Profile: NextPage = () => {
  const updateUser = trpc.user.update.useMutation({
    onSuccess: () => reloadSession(),
  });

  const getUser = trpc.user.get.useQuery(undefined, { staleTime: Infinity });

  const createS3PresignedUrl = trpc.generateUploadUrl.useMutation();

  const maybeUploadImage = async (
    fileOrUrl: File | undefined
  ): Promise<string | null> => {
    if (!fileOrUrl) {
      return null;
    }
    const key = `user/${fileOrUrl.name}`;
    const presignedUrl = await createS3PresignedUrl.mutateAsync({ key });
    await fetch(presignedUrl, {
      method: 'PUT',
      body: fileOrUrl,
      headers: { 'Content-Type': fileOrUrl.type },
    });
    return key;
  };

  const onSubmit = async (value: ProfileFormSubmitValue) => {
    const image = isString(value.image)
      ? value.image
      : await maybeUploadImage(value.image);
    const name = value.name ?? null;
    return updateUser.mutateAsync({ name, image });
  };

  return (
    <Container>
      <Hero title="Profiel" subtitle="Bekijk en wijzig je gegevens" />
      <Section>
        <ProfileForm
          profileFormValue={{
            name: getUser.data?.name ?? undefined,
            image:
              getUser.data?.image && getUser.data?.imageUrl
                ? {
                    previewUrl: getUser.data.imageUrl,
                    value: getUser.data.image,
                  }
                : undefined,
            mail: getUser.data?.email ?? undefined,
          }}
          submitHandler={onSubmit}
        ></ProfileForm>
      </Section>
    </Container>
  );
};

export default Profile;
