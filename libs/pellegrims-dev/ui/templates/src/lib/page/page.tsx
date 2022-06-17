import { FunctionComponent, ReactElement } from 'react';
import { NextSeo } from 'next-seo';
import { Container } from '../container/container';
import { NextSeoProps } from 'next-seo/lib/types';

interface PageTemplateProps {
  seoProps: NextSeoProps;
  header: ReactElement;
  children?: ReactElement;
}

export const PageTemplate: FunctionComponent<PageTemplateProps> = ({
  seoProps,
  header,
  children,
}) => (
  <>
    <NextSeo {...seoProps} />
    <Container>
      <>
        {header}
        {children}
      </>
    </Container>
  </>
);
