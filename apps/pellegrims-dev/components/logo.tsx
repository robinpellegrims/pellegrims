interface LogoProps {
  end?: boolean;
}

export default function Logo({ end }: LogoProps) {
  return (
    <div className="font-logo text-4xl font-thin">
      &lt;pellegrims.dev {end ? '/' : ''}&gt;
    </div>
  );
}
