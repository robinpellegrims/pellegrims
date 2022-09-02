import { forwardRef, InputHTMLAttributes } from 'react';
import { FormField } from '../form-field/form-field';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, ...inputProps }, ref) => {
    const id = inputProps.id ?? label;
    return (
      <FormField id={id} label={label} error={error}>
        <input
          id={id}
          className="border-dark-300 bg-dark-50 text-dark-900 dark:border-dark-600 dark:bg-dark-700 dark:placeholder-dark-400 block w-full rounded-lg border p-2.5 text-sm focus:border-blue-500 focus:ring-blue-500 dark:text-white dark:focus:border-blue-500 dark:focus:ring-blue-500"
          {...inputProps}
          ref={ref}
        ></input>
      </FormField>
    );
  }
);
