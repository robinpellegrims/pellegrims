import { FunctionComponent, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import {
  Alert,
  Button,
  ImageInput,
  ImageInputValue,
  Input,
  WithLoading,
} from '@pellegrims/goldgetters/ui/atoms';

export interface ProfileFormSubmitValue {
  name?: string;
  image?: string | File;
}

export interface ProfileFormValue {
  name?: string;
  mail?: string;
  image?: ImageInputValue;
}

interface ProfileFormProps {
  submitHandler: (data: ProfileFormSubmitValue) => Promise<unknown>;
  error?: string;
  profileFormValue?: ProfileFormValue;
}

export const ProfileForm: FunctionComponent<ProfileFormProps> = ({
  submitHandler,
  error,
  profileFormValue,
}) => {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    getValues,
    formState: { errors, isSubmitting, isSubmitSuccessful, isSubmitted },
  } = useForm<ProfileFormValue>({ defaultValues: profileFormValue });

  useEffect(() => {
    if (!isSubmitted && !isSubmitting) {
      reset(profileFormValue);
    }
  }, [profileFormValue, reset, isSubmitted, isSubmitting]);

  return (
    <>
      <form
        onSubmit={handleSubmit(({ name, image }) =>
          submitHandler({ name, image: image?.value })
        )}
      >
        <div className="grid gap-6 md:grid-cols-2">
          <Input
            label="Naam"
            {...register('name', { required: true })}
            error={errors.name?.type}
          />
          <Input
            label="E-Mailadres"
            {...register('mail', { required: true })}
            error={errors.mail?.type}
            disabled={true}
          />
          <ImageInput
            label="Afbeelding"
            error={errors.image?.type}
            value={getValues('image')}
            onChange={(changeValue) => setValue('image', changeValue)}
          />
        </div>
        <Button type="submit" className="my-6">
          <WithLoading loading={isSubmitting}>Verzenden</WithLoading>
        </Button>
      </form>
      {error && (
        <Alert
          type="danger"
          text={`Er was een probleem bij het verzenden, probeer het later opnieuw. (${error})`}
          title="Probleem!"
        />
      )}
      {isSubmitSuccessful && !isSubmitting && (
        <Alert
          type="success"
          text="Profiel succesvol gewijzigd"
          title="Success!"
        />
      )}
    </>
  );
};
