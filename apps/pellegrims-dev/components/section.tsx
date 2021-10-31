export interface SectionProps {
  children: React.ReactNode;
}

export function Section(props: SectionProps) {
  return <section>{props.children}</section>;
}

export default Section;
