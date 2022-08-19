import * as trpc from '@trpc/server';
import { GoldgettersClient } from '@pellegrims/goldgetters/db';

const prisma = new GoldgettersClient();

export const appRouter = trpc.router().query('locations', {
  resolve: async () => ({ list: await prisma.location.findMany() }),
});

export type AppRouter = typeof appRouter;
