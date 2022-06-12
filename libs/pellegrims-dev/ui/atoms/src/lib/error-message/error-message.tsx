import { FunctionComponent } from 'react';

interface ErrorMessageProps {
  errorMessage?: string;
}

export const ErrorMessage: FunctionComponent<ErrorMessageProps> = ({
  errorMessage,
}) => (
  <div className="text-center text-red-500">
    Something went wrong, try again later.
    {errorMessage ? <div>({errorMessage})</div> : null}
  </div>
);
