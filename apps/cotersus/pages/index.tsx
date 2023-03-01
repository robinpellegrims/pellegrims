import Image from 'next/image';
import logo from '../public/logo.svg';

export const Index = () => (
  <div className="absolute flex h-full w-full flex-col justify-center">
    <div className="flex flex-col gap-6">
      <Image src={logo} alt="logo" className="m-auto" />
      <div className="text-center">
        <h1 className="font-fjalla text-8xl">Cotersus</h1>
        <h2 className="font-montserrat text-4xl">IT Consulting</h2>
        <h3>CI test</h3>
      </div>
    </div>
  </div>
);

export default Index;
