import { NextPage } from 'next';
import { ErrorSection } from '@pellegrims/goldgetters/ui/organisms';

export const Custom500: NextPage = () => (
  <ErrorSection title="500" message="Er is een serverfout opgetreden" />
);

export default Custom500;
