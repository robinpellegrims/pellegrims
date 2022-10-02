import * as trpc from '@trpc/server';
import { goldgettersClient } from '@pellegrims/goldgetters/db';
import { z } from 'zod';
import { contactMailTo, smtpTransportOptions, smtpUser } from './mail-config';
import { createTransport } from 'nodemailer';
import { Context } from './context';

export const appRouter = trpc
  .router<Context>()
  .query('locations', {
    resolve: async () => ({
      list: await goldgettersClient.location.findMany(),
    }),
  })
  .mutation('contact', {
    input: z.object({
      name: z.string(),
      mail: z.string(),
      subject: z.string(),
      message: z.string(),
    }),
    resolve: async ({ input }) => {
      const transporter = createTransport(smtpTransportOptions);
      try {
        await transporter.sendMail({
          from: smtpUser,
          replyTo: input.mail,
          to: contactMailTo,
          subject: `[Goldgetters] Bericht van ${input.name}`,
          text: input.message,
        });
        return;
      } catch (error) {
        throw new trpc.TRPCError({
          code: 'INTERNAL_SERVER_ERROR',
          message: 'Probleem bij het verzenden van e-mail.',
          cause: error,
        });
      }
    },
  })
  .mutation('user', {
    input: z.object({
      name: z.string().nullable(),
      image: z.string().nullable(),
    }),
    resolve: async ({ input, ctx }) => {
      const email = ctx.session?.user?.email;
      if (!email) {
        throw new trpc.TRPCError({ code: 'UNAUTHORIZED' });
      }
      return goldgettersClient.user.update({
        where: { email },
        data: { name: input.name },
      });
    },
  });

export type AppRouter = typeof appRouter;
