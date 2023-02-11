import { DateFormatted } from '@pellegrims/pellegrims-dev/ui/atoms';
import { twitterHandle } from '../constants';
import { FunctionComponent, PropsWithChildren } from 'react';

import colors from 'tailwindcss/colors';

const Profile = () => (
  <div tw="flex flex-row items-center">
    <img
      tw="w-24 rounded-full mr-4"
      src="https://www.pellegrims.dev/avataaar.png"
      alt="avatar"
    />
    <div tw="flex flex-col justify-center">
      <span tw="font-medium">Robin Pellegrims</span>
      <span>
        <div>{twitterHandle}</div>
      </span>
    </div>
  </div>
);

const Row: FunctionComponent<PropsWithChildren> = ({ children }) => (
  <div tw="flex w-full flex-row items-center justify-between">{children}</div>
);

const Header = (props: { date: string; readMinutes: string }) => (
  <Row>
    <Profile />
    <div tw="flex flex-row">
      <DateFormatted date={new Date(props.date)} />
      <div tw="px-2">·</div>
      {props.readMinutes ? `${props.readMinutes} min read` : null}
    </div>
  </Row>
);

const Content = (props: { title: string; description: string }) => (
  <div
    style={{
      backgroundImage: `linear-gradient(to right, ${colors.red['500']}, ${colors.yellow['500']})`,
      backgroundClip: 'text',
    }}
    tw="flex flex-col items-center text-transparent text-center"
  >
    <h1 tw="text-7xl font-extrabold">{props.title}</h1>
    <p tw="text-4xl">{props.description}</p>
  </div>
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
  <div
    style={{
      height: '100%',
      width: '100%',
      display: 'flex',
    }}
  >
    <div tw="flex flex-col h-full w-full flex-col items-stretch bg-zinc-800 p-12 text-3xl text-white">
      <Header date={date} readMinutes={readMinutes} />
      <div tw="flex grow justify-center items-center">
        <Content title={title} description={description} />
      </div>
    </div>
  </div>
);

export default OGImage;
