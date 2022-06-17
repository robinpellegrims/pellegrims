import { FormContainer } from '../components/form-container';
import {
  contactFieldNames,
  ContactForm,
} from '@pellegrims/pellegrims-dev/ui/organisms';
import { PageHero } from '@pellegrims/pellegrims-dev/ui/molecules';
import { PageTemplate } from '@pellegrims/pellegrims-dev/ui/templates';
import { ErrorMessage, FormSuccess } from '@pellegrims/pellegrims-dev/ui/atoms';

const title = 'Contact';

export const Contact = () => (
  <PageTemplate
    seoProps={{ title }}
    header={<PageHero title={title} description="Leave me a message!" />}
  >
    <FormContainer
      actionUrl="/api/contact"
      formFieldNames={contactFieldNames}
      FormComponent={ContactForm}
      FailureComponent={ErrorMessage}
      SuccessComponent={FormSuccess}
    ></FormContainer>
  </PageTemplate>
);

export default Contact;
