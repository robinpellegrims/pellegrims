import Image from 'next/image';
import * as logo from '../public/logo.png';

export const Index = () => (
  <div className="flex h-screen justify-center items-center bg-gradient-to-b from-red-900 to-red-900 via-red-600">
    <div className="margin-auto">
      <Image src={logo} alt="ZVC Goldgetters logo" />
    </div>
  </div>
);

export default Index;
