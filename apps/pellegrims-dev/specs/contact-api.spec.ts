import contact, { ContactApiRequestBody } from '../pages/api/contact';
import { NextApiRequest, NextApiResponse } from 'next';
import { createMocks } from 'node-mocks-http';
import nodemailer from 'nodemailer';
import { mocked } from 'jest-mock';

jest.mock('nodemailer');
const nodeMailerMock = mocked(nodemailer, true);

const sendMailMock = jest.fn().mockImplementation((_, callback) => callback());
nodeMailerMock.createTransport = jest.fn().mockReturnValue({
  sendMail: sendMailMock,
});

const defaultRequestBody: ContactApiRequestBody = {
  email: 'name@domain.com',
  message: 'Message',
  name: 'name',
};

/* eslint-disable @typescript-eslint/naming-convention */
const defaultEnv = {
  SMTP_PORT: '1234',
  SMTP_HOST: 'Host',
  SMTP_USER: 'User',
  SMTP_PASS: 'Password',
  SMTP_DKIM_DOMAIN: 'domain',
  SMTP_DKIM_KEY_SELECTOR: 'selector',
  SMTP_DKIM_PRIVATE_KEY: 'private key',
};
/* eslint-enable @typescript-eslint/naming-convention */

const OLD_ENV = process.env;

const createNextApiMocks = (
  requestBody: ContactApiRequestBody
): { req: NextApiRequest; res: NextApiResponse } =>
  createMocks({ body: requestBody });

describe('/api/contact', () => {
  beforeEach(() => {
    process.env = { ...OLD_ENV };
  });

  test('should respond with 204 when hidden field is added ', async () => {
    const { req, res } = createNextApiMocks({
      a991396704f746f4ba5d4f88aa13e524: 'true',
    });
    await contact(req, res);
    expect(res.statusCode).toBe(204);
  });

  describe('should respond with 400 when fields are missing', () => {
    test.each(['name', 'email', 'message'] as string[])('%s', async (field) => {
      const { [field]: removedProperty, ...requestBody } = defaultRequestBody;
      const { req, res } = createNextApiMocks(requestBody);
      await contact(req, res);
      expect(res.statusCode).toBe(400);
    });
  });

  describe('should respond with 500 when env vars are missing', () => {
    test.each([
      'SMTP_PORT',
      'SMTP_HOST',
      'SMTP_USER',
      'SMTP_PASS',
      'SMTP_DKIM_DOMAIN',
      'SMTP_DKIM_KEY_SELECTOR',
      'SMTP_DKIM_PRIVATE_KEY',
    ] as string[])('%s', async (missingVar) => {
      const { [missingVar]: removedProperty, ...processEnv } = defaultEnv;
      process.env = { ...OLD_ENV, ...processEnv };
      const { req, res } = createNextApiMocks(defaultRequestBody);
      await contact(req, res);
      expect(res.statusCode).toBe(500);
    });
  });

  test('should send the mail', async () => {
    process.env = { ...OLD_ENV, ...defaultEnv };
    const { req, res } = createNextApiMocks(defaultRequestBody);
    await contact(req, res);
    expect(sendMailMock).toBeCalledTimes(1);
  });
});
