import { isMatch } from 'matcher';

const HTTP_PROXY = 'HTTP_PROXY';
const HTTPS_PROXY = 'HTTPS_PROXY';
const NO_PROXY = 'NO_PROXY';

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

export const getHttpProxy = (): string | undefined =>
  getEnv(HTTP_PROXY.toLowerCase()) || getEnv(HTTP_PROXY) || undefined;

export const getHttpsProxy = (): string | undefined =>
  getEnv(HTTPS_PROXY.toLowerCase()) || getEnv(HTTPS_PROXY) || undefined;

export const getNoProxy = (): string | undefined =>
  getEnv(NO_PROXY.toLowerCase()) || getEnv(NO_PROXY) || undefined;

export const matchesNoProxy = (
  subjectUrl: string,
  noProxy: string | undefined
) => {
  if (!noProxy) return false;

  const subjectUrlTokens = new URL(subjectUrl);
  const rules = noProxy.split(/[\s,]+/);

  for (const rule of rules) {
    const ruleMatch = rule
      .replace(/^(?<leadingDot>\.)/, '*')
      .match(/^(?<hostname>.+?)(?::(?<port>\d+))?$/);

    if (!ruleMatch || !ruleMatch.groups) {
      throw new Error('Invalid NO_PROXY pattern.');
    }

    if (!ruleMatch.groups.hostname) {
      throw new Error(
        'NO_PROXY entry pattern must include hostname. Use * to match any hostname.'
      );
    }

    const hostnameIsMatch = isMatch(
      subjectUrlTokens.hostname,
      ruleMatch.groups.hostname
    );

    if (
      hostnameIsMatch &&
      (!ruleMatch.groups ||
        !ruleMatch.groups.port ||
        (subjectUrlTokens.port &&
          subjectUrlTokens.port === ruleMatch.groups.port))
    ) {
      return true;
    }
  }

  return false;
};
