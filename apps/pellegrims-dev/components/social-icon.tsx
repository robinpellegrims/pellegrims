import Link from 'next/link';

export interface SocialIconProps {
  href: string;
  children: React.ReactNode;
  label: string;
}

export default function SocialIcon(props: SocialIconProps) {
  return (
    <Link href={props.href}>
      <a rel="noopener noreferrer" target="_blank" aria-label={props.label}>
        <svg
          fill="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="w-5 h-5"
          viewBox="0 0 24 24"
        >
          {props.children}
        </svg>
      </a>
    </Link>
  );
}
