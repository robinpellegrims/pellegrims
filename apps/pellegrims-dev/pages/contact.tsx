import { NextSeo } from 'next-seo';
import Container from '../components/container';
import PageHero from '../components/page-hero';
import Section from '../components/section';
import { FormField } from '../components/form-field';
import Button from '../components/button';
import { Form } from '../components/form';
import { contactFieldNames } from '../utils/contact';
import { useState } from 'react';

const pageTitle = 'Contact';

export const contactFieldsRecord: Record<
  string,
  typeof contactFieldNames[number]
> = {
  name: 'name',
  email: 'email',
  message: 'message',
  honey: 'a991396704f746f4ba5d4f88aa13e524',
};

export const Contact = () => {
  const [loading, setLoading] = useState(false);
  return (
    <>
      <NextSeo title={pageTitle} />
      <Container>
        <PageHero title={pageTitle} description="Leave me a message!" />
        <Section>
          <Form
            actionUrl="/api/contact"
            formFieldNames={contactFieldNames}
            handleLoading={(requestLoading) => setLoading(requestLoading)}
          >
            <div className="flex flex-wrap text-gray-600 lg:w-1/2 md:w-2/3 mx-auto">
              <input
                className="hidden"
                name={contactFieldsRecord.honey}
                type="text"
              />
              <div className="p-2 w-1/2">
                <FormField
                  label="Name"
                  type="input"
                  htmlAttributes={{
                    name: contactFieldsRecord.name,
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
                    name: contactFieldsRecord.email,
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
                    name: contactFieldsRecord.message,
                    required: true,
                    rows: 4,
                    maxLength: 1000,
                  }}
                />
              </div>
              <div className="p-2 w-full mx-auto text-center">
                <Button text="Submit" type="primary" loading={loading} />
              </div>
            </div>
          </Form>
        </Section>
      </Container>
    </>
  );
};

export default Contact;
