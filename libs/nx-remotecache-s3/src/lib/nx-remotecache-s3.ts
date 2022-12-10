import { createCustomRunner, initEnv } from 'nx-remotecache-custom';
import { S3 } from '@aws-sdk/client-s3';
import { defaultProvider } from '@aws-sdk/credential-provider-node';
import { getDefaultRoleAssumerWithWebIdentity } from '@aws-sdk/client-sts';
import * as getStream from 'get-stream';
import { Stream } from 'stream';
import defaultTasksRunner from 'nx/src/tasks-runner/default-tasks-runner';

const ENV_BUCKET = 'NX_CACHE_S3_BUCKET';
const ENV_ENDPOINT = 'NX_CACHE_S3_ENDPOINT';
const ENV_FORCE_PATH_STYLE = 'NX_CACHE_S3_FORCE_PATH_STYLE';
const ENV_PREFIX = 'NX_CACHE_S3_PREFIX';
const ENV_PROFILE = 'NX_CACHE_S3_PROFILE';
const ENV_READ_ONLY = 'NX_CACHE_S3_READ_ONLY';
const ENV_REGION = 'NX_CACHE_S3_REGION';

const getEnv = (key: string) => process.env[key];

interface S3Options {
  bucket?: string;
  endpoint?: string;
  forcePathStyle?: boolean;
  prefix?: string;
  profile?: string;
  readOnly?: boolean;
  region?: string;
}

const runner: typeof defaultTasksRunner = createCustomRunner<S3Options>(
  async (options) => {
    initEnv(options);

    const provider = defaultProvider({
      profile: getEnv(ENV_PROFILE) ?? options.profile,
      roleAssumerWithWebIdentity: getDefaultRoleAssumerWithWebIdentity(),
    });

    const s3Storage = new S3({
      endpoint: getEnv(ENV_ENDPOINT) ?? options.endpoint,
      region: getEnv(ENV_REGION) ?? options.region,
      credentials: provider,
      forcePathStyle:
        getEnv(ENV_FORCE_PATH_STYLE) === 'true' || options.forcePathStyle,
    });

    const bucket = getEnv(ENV_BUCKET) ?? options.bucket;
    const prefix = getEnv(ENV_PREFIX) ?? options.prefix ?? '';
    const readOnly =
      getEnv(ENV_READ_ONLY) === 'true' || (options.readOnly ?? false);

    return {
      name: 'S3',
      fileExists: async (filename) => {
        try {
          const result = await s3Storage.headObject({
            /* eslint-disable @typescript-eslint/naming-convention */
            Bucket: bucket,
            Key: `${prefix}${filename}`,
            /* eslint-enable @typescript-eslint/naming-convention */
          });
          return !!result;
        } catch (error) {
          if (
            (error as Error).name === '403' ||
            (error as Error).name === 'NotFound'
          ) {
            return false;
          } else {
            throw error;
          }
        }
      },
      retrieveFile: async (filename) => {
        const result = await s3Storage.getObject({
          /* eslint-disable @typescript-eslint/naming-convention */
          Bucket: bucket,
          Key: `${prefix}${filename}`,
          /* eslint-enable @typescript-eslint/naming-convention */
        });
        return getStream.buffer(result.Body as Stream);
      },
      storeFile: async (filename, buffer) => {
        if (readOnly) {
          throw new Error('ReadOnly');
        }
        return await s3Storage.putObject({
          /* eslint-disable @typescript-eslint/naming-convention */
          Bucket: bucket,
          Key: `${prefix}${filename}`,
          Body: buffer,
          /* eslint-enable @typescript-eslint/naming-convention */
        });
      },
    };
  }
);

export default runner;
