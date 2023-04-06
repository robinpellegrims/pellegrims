import { FunctionComponent, PropsWithChildren } from 'react';

export const IconButton: FunctionComponent<
  PropsWithChildren<{ onClick?: VoidFunction; label?: string }>
> = ({ onClick, children, label }) => (
  <button
    onClick={onClick}
    type="button"
    className="text-dark-500 hover:bg-dark-100 focus:ring-dark-200 dark:text-dark-400 dark:hover:bg-dark-700 dark:focus:ring-dark-600 inline-flex items-center rounded-lg p-2 text-sm focus:outline-none focus:ring-2"
    aria-label={label}
  >
    {children}
  </button>
);
