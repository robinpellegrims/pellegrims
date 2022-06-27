import { withOGImage } from 'next-api-og-image';
import OGImage from '../../components/og-image';
import { oGImageHeight, oGImageWidth } from '../../constants';
import { OGImageParams } from '../../utils/url';

export default withOGImage<'query', keyof OGImageParams>({
  template: { react: OGImage },
  cacheControl: 'public, max-age=604800, immutable',
  dev: { inspectHtml: false },
  width: oGImageWidth,
  height: oGImageHeight,
});
