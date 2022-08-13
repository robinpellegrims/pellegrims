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
  <div className="min-h-screen flex flex-col">
    {header}
    <main className="py-12 flex-auto flex flex-col justify-center">
      {content}
    </main>
    {footer}
  </div>
);
