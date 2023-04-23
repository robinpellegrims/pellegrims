import { z } from 'zod';
import { GetObjectCommand, PutObjectCommand, S3 } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

/* eslint-disable @typescript-eslint/naming-convention */
const s3Schema = z.object({
  S3_BUCKET_NAME: z.string().min(1),
  S3_REGION: z.string().min(1),
  S3_ACCESS_KEY: z.string().min(1),
  S3_SECRET_ACCESS_KEY: z.string().min(1),
  S3_ENDPOINT: z.string().min(1),
});
/* eslint-enable @typescript-eslint/naming-convention */

const s3Config = s3Schema.parse(process.env);

const s3 = new S3({
  region: s3Config.S3_REGION,
  endpoint: s3Config.S3_ENDPOINT,
  credentials: {
    accessKeyId: s3Config.S3_ACCESS_KEY,
    secretAccessKey: s3Config.S3_SECRET_ACCESS_KEY,
  },
});

export const createS3PresignedPutUrl = (key: string) =>
  getSignedUrl(
    s3,
    /* eslint-disable @typescript-eslint/naming-convention */
    new PutObjectCommand({
      Bucket: s3Config.S3_BUCKET_NAME,
      Key: key,
    })
    /* eslint-enable @typescript-eslint/naming-convention */
  );

export const createS3PresignedGetUrl = (key: string) =>
  getSignedUrl(
    s3,
    /* eslint-disable @typescript-eslint/naming-convention */
    new GetObjectCommand({
      Bucket: s3Config.S3_BUCKET_NAME,
      Key: key,
    })
    /* eslint-enable @typescript-eslint/naming-convention */
  );
