import OGImage from '../../components/og-image';
import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';
import { oGImageHeight, oGImageWidth } from '../../constants';

export const config = { runtime: 'experimental-edge' };

export default (req: NextRequest) => {
  const { searchParams } = new URL(req.url);
  return new ImageResponse(
    (
      <OGImage
        title={searchParams.get('title') ?? ''}
        date={searchParams.get('date') ?? ''}
        description={searchParams.get('description') ?? ''}
        readMinutes={searchParams.get('readMinutes') ?? ''}
      />
    ),
    { width: oGImageWidth, height: oGImageHeight, debug: false }
  );
};
