import { goldgettersClient } from '@pellegrims/goldgetters/db';
import { z } from 'zod';
import { contactMailTo, smtpTransportOptions, smtpUser } from '../mail-config';
import { createTransport } from 'nodemailer';
import { TRPCError } from '@trpc/server';
import { protectedProcedure, publicProcedure, router } from './util';
import { createS3PresignedGetUrl, createS3PresignedPutUrl } from '../s3';

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
  user: router({
    get: protectedProcedure.query(async ({ ctx }) => {
      const user = await goldgettersClient.user.findFirst({
        select: { name: true, email: true, image: true },
        where: { email: ctx.session?.user?.email },
      });
      const imageUrl = user?.image
        ? await createS3PresignedGetUrl(user.image)
        : null;
      return { ...user, imageUrl };
    }),
    update: protectedProcedure
      .input(
        z.object({
          name: z.string().nullable(),
          image: z.string().nullable(),
        })
      )
      .mutation(async ({ input, ctx }) =>
        goldgettersClient.user.update({
          where: { email: ctx.session?.user?.email ?? undefined },
          data: { name: input.name, image: input.image },
        })
      ),
  }),
  generateUploadUrl: protectedProcedure
    .input(z.object({ key: z.string() }))
    .mutation(async ({ input: { key } }) => createS3PresignedPutUrl(key)),
});

export type AppRouter = typeof appRouter;
