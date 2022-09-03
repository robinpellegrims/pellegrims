import { z } from 'zod';
import * as SMTPTransport from 'nodemailer/lib/smtp-transport';

/* eslint-disable @typescript-eslint/naming-convention */
const mailConfigSchema = z.object({
  SMTP_PORT: z.string().min(1),
  SMTP_HOST: z.string().min(1),
  SMTP_USER: z.string().min(1),
  SMTP_PASS: z.string().min(1),
  SMTP_DKIM_DOMAIN: z.string().min(1),
  SMTP_DKIM_KEY_SELECTOR: z.string().min(1),
  SMTP_DKIM_PRIVATE_KEY: z.string().min(1),
  CONTACT_MAIL_TO: z.string().min(1),
});
/* eslint-enable @typescript-eslint/naming-convention */

const mailConfig = mailConfigSchema.parse(process.env);

export const smtpUser = mailConfig.SMTP_USER;

export const contactMailTo = mailConfig.CONTACT_MAIL_TO;

export const smtpTransportOptions: SMTPTransport.Options = {
  port: mailConfig.SMTP_PORT ? +mailConfig.SMTP_PORT : undefined,
  host: mailConfig.SMTP_HOST,
  auth: { user: mailConfig.SMTP_USER, pass: mailConfig.SMTP_PASS },
  secure: true,
  dkim:
    mailConfig.SMTP_DKIM_DOMAIN &&
    mailConfig.SMTP_DKIM_KEY_SELECTOR &&
    mailConfig.SMTP_DKIM_PRIVATE_KEY
      ? {
          domainName: mailConfig.SMTP_DKIM_DOMAIN,
          keySelector: mailConfig.SMTP_DKIM_KEY_SELECTOR,
          privateKey: mailConfig.SMTP_DKIM_PRIVATE_KEY,
        }
      : undefined,
};
