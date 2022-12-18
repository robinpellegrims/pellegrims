import type { CustomRunnerOptions } from 'nx-remotecache-custom';
import type { S3Options } from './setup-s3-task-runner';

export const getEnv = (key: string) => process.env[key];

export const buildCommonCommandInput = (
  bucket: string | undefined,
  prefix: string,
  filename: string
) => ({
  /* eslint-disable @typescript-eslint/naming-convention */
  Bucket: bucket,
  Key: `${prefix}${filename}`,
  /* eslint-enable @typescript-eslint/naming-convention */
});

export const isReadOnly = (
  options: CustomRunnerOptions<S3Options>,
  envReadOnly: string
) => {
  if (typeof getEnv(envReadOnly) !== 'undefined') {
    if (getEnv(envReadOnly) === 'true') return true;
    if (getEnv(envReadOnly) === 'false') return false;
  }
  return options.readOnly ?? false;
};
