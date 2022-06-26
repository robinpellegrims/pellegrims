import { withOGImage } from 'next-api-og-image';
import OGImage from '../../components/og-image';
import { oGImageHeight, oGImageWidth } from '../../constants';

export default withOGImage<
  'query',
  'title' | 'description' | 'date' | 'readMinutes'
>({
  template: { react: OGImage },
  cacheControl: 'public, max-age=604800, immutable',
  dev: { inspectHtml: false },
  width: oGImageWidth,
  height: oGImageHeight,
});
