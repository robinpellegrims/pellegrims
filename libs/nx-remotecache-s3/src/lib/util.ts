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
  const readonly = getEnv(envReadOnly);
  if (typeof readonly !== 'undefined') {
    if (readonly === 'true') return true;
    if (readonly === 'false') return false;
  }
  return options.readOnly ?? false;
};
