import * as trpcNext from '@trpc/server/adapters/next';
import { appRouter } from './router';

export const nextApiHandler = trpcNext.createNextApiHandler({
  router: appRouter,
  createContext: () => null,
});
