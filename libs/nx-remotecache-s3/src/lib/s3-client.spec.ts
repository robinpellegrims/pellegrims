import { setupS3TaskRunner } from './setup-s3-task-runner';
import { S3 } from '@aws-sdk/client-s3';
import { defaultProvider } from '@aws-sdk/credential-provider-node';

import type { CustomRunnerOptions } from 'nx-remotecache-custom';
import type { S3Options } from './setup-s3-task-runner';

jest.mock('@aws-sdk/client-s3');
jest.mock('@aws-sdk/credential-provider-node');

const s3Mock = jest.mocked(S3);

const emptyOptions: CustomRunnerOptions<S3Options> = { lifeCycle: {} };

const defaultOptions: CustomRunnerOptions<S3Options> = {
  lifeCycle: {},
  endpoint: 'optionsEndpoint',
  region: 'optionsRegion',
  forcePathStyle: true,
  profile: 'optionsProfile',
  bucket: 'optionsBucket',
  prefix: 'optionsPrefix',
  readOnly: false,
};

const envValues: Record<keyof S3Options, string> = {
  endpoint: 'envEndpoint',
  region: 'envRegion',
  forcePathStyle: 'true',
  profile: 'envProfile',
  bucket: 'envBucket',
  prefix: 'envPrefix',
  readOnly: 'false',
};

const expectS3Instance = (params: {
  endpoint?: string;
  region?: string;
  forcePathStyle?: boolean;
  profile?: string;
}) => {
  expect(defaultProvider).toHaveBeenCalledTimes(1);
  expect(defaultProvider).toHaveBeenCalledWith({
    profile: params.profile,
    roleAssumerWithWebIdentity: expect.any(Function),
    roleAssumer: expect.any(Function),
  });
  expect(s3Mock).toHaveBeenCalledTimes(1);
  expect(s3Mock).toHaveBeenCalledWith({
    endpoint: params.endpoint,
    region: params.region,
    forcePathStyle: params.forcePathStyle,
    credentials: jest.mocked(defaultProvider).mock.results[0].value,
  });
};

describe('buildS3Client', () => {
  const originalEnv = process.env;

  afterEach(() => {
    process.env = { ...originalEnv };
    jest.clearAllMocks();
  });

  it('should be created only once', async () => {
    await setupS3TaskRunner(emptyOptions);
    expect(S3).toHaveBeenCalledTimes(1);
  });

  it('with default parameters', async () => {
    await setupS3TaskRunner(emptyOptions);
    expectS3Instance({});
  });

  it('with parameters from options', async () => {
    await setupS3TaskRunner(defaultOptions);
    expectS3Instance({ ...defaultOptions });
  });

  it('with parameters from ENV variables', async () => {
    process.env.NXCACHE_S3_ENDPOINT = envValues.endpoint;
    process.env.NXCACHE_S3_REGION = envValues.region;
    process.env.NXCACHE_S3_FORCE_PATH_STYLE = envValues.forcePathStyle;
    process.env.NXCACHE_S3_PROFILE = envValues.profile;
    await setupS3TaskRunner(defaultOptions);
    expectS3Instance({ ...envValues, forcePathStyle: true });
  });
});
