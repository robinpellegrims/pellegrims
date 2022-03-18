import { FunctionComponent } from 'react';
import { LoadingSpinner } from './loadingSpinner';

type ButtonType = 'primary' | 'secondary';

const buttonTypeClasses: Record<ButtonType, string> = {
  primary:
    'text-white bg-primary-600 hover:bg-primary-700 disabled:bg-primary-500',
  secondary:
    'text-gray-700 bg-gray-100 hover:bg-gray-200 ml-4 disabled:text-gray-600',
};

interface ButtonProps {
  type: ButtonType;
  text: string;
  loading?: boolean;
}

const Button: FunctionComponent<ButtonProps> = ({ loading, type, text }) => (
  <button
    className={`inline-flex border-0 py-2 px-6 focus:outline-none rounded text-lg disabled:cursor-not-allowed ${buttonTypeClasses[type]}`}
    disabled={loading}
  >
    {loading ? (
      <div className="mt-1">
        <LoadingSpinner />
      </div>
    ) : null}
    {text}
  </button>
);

export default Button;
