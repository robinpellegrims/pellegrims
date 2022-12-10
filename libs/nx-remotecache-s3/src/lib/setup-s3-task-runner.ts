import { CustomRunnerOptions, initEnv } from 'nx-remotecache-custom';
import { defaultProvider } from '@aws-sdk/credential-provider-node';
import { getDefaultRoleAssumerWithWebIdentity } from '@aws-sdk/client-sts';
import { S3 } from '@aws-sdk/client-s3';
import * as getStream from 'get-stream';
import { Stream } from 'stream';
import { RemoteCacheImplementation } from 'nx-remotecache-custom/types/remote-cache-implementation';

const ENV_BUCKET = 'NX_CACHE_S3_BUCKET';
const ENV_ENDPOINT = 'NX_CACHE_S3_ENDPOINT';
const ENV_FORCE_PATH_STYLE = 'NX_CACHE_S3_FORCE_PATH_STYLE';
const ENV_PREFIX = 'NX_CACHE_S3_PREFIX';
const ENV_PROFILE = 'NX_CACHE_S3_PROFILE';
const ENV_READ_ONLY = 'NX_CACHE_S3_READ_ONLY';
const ENV_REGION = 'NX_CACHE_S3_REGION';
const getEnv = (key: string) => process.env[key];

export interface S3Options {
  bucket?: string;
  endpoint?: string;
  forcePathStyle?: boolean;
  prefix?: string;
  profile?: string;
  readOnly?: boolean;
  region?: string;
}

export const setupS3TaskRunner = async (
  options: CustomRunnerOptions<S3Options>
): Promise<RemoteCacheImplementation> => {
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
    fileExists: async (filename: string) => {
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
    retrieveFile: async (filename: string) => {
      const result = await s3Storage.getObject({
        /* eslint-disable @typescript-eslint/naming-convention */
        Bucket: bucket,
        Key: `${prefix}${filename}`,
        /* eslint-enable @typescript-eslint/naming-convention */
      });
      return getStream.buffer(result.Body as Stream);
    },
    storeFile: async (filename: string, buffer) => {
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
};
