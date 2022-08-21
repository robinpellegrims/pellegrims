import { FunctionComponent } from 'react';

export const RightArrow: FunctionComponent = () => (
  <svg
    className="ml-2 h-4 w-4"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 12h14" />
    <path d="M12 5l7 7-7 7" />
  </svg>
);
