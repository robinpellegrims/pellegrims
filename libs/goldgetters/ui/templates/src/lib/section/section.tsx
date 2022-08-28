import { FunctionComponent, PropsWithChildren } from 'react';

export const Section: FunctionComponent<PropsWithChildren> = ({ children }) => (
  <section className="py-8 lg:py-16">{children}</section>
);
