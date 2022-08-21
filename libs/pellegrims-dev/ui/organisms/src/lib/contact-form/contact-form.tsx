import { FunctionComponent } from 'react';
import { Button, FormField } from '@pellegrims/pellegrims-dev/ui/atoms';
import { contactFieldNames } from './contact-form.constants';

interface ContactFormProps {
  loading: boolean;
}

export const contactFieldsRecord: Record<
  string,
  typeof contactFieldNames[number]
> = {
  name: 'name',
  email: 'email',
  message: 'message',
  honey: 'a991396704f746f4ba5d4f88aa13e524',
};

export const ContactForm: FunctionComponent<ContactFormProps> = (props) => (
  <div className="text-dark-600 mx-auto flex flex-wrap md:w-2/3 lg:w-1/2">
    <input className="hidden" name={contactFieldsRecord['honey']} type="text" />
    <div className="w-1/2 p-2">
      <FormField
        label="Name"
        type="input"
        htmlAttributes={{
          name: contactFieldsRecord['name'],
          required: true,
          maxLength: 100,
        }}
      />
    </div>
    <div className="w-1/2 p-2">
      <FormField
        label="Email"
        type="input"
        htmlAttributes={{
          name: contactFieldsRecord['email'],
          required: true,
          type: 'email',
          maxLength: 100,
        }}
      />
    </div>
    <div className="w-full p-2">
      <FormField
        label="Message"
        type="textarea"
        htmlAttributes={{
          name: contactFieldsRecord['message'],
          required: true,
          rows: 4,
          maxLength: 1000,
        }}
      />
    </div>
    <div className="mx-auto w-full p-2 text-center">
      <Button text="Submit" type="primary" loading={props.loading} />
    </div>
  </div>
);
