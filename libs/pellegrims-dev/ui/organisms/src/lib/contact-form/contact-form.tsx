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
  <div className="flex flex-wrap text-dark-600 lg:w-1/2 md:w-2/3 mx-auto">
    <input className="hidden" name={contactFieldsRecord['honey']} type="text" />
    <div className="p-2 w-1/2">
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
    <div className="p-2 w-1/2">
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
    <div className="p-2 w-full">
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
    <div className="p-2 w-full mx-auto text-center">
      <Button text="Submit" type="primary" loading={props.loading} />
    </div>
  </div>
);
