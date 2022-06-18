import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import { contactFieldNames } from '@pellegrims/pellegrims-dev/ui/organisms';
import Mail from 'nodemailer/lib/mailer/index';
import SMTPTransport from 'nodemailer/lib/smtp-transport';

export interface ContactApiResponseBody {
  error?: string;
}

export type ContactApiRequestBody = Partial<
  Record<typeof contactFieldNames[number], string>
>;

const HTTP_NO_CONTENT = 204;
const HTTP_BAD_REQUEST = 400;
const HTTP_INTERNAL_SERVER_ERROR = 500;

const contact = async (
  req: NextApiRequest,
  res: NextApiResponse<ContactApiResponseBody>
): Promise<void> =>
  new Promise((resolve) => {
    const body: ContactApiRequestBody = req.body;

    if (body.a991396704f746f4ba5d4f88aa13e524?.length) {
      res.status(HTTP_NO_CONTENT).end();
      return resolve();
    }

    if (!body.email || !body.name || !body.message) {
      res.status(HTTP_BAD_REQUEST).json({
        error: 'Name, e-mail and message are mandatory.',
      });
      return resolve();
    }

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

    const mailData: Mail.Options = {
      from: smtpConfig.user,
      replyTo: body.email,
      to: process.env.CONTACT_MAIL_TO,
      subject: `[pellegrims.dev] Message from ${req.body.name}`,
      text: req.body.message,
    };

    if (Object.values(smtpConfig).some((value) => !value?.length)) {
      handleServerError(`Missing environment variables`, res);
      return resolve();
    }

    const transporter = nodemailer.createTransport(transportOptions);

    transporter.sendMail(mailData, (error: Error | null) => {
      if (error) {
        handleServerError(error, res);
      } else {
        res.status(HTTP_NO_CONTENT).end();
      }
      return resolve();
    });
  });

const handleServerError = (error: unknown, res: NextApiResponse) => {
  console.error(error);
  res
    .status(HTTP_INTERNAL_SERVER_ERROR)
    .json({ error: 'Error while sending e-mail' });
};

export default contact;
