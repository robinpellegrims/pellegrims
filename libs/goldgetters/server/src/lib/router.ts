import * as trpc from '@trpc/server';
import { goldgettersClient } from '@pellegrims/goldgetters/db';

export const appRouter = trpc.router().query('locations', {
  resolve: async () => ({ list: await goldgettersClient.location.findMany() }),
});

export type AppRouter = typeof appRouter;
