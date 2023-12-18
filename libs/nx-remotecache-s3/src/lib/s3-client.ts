import { S3 } from '@aws-sdk/client-s3';
import { getEnv } from './util';
import { defaultProvider } from '@aws-sdk/credential-provider-node';
import {
  getDefaultRoleAssumer,
  getDefaultRoleAssumerWithWebIdentity,
} from '@aws-sdk/client-sts';

import type { S3ClientConfig } from '@aws-sdk/client-s3/dist-types/S3Client';
import type { DefaultProviderInit } from '@aws-sdk/credential-provider-node/dist-types/defaultProvider';
import type { AwsCredentialIdentity, Provider } from '@aws-sdk/types';

const ENV_ENDPOINT = 'NXCACHE_S3_ENDPOINT';
const ENV_PROFILE = 'NXCACHE_S3_PROFILE';
const ENV_FORCE_PATH_STYLE = 'NXCACHE_S3_FORCE_PATH_STYLE';
const ENV_REGION = 'NXCACHE_S3_REGION';
const ENV_ACCESS_KEY_ID = 'NXCACHE_S3_ACCESS_KEY_ID';
const ENV_SECRET_ACCESS_KEY = 'NXCACHE_S3_SECRET_ACCESS_KEY';

export const buildS3Client = (
  options: Pick<S3ClientConfig, 'endpoint' | 'region' | 'forcePathStyle'> &
    Pick<DefaultProviderInit, 'profile'>
) => {
  const provider = getCredentialsProvider(options);

  return new S3({
    endpoint: getEnv(ENV_ENDPOINT) ?? options.endpoint,
    region: getEnv(ENV_REGION) ?? options.region,
    credentials: provider,
    forcePathStyle:
      getEnv(ENV_FORCE_PATH_STYLE) === 'true' || options.forcePathStyle,
  });
};

const getCredentialsProvider = (
  options: Pick<S3ClientConfig, 'endpoint' | 'region' | 'forcePathStyle'> &
    Pick<DefaultProviderInit, 'profile'>
): AwsCredentialIdentity | Provider<AwsCredentialIdentity> => {
  const awsAccessKeyIdOverride = getEnv(ENV_ACCESS_KEY_ID);
  const awsSecretAccessKeyOverride = getEnv(ENV_SECRET_ACCESS_KEY);

  if (awsAccessKeyIdOverride?.length && awsSecretAccessKeyOverride?.length) {
    return {
      accessKeyId: awsAccessKeyIdOverride,
      secretAccessKey: awsSecretAccessKeyOverride,
    };
  } else {
    return defaultProvider({
      profile: getEnv(ENV_PROFILE) ?? options.profile,
      roleAssumerWithWebIdentity: getDefaultRoleAssumerWithWebIdentity(),
      roleAssumer: getDefaultRoleAssumer(),
    });
  }
};
