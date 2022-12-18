import { Upload } from '@aws-sdk/lib-storage';
import { initEnv } from 'nx-remotecache-custom';
import { buildS3Client } from './s3-client';
import { buildCommonCommandInput, getEnv } from './util';

import type { CustomRunnerOptions } from 'nx-remotecache-custom';
import type { RemoteCacheImplementation } from 'nx-remotecache-custom/types/remote-cache-implementation';

const ENV_BUCKET = 'NX_CACHE_S3_BUCKET';
const ENV_PREFIX = 'NX_CACHE_S3_PREFIX';
const ENV_READ_ONLY = 'NX_CACHE_S3_READ_ONLY';

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

  const s3Storage = buildS3Client(options);

  const bucket = getEnv(ENV_BUCKET) ?? options.bucket;
  const prefix = getEnv(ENV_PREFIX) ?? options.prefix ?? '';
  const readOnly =
    getEnv(ENV_READ_ONLY) === 'true' || (options.readOnly ?? false);

  return {
    name: 'S3',
    fileExists: async (filename: string) => {
      try {
        const result = await s3Storage.headObject(
          buildCommonCommandInput(bucket, prefix, filename)
        );
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
      const result = await s3Storage.getObject(
        buildCommonCommandInput(bucket, prefix, filename)
      );
      return result.Body as NodeJS.ReadableStream;
    },
    storeFile: (filename: string, stream) => {
      if (readOnly) {
        throw new Error('ReadOnly');
      }

      const upload = new Upload({
        client: s3Storage,
        params: {
          ...buildCommonCommandInput(bucket, prefix, filename),
          // eslint-disable-next-line @typescript-eslint/naming-convention
          Body: stream,
        },
      });

      return upload.done();
    },
  };
};
