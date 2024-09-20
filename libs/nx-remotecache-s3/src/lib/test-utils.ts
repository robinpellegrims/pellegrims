import { CustomRunnerOptions } from 'nx-remotecache-custom';
import { S3Options } from './setup-s3-task-runner';

export const emptyOptions: CustomRunnerOptions<S3Options> = { lifeCycle: {} };

export const defaultOptions: CustomRunnerOptions<S3Options> = {
  lifeCycle: {},
  endpoint: 'optionsEndpoint',
  region: 'optionsRegion',
  forcePathStyle: true,
  profile: 'optionsProfile',
  bucket: 'optionsBucket',
  prefix: 'optionsPrefix',
};

export const envValues: Record<keyof S3Options, string> = {
  endpoint: 'envEndpoint',
  region: 'envRegion',
  forcePathStyle: 'true',
  profile: 'envProfile',
  bucket: 'envBucket',
  prefix: 'envPrefix',
};

export const clearProxyInfo = () => {
  delete process.env.HTTPS_PROXY;
  delete process.env.https_proxy;
  delete process.env.HTTP_PROXY;
  delete process.env.http_proxy;
  delete process.env.NO_PROXY;
  delete process.env.no_proxy;
};
