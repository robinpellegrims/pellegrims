import { FunctionComponent, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import {
  Alert,
  Button,
  Input,
  WithLoading,
} from '@pellegrims/goldgetters/ui/atoms';

interface FormData {
  name?: string;
  mail?: string;
  image?: string;
}

interface ProfileFormProps {
  onSubmit: (data: FormData) => Promise<unknown>;
  error?: string;
  defaultValues?: FormData;
}

export const ProfileForm: FunctionComponent<ProfileFormProps> = ({
  onSubmit,
  error,
  defaultValues,
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful, isSubmitted },
  } = useForm<FormData>({ defaultValues });

  useEffect(() => {
    if (!isSubmitted && !isSubmitting) {
      reset(defaultValues);
    }
  }, [defaultValues, reset, isSubmitted, isSubmitting]);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
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
          <Input
            label="Afbeelding"
            {...register('image')}
            error={errors.image?.type}
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
      {isSubmitSuccessful && (
        <Alert
          type="success"
          text="Profiel succesvol gewijzigd"
          title="Success!"
        />
      )}
    </>
  );
};
