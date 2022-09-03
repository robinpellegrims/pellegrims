import * as trpc from '@trpc/server';
import { goldgettersClient } from '@pellegrims/goldgetters/db';
import { z } from 'zod';
import { contactMailTo, smtpTransportOptions, smtpUser } from './mail-config';
import { createTransport } from 'nodemailer';

export const appRouter = trpc
  .router()
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
  });

export type AppRouter = typeof appRouter;
