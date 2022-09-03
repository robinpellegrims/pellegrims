import * as trpcNext from '@trpc/server/adapters/next';
import { appRouter } from './router';
import { createContext } from './context';

export const trpcApiHandler = trpcNext.createNextApiHandler({
  router: appRouter,
  createContext,
  onError: ({ error }) => console.error('Error:', error),
});
