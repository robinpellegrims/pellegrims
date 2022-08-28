import { FunctionComponent } from 'react';
import { Icon } from '../icon/icon';

interface IconLinkProps {
  href: string;
  type: 'twitter' | 'facebook' | 'github';
}

export const SocialLink: FunctionComponent<IconLinkProps> = ({
  href,
  type,
}) => (
  <a
    href={href}
    className="text-dark-500 hover:text-dark-900 dark:hover:text-white"
    target="_blank"
    rel="noreferrer"
  >
    <Icon type={type} />
    <span className="sr-only">{type} page</span>
  </a>
);
