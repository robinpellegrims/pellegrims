import NextAuth, {
  NextAuthOptions,
  unstable_getServerSession,
} from 'next-auth';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { PrismaClient } from '@prisma/client/scripts/default-index';
import EmailProvider from 'next-auth/providers/email';
import { goldgettersClient } from '@pellegrims/goldgetters/db';
import { NextApiRequest, NextApiResponse } from 'next';
import { smtpTransportOptions, smtpUser } from './mail-config';

const nextAuthOptions: NextAuthOptions = {
  adapter: PrismaAdapter(goldgettersClient as PrismaClient),
  providers: [EmailProvider({ server: smtpTransportOptions, from: smtpUser })],
};

export const nextAuthApiHandler = NextAuth(nextAuthOptions);

export const getServerSession = (req: NextApiRequest, res: NextApiResponse) =>
  unstable_getServerSession(req, res, nextAuthOptions);
