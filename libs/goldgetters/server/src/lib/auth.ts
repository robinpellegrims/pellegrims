import NextAuth, {
  DefaultSession,
  getServerSession,
  NextAuthOptions,
} from 'next-auth';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { PrismaClient } from '@prisma/client/scripts/default-index';
import EmailProvider from 'next-auth/providers/email';
import { goldgettersClient } from '@pellegrims/goldgetters/db';
import { NextApiRequest, NextApiResponse } from 'next';
import { smtpTransportOptions, smtpUser } from './mail-config';
import { createS3PresignedGetUrl } from './s3';

const nextAuthOptions: NextAuthOptions = {
  adapter: PrismaAdapter(goldgettersClient as PrismaClient),
  providers: [EmailProvider({ server: smtpTransportOptions, from: smtpUser })],
  callbacks: {
    async session({ session, user }): Promise<DefaultSession> {
      const imageUrl = user?.image
        ? await createS3PresignedGetUrl(user.image)
        : null;
      return { ...session, user: { ...session.user, image: imageUrl } };
    },
  },
};

export const nextAuthApiHandler = NextAuth(nextAuthOptions);

export const getServerAuthSession = (
  req: NextApiRequest,
  res: NextApiResponse
) => getServerSession(req, res, nextAuthOptions);
