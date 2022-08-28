import { FunctionComponent, ReactElement } from 'react';

interface PageTemplateProps {
  header: ReactElement;
  content: ReactElement;
  footer: ReactElement;
}

export const AppTemplate: FunctionComponent<PageTemplateProps> = ({
  header,
  content,
  footer,
}) => (
  <div className="flex min-h-screen flex-col">
    <header className="sticky top-0">{header}</header>
    <main className="grow overflow-y-auto">{content}</main>
    <footer>{footer}</footer>
  </div>
);
