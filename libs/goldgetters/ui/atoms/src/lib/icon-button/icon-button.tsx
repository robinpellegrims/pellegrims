import { FunctionComponent, PropsWithChildren } from 'react';

export const IconButton: FunctionComponent<
  PropsWithChildren<{ onClick?: VoidFunction }>
> = ({ onClick, children }) => (
  <button
    onClick={onClick}
    type="button"
    className="inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
  >
    {children}
  </button>
);
