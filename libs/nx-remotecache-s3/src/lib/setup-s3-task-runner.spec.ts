import { S3 } from '@aws-sdk/client-s3';
import { Upload } from '@aws-sdk/lib-storage';
import { Readable } from 'stream';
import { setupS3TaskRunner } from './setup-s3-task-runner';

import type { CustomRunnerOptions } from 'nx-remotecache-custom';
import type { S3Options } from './setup-s3-task-runner';

const filename = 'someFilename';
const fileContent = 'content';
const fileContentStream = new Readable();
fileContentStream.push(fileContent);
fileContentStream.push(null);

jest.mock('@aws-sdk/client-s3');
jest.mock('@aws-sdk/lib-storage');

const s3Mock = jest.mocked(S3);
const uploadMock = jest.mocked(Upload);
jest.mocked(S3.prototype.getObject).mockImplementation(() =>
  // eslint-disable-next-line @typescript-eslint/naming-convention
  Promise.resolve({ Body: fileContentStream })
);

jest.mock('@aws-sdk/credential-provider-node');

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

const mockHeadObjectError = (error: string) =>
  jest
    .mocked(S3.prototype.headObject)
    .mockImplementation(() => Promise.reject({ name: error } as Error));

const mockHeadObjectSuccess = () =>
  jest
    .mocked(S3.prototype.headObject)
    .mockImplementation(() => Promise.resolve({}));

const headObjectCalledWithParams = async ({
  runnerOptions,
  bucket,
  prefix,
}: {
  runnerOptions: CustomRunnerOptions<S3Options>;
  bucket?: string;
  prefix?: string;
}) => {
  const runner = await setupS3TaskRunner(runnerOptions);
  await runner.fileExists(filename);
  const safePrefix = prefix ?? '';
  expect(s3Mock.prototype.headObject).toHaveBeenCalledWith({
    // eslint-disable-next-line @typescript-eslint/naming-convention
    Bucket: bucket,
    // eslint-disable-next-line @typescript-eslint/naming-convention
    Key: safePrefix + filename,
  });
};

const getObjectCalledWithParams = async ({
  runnerOptions,
  bucket,
  prefix,
}: {
  runnerOptions: CustomRunnerOptions<S3Options>;
  bucket?: string;
  prefix?: string;
}) => {
  const runner = await setupS3TaskRunner(runnerOptions);
  await runner.retrieveFile(filename);
  const safePrefix = prefix ?? '';
  expect(s3Mock.prototype.getObject).toHaveBeenCalledWith({
    // eslint-disable-next-line @typescript-eslint/naming-convention
    Bucket: bucket,
    // eslint-disable-next-line @typescript-eslint/naming-convention
    Key: safePrefix + filename,
  });
};

const uploadCalledWithParams = async ({
  runnerOptions,
  bucket,
  prefix,
}: {
  runnerOptions: CustomRunnerOptions<S3Options>;
  bucket?: string;
  prefix?: string;
}) => {
  const runner = await setupS3TaskRunner(runnerOptions);
  await runner.storeFile(filename, fileContentStream);
  const safePrefix = prefix ?? '';
  expect(uploadMock.mock.calls[0][0].params).toEqual({
    /* eslint-disable @typescript-eslint/naming-convention */
    Bucket: bucket,
    Key: safePrefix + filename,
    Body: fileContentStream,
    /* eslint-enable @typescript-eslint/naming-convention */
  });
};

