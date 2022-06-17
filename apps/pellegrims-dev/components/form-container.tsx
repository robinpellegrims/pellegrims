import {
  ComponentType,
  FormEventHandler,
  FunctionComponent,
  useState,
} from 'react';

interface FormContainerProps {
  actionUrl: string;
  formFieldNames: readonly string[];
  FormComponent: ComponentType<{ loading: boolean }>;
  SuccessComponent: ComponentType;
  FailureComponent: ComponentType<{ errorMessage?: string }>;
}

export const FormContainer: FunctionComponent<FormContainerProps> = ({
  actionUrl,
  formFieldNames,
  FormComponent,
  SuccessComponent,
  FailureComponent,
}) => {
  const [loading, setLoading] = useState(false);
  const [responseOk, setResponseOk] = useState<boolean>();
  const [errorMessage, setErrorMessage] = useState<string>();

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    setLoading(true);
    event.preventDefault();

    const fields = event.target as unknown as Record<
      typeof formFieldNames[number],
      HTMLInputElement
    >;

    const data = formFieldNames.reduce(
      (result, name) => ({ ...result, [name]: fields[name].value }),
      {}
    );

    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    };

    const response = await fetch(actionUrl, options);
    setResponseOk(response.ok);

    const { error } = await response
      .json()
      .catch(() => ({ error: response.statusText }));

    if (error) {
      setErrorMessage(error);
      console.error('Error:', error);
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      {responseOk ? <SuccessComponent /> : <FormComponent loading={loading} />}
      {responseOk === false ? (
        <FailureComponent errorMessage={errorMessage} />
      ) : null}
    </form>
  );
};
