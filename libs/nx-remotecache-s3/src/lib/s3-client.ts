import { S3 } from '@aws-sdk/client-s3';
import { getEnv } from './util';
import { defaultProvider } from '@aws-sdk/credential-provider-node';
import { getDefaultRoleAssumerWithWebIdentity } from '@aws-sdk/client-sts';

import type { S3ClientConfig } from '@aws-sdk/client-s3/dist-types/S3Client';
import type { DefaultProviderInit } from '@aws-sdk/credential-provider-node/dist-types/defaultProvider';

const ENV_ENDPOINT = 'NX_CACHE_S3_ENDPOINT';
const ENV_PROFILE = 'NX_CACHE_S3_PROFILE';
const ENV_FORCE_PATH_STYLE = 'NX_CACHE_S3_FORCE_PATH_STYLE';
const ENV_REGION = 'NX_CACHE_S3_REGION';

export const buildS3Client = (
  options: Pick<S3ClientConfig, 'endpoint' | 'region' | 'forcePathStyle'> &
    Pick<DefaultProviderInit, 'profile'>
) => {
  const provider = defaultProvider({
    profile: getEnv(ENV_PROFILE) ?? options.profile,
    roleAssumerWithWebIdentity: getDefaultRoleAssumerWithWebIdentity(),
  });

  return new S3({
    endpoint: getEnv(ENV_ENDPOINT) ?? options.endpoint,
    region: getEnv(ENV_REGION) ?? options.region,
    credentials: provider,
    forcePathStyle:
      getEnv(ENV_FORCE_PATH_STYLE) === 'true' || options.forcePathStyle,
  });
};
