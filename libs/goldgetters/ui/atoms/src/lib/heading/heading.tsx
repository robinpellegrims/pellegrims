import { FunctionComponent, HTMLAttributes, PropsWithChildren } from 'react';

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

export interface HeadingProps
  extends Pick<HTMLAttributes<unknown>, 'className'> {
  level: HeadingLevel;
}

const classNames: Record<HeadingLevel, string> = {
  1: 'text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight',
  2: 'text-4xl font-bold',
  3: 'text-3xl font-bold',
  4: 'text-2xl font-bold',
  5: 'text-xl font-bold',
  6: 'text-lg font-bold',
};

export const Heading: FunctionComponent<PropsWithChildren<HeadingProps>> = ({
  level,
  children,
}) => {
  const Tag: keyof JSX.IntrinsicElements = `h${level}`;
  return <Tag className={classNames[level]}>{children}</Tag>;
};
