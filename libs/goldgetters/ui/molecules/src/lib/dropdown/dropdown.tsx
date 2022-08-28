import {
  Children,
  FunctionComponent,
  PropsWithChildren,
  ReactElement,
  useState,
} from 'react';
import { NextLink } from '@pellegrims/shared/ui/atoms';

const positionMapping: Record<DropdownPosition, 'right-0' | 'left-0'> = {
  left: 'right-0',
  right: 'left-0',
};

type DropdownPosition = 'right' | 'left';

export const Dropdown: FunctionComponent<
  PropsWithChildren<{
    triggerComponent: ReactElement;
    position?: DropdownPosition;
  }>
> = ({ children, triggerComponent, position = 'right' }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  return (
    <div onBlur={() => setDropdownOpen(false)} className="relative">
      <div onClick={() => setDropdownOpen((prev) => !prev)}>
        {triggerComponent}
      </div>
      <div
        onMouseDown={(event) => event.preventDefault()}
        onClick={() => setDropdownOpen(false)}
        className={`absolute ${positionMapping[position]} z-50 my-4
        ${isDropdownOpen ? '' : 'hidden'} 
        dark:bg-dark-700 divide-dark-100 dark:divide-dark-600 list-none divide-y rounded bg-white text-base shadow`}
      >
        {children}
      </div>
    </div>
  );
};

export const DropDownSection: FunctionComponent<PropsWithChildren> = ({
  children,
}) => (
  <ul>
    {Children.toArray(children).map((child, index) => (
      <li key={index}>{child}</li>
    ))}
  </ul>
);

export const DropdownLink: FunctionComponent<{
  text: string;
  href: string;
}> = ({ text, href }) => (
  <NextLink
    href={href}
    className="hover:bg-dark-100 dark:hover:bg-dark-600 text-dark-700 dark:text-dark-200 block py-2 px-4 text-sm dark:hover:text-white"
  >
    {text}
  </NextLink>
);
