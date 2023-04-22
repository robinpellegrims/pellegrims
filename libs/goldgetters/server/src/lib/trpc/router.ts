import { goldgettersClient } from '@pellegrims/goldgetters/db';
import { z } from 'zod';
import { contactMailTo, smtpTransportOptions, smtpUser } from '../mail-config';
import { createTransport } from 'nodemailer';
import { TRPCError } from '@trpc/server';
import { protectedProcedure, publicProcedure, router } from './util';

export const appRouter = router({
  locations: publicProcedure.query(async () => ({
    list: await goldgettersClient.location.findMany(),
  })),
  contact: publicProcedure
    .input(
      z.object({
        name: z.string(),
        mail: z.string(),
        subject: z.string(),
        message: z.string(),
      })
    )
    .mutation(async ({ input }) => {
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
        throw new TRPCError({
          code: 'INTERNAL_SERVER_ERROR',
          message: 'Probleem bij het verzenden van e-mail.',
          cause: error,
        });
      }
    }),
  user: protectedProcedure
    .input(
      z.object({
        name: z.string().nullable(),
        image: z.string().nullable(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const email = ctx.session?.user?.email;
      if (!email) {
        throw new TRPCError({ code: 'UNAUTHORIZED' });
      }
      return goldgettersClient.user.update({
        where: { email },
        data: { name: input.name },
      });
    }),
});

export type AppRouter = typeof appRouter;
