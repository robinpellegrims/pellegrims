import { FunctionComponent } from 'react';

interface SectionProps {
  children: React.ReactNode;
}

const Section: FunctionComponent<SectionProps> = (props) => (
  <section>{props.children}</section>
);

export default Section;