describe('setupS3TaskRunner', () => {
  const originalEnv = process.env;

  afterEach(() => {
    process.env = { ...originalEnv };
    jest.clearAllMocks();
  });

  it('should be defined', async () => {
    const runner = await setupS3TaskRunner(emptyOptions);
    expect(runner).toBeDefined();
  });

  it('should return an object implementing the RemoteCacheImplementation interface', async () => {
    const runner = await setupS3TaskRunner(emptyOptions);
    expect(runner.fileExists).toBeInstanceOf(Function);
    expect(runner.retrieveFile).toBeInstanceOf(Function);
    expect(runner.storeFile).toBeInstanceOf(Function);
    expect(runner.name).toMatch('S3');
  });

  describe('should implement RemoteCacheImplementation interface', () => {
    describe('fileExists', () => {
      describe('should call s3.headObject', () => {
        it('only once', async () => {
          const runner = await setupS3TaskRunner(emptyOptions);
          await runner.fileExists(filename);
          const method = s3Mock.prototype.headObject;
          expect(method).toBeCalledTimes(1);
        });
        it('with default parameters', async () =>
          await headObjectCalledWithParams({
            runnerOptions: emptyOptions,
            ...emptyOptions,
          }));
        it('with parameters from options', async () =>
          await headObjectCalledWithParams({
            runnerOptions: defaultOptions,
            ...defaultOptions,
          }));
        it('with parameters from ENV variables', async () => {
          process.env.NXCACHE_S3_BUCKET = envValues.bucket;
          process.env.NXCACHE_S3_PREFIX = envValues.prefix;
          await headObjectCalledWithParams({
            runnerOptions: defaultOptions,
            ...envValues,
          });
        });
      });
      it('should throw an error if the api returns an unexpected error', async () => {
        const error = 'Unexpected error';
        mockHeadObjectError(error);
        const runner = await setupS3TaskRunner(defaultOptions);
        await expect(runner.fileExists(filename)).rejects.toEqual({
          name: 'Unexpected error',
        });
      });
      describe('should return', () => {
        it('false if the api returns 403', async () => {
          mockHeadObjectError('403');
          const runner = await setupS3TaskRunner(defaultOptions);
          const exists = await runner.fileExists(filename);
          expect(exists).toBeFalsy();
        });
        it('false if the api returns NotFound', async () => {
          mockHeadObjectError('NotFound');
          const runner = await setupS3TaskRunner(defaultOptions);
          const exists = await runner.fileExists(filename);
          expect(exists).toBeFalsy();
        });
        it('true if the file is found', async () => {
          mockHeadObjectSuccess();
          const runner = await setupS3TaskRunner(defaultOptions);
          const exists = await runner.fileExists(filename);
          expect(exists).toBeTruthy();
        });
      });
    });
    describe('retrieveFile', () => {
      describe('should call s3.getObject', () => {
        it('only once', async () => {
          const runner = await setupS3TaskRunner(emptyOptions);
          await runner.retrieveFile(filename);
          expect(s3Mock.prototype.getObject).toHaveBeenCalledTimes(1);
        });
        it('with default parameters', async () =>
          await getObjectCalledWithParams({
            runnerOptions: emptyOptions,
            ...emptyOptions,
          }));
        it('with parameters from options', async () =>
          await getObjectCalledWithParams({
            runnerOptions: defaultOptions,
            ...defaultOptions,
          }));
        it('with parameters from ENV variables', async () => {
          process.env.NXCACHE_S3_BUCKET = envValues.bucket;
          process.env.NXCACHE_S3_PREFIX = envValues.prefix;
          await getObjectCalledWithParams({
            runnerOptions: defaultOptions,
            ...envValues,
          });
        });
      });
    });
    describe('storeFile', () => {
      describe('should call Upload', () => {
        it('only once', async () => {
          const runner = await setupS3TaskRunner(emptyOptions);
          await runner.storeFile(filename, fileContentStream);
          expect(uploadMock).toHaveBeenCalledTimes(1);
        });
        it('with default parameters', async () => {
          await uploadCalledWithParams({
            runnerOptions: emptyOptions,
            ...emptyOptions,
          });
        });
        it('with parameters from options', async () => {
          await uploadCalledWithParams({
            runnerOptions: defaultOptions,
            ...defaultOptions,
          });
        });
        it('with parameters from ENV variables', async () => {
          process.env.NXCACHE_S3_BUCKET = envValues.bucket;
          process.env.NXCACHE_S3_PREFIX = envValues.prefix;
          await uploadCalledWithParams({
            runnerOptions: defaultOptions,
            ...envValues,
          });
        });
      });
      describe('should not call Upload when readonly', () => {
        it('through option', async () => {
          const runner = await setupS3TaskRunner({
            ...defaultOptions,
            readOnly: true,
          });
          expect(runner.storeFile).toThrowError('ReadOnly');
        });
        it('through env variable', async () => {
          process.env.NXCACHE_S3_READ_ONLY = 'true';
          const runner = await setupS3TaskRunner(emptyOptions);
          expect(runner.storeFile).toThrowError('ReadOnly');
        });
      });
    });
  });
});
