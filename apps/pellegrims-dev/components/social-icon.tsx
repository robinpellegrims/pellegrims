export interface SocialIconProps {
  href: string;
  children: unknown;
}

export default function SocialIcon(props: SocialIconProps) {
  return (
    <a
      className="text-gray-500"
      href={props.href}
      rel="noopener noreferrer"
      target="_blank"
    >
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
  );
}
