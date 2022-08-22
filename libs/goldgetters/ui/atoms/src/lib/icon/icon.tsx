import { FunctionComponent, ReactElement } from 'react';
import {
  MenuIcon,
  MoonIcon,
  SunIcon,
  UserIcon,
} from '@heroicons/react/outline';

export type IconType = 'sun' | 'moon' | 'user' | 'hamburger';

export interface IconProps {
  type: IconType;
}

const iconMapping: Record<IconType, ReactElement> = {
  moon: <MoonIcon className="h-6 w-6" />,
  sun: <SunIcon className="h-6 w-6" />,
  user: <UserIcon className="h-6 w-6" />,
  hamburger: <MenuIcon className="h-6 w-6" />,
};

export const Icon: FunctionComponent<IconProps> = ({ type }) =>
  iconMapping[type];
