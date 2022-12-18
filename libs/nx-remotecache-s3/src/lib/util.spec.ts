import type { CustomRunnerOptions } from 'nx-remotecache-custom';
import type { S3Options } from './setup-s3-task-runner';
import { buildCommonCommandInput, getEnv, isReadOnly } from './util';

const emptyOptions: CustomRunnerOptions<S3Options> = { lifeCycle: {} };

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
});
