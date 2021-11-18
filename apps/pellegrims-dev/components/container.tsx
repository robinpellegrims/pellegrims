import { FunctionComponent, ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
}

const Container: FunctionComponent<ContainerProps> = (props) => (
  <div className="container px-6">{props.children}</div>
);

export default Container;
