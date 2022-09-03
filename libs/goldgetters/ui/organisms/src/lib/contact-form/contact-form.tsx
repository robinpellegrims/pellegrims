import { FunctionComponent } from 'react';
import { useForm } from 'react-hook-form';
import {
  Alert,
  Button,
  Input,
  Textarea,
  WithLoading,
} from '@pellegrims/goldgetters/ui/atoms';

interface FormData {
  name: string;
  mail: string;
  subject: string;
  message: string;
}

interface ContactFormProps {
  onSubmit: (data: FormData) => Promise<unknown>;
  error?: string;
}

export const ContactForm: FunctionComponent<ContactFormProps> = ({
  onSubmit,
  error,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<FormData>();
  return (
    <>
      {!isSubmitSuccessful && (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-6">
            <Input
              label="Naam"
              {...register('name', { required: true })}
              error={errors.name?.type}
            />
            <Input
              label="E-Mailadres"
              {...register('mail', { required: true })}
              error={errors.mail?.type}
            />
            <Input
              label="Onderwerp"
              {...register('subject', { required: true })}
              error={errors.subject?.type}
            />
            <Textarea
              label="Bericht"
              {...register('message', { required: true })}
              error={errors.message?.type}
              rows={3}
            />
          </div>
          <Button type="submit" className="my-6">
            <WithLoading loading={isSubmitting}>Verzenden</WithLoading>
          </Button>
        </form>
      )}
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
          text="Bericht succesvol verzonden."
          title="Success!"
        />
      )}
    </>
  );
};
