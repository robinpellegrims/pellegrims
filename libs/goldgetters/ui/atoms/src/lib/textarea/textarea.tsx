import { forwardRef, TextareaHTMLAttributes } from 'react';
import { FormField } from '../form-field/form-field';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, ...inputProps }, ref) => {
    const id = inputProps.id ?? label;
    return (
      <FormField id={id} label={label} error={error}>
        <textarea
          id={id}
          className="border-dark-300 bg-dark-50 text-dark-900 dark:border-dark-600 dark:bg-dark-700 dark:placeholder-dark-400 block w-full rounded-lg border p-2.5 text-sm focus:border-blue-500 focus:ring-blue-500 dark:text-white dark:focus:border-blue-500 dark:focus:ring-blue-500"
          {...inputProps}
          ref={ref}
        ></textarea>
      </FormField>
    );
  }
);
