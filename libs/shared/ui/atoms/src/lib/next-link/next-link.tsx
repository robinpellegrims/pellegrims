import Link, { LinkProps } from 'next/link';
import { FunctionComponent, PropsWithChildren } from 'react';

type NextLinkProps = LinkProps & {
  href: string;
  className?: string;
};

export const NextLink: FunctionComponent<PropsWithChildren<NextLinkProps>> = ({
  href,
  className,
  children,
  ...rest
}) => (
  <Link href={href} {...rest}>
    <a href={href} className={className}>
      {children}
    </a>
  </Link>
);
