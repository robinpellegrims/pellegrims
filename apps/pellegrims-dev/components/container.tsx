export interface ContainerProps {
  children: unknown;
}

export function Container(props: ContainerProps) {
  return <div className="container px-6">{props.children}</div>;
}

export default Container;
