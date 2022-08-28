import { FunctionComponent, ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
}

export const Container: FunctionComponent<ContainerProps> = (props) => (
  <div className="container mx-auto px-4 lg:px-12">{props.children}</div>
);
