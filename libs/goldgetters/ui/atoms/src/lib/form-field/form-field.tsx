import { FunctionComponent, PropsWithChildren } from 'react';

type InputProps = PropsWithChildren<{
  label?: string;
  error?: string;
  id: string;
}>;

export const FormField: FunctionComponent<InputProps> = ({
  label,
  error,
  id,
  children,
}) => (
  <div className="flex flex-col gap-2">
    <label
      htmlFor={id}
      className="text-dark-900 dark:text-dark-300 block text-sm font-medium"
    >
      {label}
    </label>
    {children}
    <p className="text-sm text-red-600 dark:text-red-500">
      {error === 'required' && 'Dit veld is verplicht'}
    </p>
  </div>
);
