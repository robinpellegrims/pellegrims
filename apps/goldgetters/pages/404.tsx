import { NextPage } from 'next';
import { ErrorSection } from '@pellegrims/goldgetters/ui/organisms';

export const Custom404: NextPage = () => (
  <ErrorSection title="404" message="Deze pagina bestaat niet." />
);

export default Custom404;
