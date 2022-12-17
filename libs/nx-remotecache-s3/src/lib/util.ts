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
