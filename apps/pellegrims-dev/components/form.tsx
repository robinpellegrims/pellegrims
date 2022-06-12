import {
  FormEventHandler,
  FunctionComponent,
  ReactNode,
  useState,
} from 'react';
import { ErrorMessage } from '@pellegrims/pellegrims-dev/ui/atoms';

export const Form: FunctionComponent<{
  actionUrl: string;
  formFieldNames: readonly string[];
  handleLoading?: (loading: boolean) => void;
  children: ReactNode;
}> = ({ children, actionUrl, formFieldNames, handleLoading }) => {
  const [responseOk, setResponseOk] = useState<boolean>();
  const [errorMessage, setErrorMessage] = useState<string>();

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    handleLoading?.(true);
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
    handleLoading?.(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      {responseOk ? (
        <div className="text-center">Message succesfully sent, thank you!</div>
      ) : (
        children
      )}
      {responseOk === false ? (
        <ErrorMessage errorMessage={errorMessage} />
      ) : null}
    </form>
  );
};
