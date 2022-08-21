import { FunctionComponent, ReactElement } from 'react';

interface HomeTemplateProps {
  header: ReactElement;
  content: ReactElement;
  footer: ReactElement;
}

export const HomeTemplate: FunctionComponent<HomeTemplateProps> = ({
  header,
  content,
  footer,
}) => (
  <div className="flex min-h-screen flex-col">
    {header}
    <main className="flex flex-auto flex-col justify-center py-12">
      {content}
    </main>
    {footer}
  </div>
);
