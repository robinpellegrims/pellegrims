import { FunctionComponent } from 'react';
import { useForm } from 'react-hook-form';
import { Container, Section } from '@pellegrims/goldgetters/ui/templates';
import { Button, Input, Textarea } from '@pellegrims/goldgetters/ui/atoms';

interface FormData {
  name: string;
  mail: string;
  subject: string;
  message: string;
}

interface ContactFormProps {
  onSubmit: (data: FormData) => void;
}

export const ContactForm: FunctionComponent<ContactFormProps> = ({
  onSubmit,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  return (
    <Section>
      <Container>
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
          <Button type="submit" className="mt-6">
            Verzenden
          </Button>
        </form>
      </Container>
    </Section>
  );
};
