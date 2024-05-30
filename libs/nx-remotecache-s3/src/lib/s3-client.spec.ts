import { setupS3TaskRunner } from './setup-s3-task-runner';
import { getProxyConfig } from './s3-client';
import { S3 } from '@aws-sdk/client-s3';
import { defaultProvider } from '@aws-sdk/credential-provider-node';
import { NodeHttpHandler } from '@smithy/node-http-handler';
import {
  clearProxyInfo,
  defaultOptions,
  emptyOptions,
  envValues,
} from './test-utils';

jest.mock('@aws-sdk/client-s3');
jest.mock('@aws-sdk/credential-provider-node');

const s3Mock = jest.mocked(S3);

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

  beforeEach(clearProxyInfo);

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

  it('with parameters from ENV variables (no proxy info)', async () => {
    process.env.NXCACHE_S3_ENDPOINT = envValues.endpoint;
    process.env.NXCACHE_S3_REGION = envValues.region;
    process.env.NXCACHE_S3_FORCE_PATH_STYLE = envValues.forcePathStyle;
    process.env.NXCACHE_S3_PROFILE = envValues.profile;
    await setupS3TaskRunner(defaultOptions);
    expectS3Instance({ ...envValues, forcePathStyle: true });
  });

  it('with parameters from ENV variables (with proxy info)', async () => {
    process.env.NXCACHE_S3_ENDPOINT = envValues.endpoint;
    process.env.NXCACHE_S3_REGION = envValues.region;
    process.env.NXCACHE_S3_FORCE_PATH_STYLE = envValues.forcePathStyle;
    process.env.NXCACHE_S3_PROFILE = envValues.profile;
    process.env.HTTP_PROXY = 'http://proxy.domain.com:8888';
    process.env.HTTPS_PROXY = 'https://proxy.domain.com:8888';

    await setupS3TaskRunner(defaultOptions);

    expect(defaultProvider).toHaveBeenCalledTimes(1);
    expect(defaultProvider).toHaveBeenCalledWith({
      profile: envValues.profile,
      roleAssumer: expect.any(Function),
      roleAssumerWithWebIdentity: expect.any(Function),
    });
    expect(s3Mock).toHaveBeenCalledTimes(1);
    expect(s3Mock).toHaveBeenCalledWith({
      endpoint: envValues.endpoint,
      region: envValues.region,
      forcePathStyle: true,
      credentials: jest.mocked(defaultProvider).mock.results[0].value,
      requestHandler: expect.any(NodeHttpHandler),
    });
  });
});

describe('getProxyConfig', () => {
  beforeEach(clearProxyInfo);

  it('should not set requestHandler when proxy info is unset', async () => {
    const proxyConfig = getProxyConfig();

    expect(proxyConfig).toEqual({});
  });

  it('should not set requestHandler when the endpoint is in the no_proxy list', async () => {
    process.env.HTTPS_PROXY = 'https://proxy.domain.com:8888';
    process.env.NO_PROXY = '.aws.com';
    process.env.NXCACHE_S3_ENDPOINT = 'https://endpoint.aws.com';

    const proxyConfig = getProxyConfig();

    expect(proxyConfig).toEqual({});
  });

  it('should set requestHandler when httpProxy info is set', async () => {
    process.env.HTTP_PROXY = 'http://proxy.domain.com:8888';
    process.env.NXCACHE_S3_ENDPOINT = 'https://endpoint.aws.com';

    const proxyConfig = getProxyConfig();

    expect(proxyConfig).toEqual({
      requestHandler: expect.any(NodeHttpHandler),
    });
  });

  it('should set requestHandler when httpsProxy info is set', async () => {
    process.env.HTTPS_PROXY = 'https://proxy.domain.com:8888';
    process.env.NXCACHE_S3_ENDPOINT = 'https://endpoint.aws.com';

    const proxyConfig = getProxyConfig();

    expect(proxyConfig).toEqual({
      requestHandler: expect.any(NodeHttpHandler),
    });
  });
});
