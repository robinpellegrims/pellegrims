import { FunctionComponent, ReactNode } from 'react';

export const SocialIcon: FunctionComponent<{ children: ReactNode }> = (
  props
) => (
  <svg
    fill="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    className="w-5 h-5"
    viewBox="0 0 24 24"
  >
    {props.children}
  </svg>
);
