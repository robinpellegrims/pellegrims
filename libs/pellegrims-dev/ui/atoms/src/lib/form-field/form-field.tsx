import {
  FunctionComponent,
  InputHTMLAttributes,
  TextareaHTMLAttributes,
} from 'react';

interface FormFieldProps<InputType extends 'input' | 'textarea'> {
  label: string;
  type: InputType;
  htmlAttributes: InputType extends 'input'
    ? InputHTMLAttributes<HTMLInputElement>
    : InputType extends 'textarea'
    ? TextareaHTMLAttributes<HTMLTextAreaElement>
    : never;
}

type InputFieldProps = FormFieldProps<'input'>;
type TextAreaFieldProps = FormFieldProps<'textarea'>;

const inputClassNames =
  'w-full bg-dark-50 dark:bg-dark-700 bg-opacity-50 rounded border border-gray-300 focus:border-primary-500 focus:bg-white dark:focus:bg-dark-600 focus:ring-2 focus:ring-primary-200 text-base outline-none text-dark-700 dark:text-dark-200 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out';

export const FormField: FunctionComponent<
  InputFieldProps | TextAreaFieldProps
> = (props) => {
  const inputId = `field-${props.label}`;
  return (
    <div>
      <label htmlFor={inputId} className="leading-7 text-sm">
        {props.label}
      </label>
      {props.type === 'input' ? (
        <input
          {...props.htmlAttributes}
          id={inputId}
          className={inputClassNames}
        />
      ) : null}
      {props.type === 'textarea' ? (
        <textarea
          {...props.htmlAttributes}
          id={inputId}
          className={inputClassNames}
        />
      ) : null}
    </div>
  );
};
