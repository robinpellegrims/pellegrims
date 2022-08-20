import NextAuth, {
  NextAuthOptions,
  unstable_getServerSession,
} from 'next-auth';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { PrismaClient } from '@prisma/client/scripts/default-index';
import EmailProvider from 'next-auth/providers/email';
import { goldgettersClient } from '@pellegrims/goldgetters/db';
import * as SMTPTransport from 'nodemailer/lib/smtp-transport';
import { NextApiRequest, NextApiResponse } from 'next';

const smtpConfig = {
  port: process.env.SMTP_PORT,
  host: process.env.SMTP_HOST,
  user: process.env.SMTP_USER,
  pass: process.env.SMTP_PASS,
  dkimDomain: process.env.SMTP_DKIM_DOMAIN,
  dkimKeySelector: process.env.SMTP_DKIM_KEY_SELECTOR,
  dkimPrivateKey: process.env.SMTP_DKIM_PRIVATE_KEY,
};

const transportOptions: SMTPTransport.Options = {
  port: smtpConfig.port ? +smtpConfig.port : undefined,
  host: smtpConfig.host,
  auth: { user: smtpConfig.user, pass: smtpConfig.pass },
  secure: true,
  dkim:
    smtpConfig.dkimDomain &&
    smtpConfig.dkimKeySelector &&
    smtpConfig.dkimPrivateKey
      ? {
          domainName: smtpConfig.dkimDomain,
          keySelector: smtpConfig.dkimKeySelector,
          privateKey: smtpConfig.dkimPrivateKey,
        }
      : undefined,
};

const nextAuthOptions: NextAuthOptions = {
  adapter: PrismaAdapter(goldgettersClient as PrismaClient),
  providers: [
    EmailProvider({ server: transportOptions, from: smtpConfig.user }),
  ],
};

export const nextAuthApiHandler = NextAuth(nextAuthOptions);

export const getServerSession = (req: NextApiRequest, res: NextApiResponse) =>
  unstable_getServerSession(req, res, nextAuthOptions);
