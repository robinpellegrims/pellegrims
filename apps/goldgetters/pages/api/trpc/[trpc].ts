import * as trpc from '@trpc/server';
import * as trpcNext from '@trpc/server/adapters/next';
import { GoldgettersClient } from '@pellegrims/goldgetters/db';

const prisma = new GoldgettersClient();

export const appRouter = trpc.router().query('locations', {
  resolve: async () => ({ list: await prisma.location.findMany() }),
});

export type AppRouter = typeof appRouter;

export default trpcNext.createNextApiHandler({
  router: appRouter,
  createContext: () => null,
});
