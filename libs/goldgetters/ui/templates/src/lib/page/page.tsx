import { FunctionComponent, ReactElement } from 'react';

interface PageTemplateProps {
  header: ReactElement;
  content: ReactElement;
  footer: ReactElement;
}

export const PageTemplate: FunctionComponent<PageTemplateProps> = ({
  header,
  content,
  footer,
}) => (
  <div className="flex flex-col min-h-screen">
    <header className="sticky top-0">{header}</header>
    <main className="grow overflow-y-auto">{content}</main>
    <footer>{footer}</footer>
  </div>
);
