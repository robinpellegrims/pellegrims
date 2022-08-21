import Link from 'next/link';
import { FunctionComponent } from 'react';
import { Logo, SocialIconLink } from '@pellegrims/pellegrims-dev/ui/atoms';
import { Container } from '@pellegrims/pellegrims-dev/ui/templates';

interface FooterProps {
  facebookUrl: string;
  linkedInUrl: string;
  name: string;
  twitterUrl: string;
  githubUrl: string;
}

export const Footer: FunctionComponent<FooterProps> = (props) => (
  <Container>
    <footer className="flex flex-col items-center justify-between gap-3 py-12 sm:flex-row">
      <span className="inline-flex gap-3">
        <SocialIconLink
          href={props.twitterUrl}
          label="Twitter"
          iconType="twitter"
        />
        <SocialIconLink
          href={props.facebookUrl}
          label="Facebook"
          iconType="facebook"
        />
        <SocialIconLink
          href={props.linkedInUrl}
          label="LinkedIn"
          iconType="linkedin"
        />
        <SocialIconLink
          href={props.githubUrl}
          label="Github"
          iconType="github"
        />
      </span>
      <p className="text-dark-500 text-sm">
        © {new Date().getFullYear()} {props.name}
      </p>
      <Link href="/apps/pellegrims-dev/public">
        <a>
          <Logo end={true} />
        </a>
      </Link>
    </footer>
  </Container>
);
