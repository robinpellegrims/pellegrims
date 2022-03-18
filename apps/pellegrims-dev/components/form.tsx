import { FormEventHandler, FunctionComponent, useState } from 'react';

export const Form: FunctionComponent<{
  actionUrl: string;
  formFieldNames: readonly string[];
  handleLoading?: (loading: boolean) => void;
}> = ({ children, actionUrl, formFieldNames, handleLoading }) => {
  const [responseOk, setResponseOk] = useState<boolean>();
  const [errorMessage, setErrorMessage] = useState();

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
        <div className="text-center text-red-500">
          Something went wrong, try again later.
          {errorMessage ? <div>({errorMessage})</div> : null}
        </div>
      ) : null}
    </form>
  );
};
