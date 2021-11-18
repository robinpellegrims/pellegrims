import { createCustomRunner, initEnv } from 'nx-remotecache-custom';
import { S3 } from '@aws-sdk/client-s3';
import * as getStream from 'get-stream';
import { Stream } from 'stream';

const ENV_ACCESS_KEY_ID = 'NX_CACHE_S3_ACCESS_KEY_ID';
const ENV_SECRET_KEY = 'NX_CACHE_S3_SECRET_KEY';
const ENV_BUCKET = 'NX_CACHE_S3_BUCKET';
const ENV_ENDPOINT = 'NX_CACHE_S3_ENDPOINT';
const ENV_REGION = 'NX_CACHE_S3_REGION';

const getEnv = (key: string) => process.env[key];

interface S3Options {
  bucket?: string;
  endpoint?: string;
  region?: string;
  accessKeyId?: string;
  secretKey?: string;
}

export default createCustomRunner<S3Options>(async (options) => {
  initEnv(options);

  const accessKeyId = getEnv(ENV_ACCESS_KEY_ID) ?? options.accessKeyId;
  if (!accessKeyId) {
    throw new Error('missing access key');
  }

  const secretAccessKey = getEnv(ENV_SECRET_KEY) ?? options.secretKey;
  if (!secretAccessKey) {
    throw new Error('missing secret access key');
  }

  const s3Storage = new S3({
    endpoint: getEnv(ENV_ENDPOINT) ?? options.endpoint,
    region: getEnv(ENV_REGION) ?? options.region,
    credentials: { accessKeyId, secretAccessKey },
  });

  return {
    name: 'S3',
    fileExists: async (filename) => {
      try {
        const result = await s3Storage.headObject({
          /* eslint-disable @typescript-eslint/naming-convention */
          Bucket: getEnv(ENV_BUCKET) ?? options.bucket,
          Key: filename,
          /* eslint-enable @typescript-eslint/naming-convention */
        });
        return !!result;
      } catch (error) {
        if (error.name === 'NotFound') {
          return false;
        } else {
          throw error;
        }
      }
    },
    retrieveFile: async (filename) => {
      const result = await s3Storage.getObject({
        /* eslint-disable @typescript-eslint/naming-convention */
        Bucket: options.bucket,
        Key: filename,
        /* eslint-enable @typescript-eslint/naming-convention */
      });
      return getStream.buffer(result.Body as Stream);
    },
    storeFile: async (filename, buffer) =>
      await s3Storage.putObject({
        /* eslint-disable @typescript-eslint/naming-convention */
        Bucket: options.bucket,
        Key: filename,
        Body: buffer,
        /* eslint-enable @typescript-eslint/naming-convention */
      }),
  };
});
