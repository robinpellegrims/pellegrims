import { initTRPC, TRPCError } from '@trpc/server';
import { Context } from '../context';

const trpc = initTRPC.context<Context>().create();

export const router = trpc.router;

const isAuthed = trpc.middleware(({ next, ctx }) => {
  if (!ctx.session?.user) {
    throw new TRPCError({ code: 'UNAUTHORIZED' });
  }
  return next({ ctx });
});

export const publicProcedure = trpc.procedure;
export const protectedProcedure = trpc.procedure.use(isAuthed);
