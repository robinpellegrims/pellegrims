import { FunctionComponent } from 'react';
import { Container } from '@pellegrims/goldgetters/ui/templates';
import { SocialLink } from '@pellegrims/goldgetters/ui/atoms';

interface FooterProps {
  facebookUrl: string;
  twitterUrl: string;
  githubUrl: string;
}

export const Footer: FunctionComponent<FooterProps> = ({
  facebookUrl,
  twitterUrl,
  githubUrl,
}) => (
  <Container>
    <div className="py-4 sm:py-6">
      <hr className="dark:border-dark-700 border-dark-200 my-6 sm:mx-auto lg:my-8" />
      <div className="flex flex-col items-center justify-between sm:flex-row">
        <span className="text-dark-500 dark:text-dark-400 text-sm sm:text-center">
          © 2012-{new Date().getFullYear()} Robin Pellegrims
        </span>
        <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
          <SocialLink href={facebookUrl} type="facebook" />
          <SocialLink href={twitterUrl} type="twitter" />
          <SocialLink href={githubUrl} type="github" />
        </div>
      </div>
    </div>
  </Container>
);
