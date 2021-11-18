import { FunctionComponent } from 'react';

type ButtonType = 'primary' | 'secondary';

const buttonTypeClasses: Record<ButtonType, string> = {
  primary: ' text-white bg-primary-600 hover:bg-primary-600',
  secondary: 'text-gray-700 bg-gray-100 hover:bg-gray-200 ml-4 ',
};

interface ButtonProps {
  type: ButtonType;
  text: string;
}

const Button: FunctionComponent<ButtonProps> = (props) => (
  <button
    className={`inline-flex border-0 py-2 px-6 focus:outline-none rounded text-lg ${
      buttonTypeClasses[props.type]
    }`}
  >
    {props.text}
  </button>
);

export default Button;
