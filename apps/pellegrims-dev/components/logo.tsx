import { FunctionComponent } from 'react';

interface LogoProps {
  end?: boolean;
}

const Logo: FunctionComponent<LogoProps> = ({ end }) => (
  <div className="font-logo text-4xl font-thin">
    &lt;pellegrims.dev {end ? '/' : ''}&gt;
  </div>
);

export default Logo;
