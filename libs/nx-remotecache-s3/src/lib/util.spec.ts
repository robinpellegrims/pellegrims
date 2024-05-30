import { clearProxyInfo, emptyOptions } from './test-utils';
import {
  buildCommonCommandInput,
  getEnv,
  isReadOnly,
  getHttpProxy,
  getHttpsProxy,
} from './util';

describe('util', () => {
  const originalEnv = process.env;

  afterEach(() => {
    process.env = { ...originalEnv };
    jest.clearAllMocks();
  });

  describe('getEnv', () => {
    it('returns undefined when env does not exist', () => {
      expect(getEnv('TEST_ENV')).toBeUndefined();
    });
    it('returns "true" when env is defined as the string "true"', () => {
      process.env.TEST_ENV = 'true';
      expect(getEnv('TEST_ENV')).toEqual('true');
    });
    it('returns "false" when env is defined as the string "false"', () => {
      process.env.TEST_ENV = 'false';
      expect(getEnv('TEST_ENV')).toEqual('false');
    });
  });
  describe('buildCommonCommandInput', () => {
    it('returns the object with Bucket undefined', () => {
      expect(
        buildCommonCommandInput(undefined, 'prefix', 'filename')
      ).toStrictEqual({
        /* eslint-disable @typescript-eslint/naming-convention */
        Bucket: undefined,
        Key: 'prefixfilename',
        /* eslint-enable @typescript-eslint/naming-convention */
      });
    });
    it('returns the object', () => {
      expect(
        buildCommonCommandInput('bucket', 'prefix', 'filename')
      ).toStrictEqual({
        /* eslint-disable @typescript-eslint/naming-convention */
        Bucket: 'bucket',
        Key: 'prefixfilename',
        /* eslint-enable @typescript-eslint/naming-convention */
      });
    });
  });
  describe('isReadOnly', () => {
    it('returns true when option is true and env is undefined', () => {
      expect(isReadOnly({ ...emptyOptions, readOnly: true }, 'TEST_ENV')).toBe(
        true
      );
    });
    it('returns false when option is false and env is undefined', () => {
      expect(isReadOnly({ ...emptyOptions, readOnly: false }, 'TEST_ENV')).toBe(
        false
      );
    });
    it('returns true when env is true', () => {
      process.env.TEST_ENV = 'true';
      expect(isReadOnly({ ...emptyOptions }, 'TEST_ENV')).toBe(true);
    });
    it('returns false when env is false', () => {
      process.env.TEST_ENV = 'false';
      expect(isReadOnly({ ...emptyOptions }, 'TEST_ENV')).toBe(false);
    });
    it('returns true when env is "somestring" and option is true', () => {
      process.env.TEST_ENV = 'somestring';
      expect(isReadOnly({ ...emptyOptions, readOnly: true }, 'TEST_ENV')).toBe(
        true
      );
    });
    it('returns false when env is "somestring" and option is false', () => {
      process.env.TEST_ENV = 'somestring';
      expect(isReadOnly({ ...emptyOptions, readOnly: false }, 'TEST_ENV')).toBe(
        false
      );
    });
    it('returns false when env is "somestring" and option is undefined', () => {
      process.env.TEST_ENV = 'somestring';
      expect(isReadOnly({ ...emptyOptions }, 'TEST_ENV')).toBe(false);
    });
  });
  describe('get proxy information', () => {
    beforeEach(clearProxyInfo);

    it('should return undefined when http_proxy and HTTP_PROXY is not set', () => {
      expect(getHttpProxy()).toBe(undefined);
    });
    it('should return imaproxy when http_proxy is set', () => {
      process.env.http_proxy = 'imaproxy';
      expect(getHttpProxy()).toBe('imaproxy');
    });
    it('should return imaproxy when HTTP_PROXY is set', () => {
      process.env.HTTP_PROXY = 'imaproxy';
      expect(getHttpProxy()).toBe('imaproxy');
    });
    it('should return undefined when https_proxy and HTTPS_PROXY is not set', () => {
      expect(getHttpsProxy()).toBe(undefined);
    });
    it('should return imaproxy when https_proxy is set', () => {
      process.env.https_proxy = 'imaproxy';
      expect(getHttpsProxy()).toBe('imaproxy');
    });
    it('should return imaproxy when HTTPS_PROXY is set', () => {
      process.env.HTTPS_PROXY = 'imaproxy';
      expect(getHttpsProxy()).toBe('imaproxy');
    });
  });
});
