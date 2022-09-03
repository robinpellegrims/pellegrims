import { FunctionComponent } from 'react';

type AlertType = 'info' | 'danger' | 'success' | 'warning';

export interface AlertProps {
  title: string;
  text: string;
  type: AlertType;
}

const classNamesMapping: Record<AlertType, string> = {
  danger: 'bg-red-100 text-red-700 dark:bg-red-200 dark:text-red-800',
  info: 'bg-blue-100 text-blue-700 dark:bg-blue-200 dark:text-blue-800',
  success: 'bg-green-100 text-green-700  dark:bg-green-200 dark:text-green-800',
  warning:
    'bg-yellow-100 text-yellow-700 dark:bg-yellow-200 dark:text-yellow-800',
};

export const Alert: FunctionComponent<AlertProps> = ({ title, text, type }) => (
  <div
    className={`mb-4 rounded-lg p-4 text-sm ${classNamesMapping[type]}`}
    role="alert"
  >
    <span className="font-medium">{title}</span> {text}
  </div>
);
