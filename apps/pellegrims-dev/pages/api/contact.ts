import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import { contactFieldNames } from '@pellegrims/pellegrims-dev/ui/organisms';
import Mail from 'nodemailer/lib/mailer/index';

export interface ContactApiResponseBody {
  error?: string;
}

const contact = async (
  req: NextApiRequest,
  res: NextApiResponse<ContactApiResponseBody>
): Promise<void> => {
  const body: Partial<Record<typeof contactFieldNames[number], string>> =
    req.body;

  if (body.a991396704f746f4ba5d4f88aa13e524) {
    return res.status(200).json({});
  }

  if (!body.email || !body.name || !body.message) {
    return res.status(400).json({
      error: 'Name, e-mail and message are mandatory.',
    });
  }

  const port = process.env.SMTP_PORT;
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  const mailData: Mail.Options = {
    from: user,
    replyTo: body.email,
    to: process.env.CONTACT_MAIL_TO,
    subject: `[pellegrims.dev] Message from ${req.body.name}`,
    text: req.body.message,
    html: `<div>${body.message}</div>`,
  };

  if (!port || !host || !user || !pass) {
    handleError(
      `Missing environment variables: ${{ host, port, user, pass }}`,
      res
    );
    return;
  }

  const transporter = nodemailer.createTransport({
    port: +port,
    host,
    auth: { user, pass },
    secure: true,
  });

  transporter.sendMail(mailData, (error) => {
    if (error) {
      handleError(error, res);
      return;
    } else {
      res.status(200).json({});
    }
  });
};

const handleError = (error: unknown, res: NextApiResponse) => {
  console.error(error);
  res.status(500).json({ error: 'Error while sending e-mail' });
};

export default contact;
