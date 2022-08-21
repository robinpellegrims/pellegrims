import { DateFormatted, Logo } from '@pellegrims/pellegrims-dev/ui/atoms';
import { avataaarUrl, twitterHandle } from '../constants';
import { FunctionComponent, PropsWithChildren } from 'react';

const style = `
  .font-logo {
    font-family: 'Caveat', cursive;
  }
`;

const Profile = () => (
  <div className="flex flex-row justify-center gap-4">
    <img className="w-16 rounded-full" src={avataaarUrl} />
    <div className="flex flex-col justify-center">
      <span className="text-2xl font-medium">Robin Pellegrims</span>
      <span className="">
        <div>{twitterHandle}</div>
      </span>
    </div>
  </div>
);

const Row: FunctionComponent<PropsWithChildren> = ({ children }) => (
  <div className="flex w-full flex-row items-center justify-between">
    {children}
  </div>
);

const Header = (props: { date: string; readMinutes: string }) => (
  <Row>
    <Logo end={false} />
    <div>
      <DateFormatted date={new Date(props.date)} />
      {props.readMinutes ? ` · ${props.readMinutes} min read` : null}
    </div>
  </Row>
);

const Content = (props: { title: string; description: string }) => (
  <div className="flex flex-col gap-6 bg-gradient-to-br from-red-500 to-yellow-500 bg-clip-text text-center text-transparent">
    <h1 className="grow text-7xl font-bold">{props.title}</h1>
    <p className="text-3xl leading-relaxed">{props.description}</p>
  </div>
);

const Footer = () => (
  <Row>
    <Profile /> <Logo end={true} />
  </Row>
);

export const OGImage = ({
  title,
  description,
  date,
  readMinutes,
}: {
  title: string;
  description: string;
  date: string;
  readMinutes: string;
}) => (
  <html>
    <head>
      {/* eslint-disable-next-line @next/next/no-sync-scripts */}
      <script src="https://cdn.tailwindcss.com/3.1.3" />
      <link
        href="https://fonts.googleapis.com/css?family=Caveat&display=swap"
        rel="stylesheet"
      />
      <style dangerouslySetInnerHTML={{ __html: style }} />
    </head>
    <body className="flex h-full flex-col justify-between bg-zinc-800 p-12 text-2xl text-white">
      <Header date={date} readMinutes={readMinutes} />
      <Content title={title} description={description} />
      <Footer />
    </body>
  </html>
);

export default OGImage;
