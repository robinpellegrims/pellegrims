import * as trpc from '@trpc/server';
import * as trpcNext from '@trpc/server/adapters/next';
import { goldgettersClient } from '@pellegrims/goldgetters/db';
import { getServerAuthSession } from './auth';

export async function createContext(ctx: trpcNext.CreateNextContextOptions) {
  const { req, res } = ctx;
  const session = await getServerAuthSession(req, res);

  return {
    req,
    res,
    session,
    goldgettersClient,
  };
}

export type Context = trpc.inferAsyncReturnType<typeof createContext>;
