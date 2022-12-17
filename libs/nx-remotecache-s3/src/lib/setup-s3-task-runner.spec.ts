import { S3 } from '@aws-sdk/client-s3';
import { defaultProvider } from '@aws-sdk/credential-provider-node';
import { Upload } from '@aws-sdk/lib-storage';
import { CustomRunnerOptions } from 'nx-remotecache-custom';
import { Readable } from 'stream';
import { S3Options, setupS3TaskRunner } from './setup-s3-task-runner';

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
  });
  expect(s3Mock).toHaveBeenCalledTimes(1);
  expect(s3Mock).toHaveBeenCalledWith({
    endpoint: params.endpoint,
    region: params.region,
    forcePathStyle: params.forcePathStyle,
    credentials: jest.mocked(defaultProvider).mock.results[0].value,
  });
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
  expect(s3Mock.mock.instances[0].headObject).toHaveBeenCalledWith({
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
  expect(s3Mock.mock.instances[0].getObject).toHaveBeenCalledWith({
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
  runner.storeFile(filename, fileContentStream);
  const safePrefix = prefix ?? '';
  expect(uploadMock).toHaveBeenCalledWith({
    client: s3Mock.mock.instances[0],
    params: {
      /* eslint-disable @typescript-eslint/naming-convention */
      Bucket: bucket,
      Key: safePrefix + filename,
      Body: fileContentStream,
      /* eslint-enable @typescript-eslint/naming-convention */
    },
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

  describe('should create a new S3 client instance', () => {
    it('created only once', async () => {
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
      process.env.NX_CACHE_S3_ENDPOINT = envValues.endpoint;
      process.env.NX_CACHE_S3_REGION = envValues.region;
      process.env.NX_CACHE_S3_FORCE_PATH_STYLE = envValues.forcePathStyle;
      process.env.NX_CACHE_S3_PROFILE = envValues.profile;
      await setupS3TaskRunner(defaultOptions);
      expectS3Instance({ ...envValues, forcePathStyle: true });
    });
  });

  describe('should implement RemoteCacheImplementation interface', () => {
    describe('fileExists', () => {
      describe('should call s3.headObject', () => {
        it('only once', async () => {
          const runner = await setupS3TaskRunner(emptyOptions);
          await runner.fileExists(filename);
          const method = s3Mock.mock.instances[0].headObject;
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
          process.env.NX_CACHE_S3_BUCKET = envValues.bucket;
          process.env.NX_CACHE_S3_PREFIX = envValues.prefix;
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
          expect(s3Mock.mock.instances[0].getObject).toHaveBeenCalledTimes(1);
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
          process.env.NX_CACHE_S3_BUCKET = envValues.bucket;
          process.env.NX_CACHE_S3_PREFIX = envValues.prefix;
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
          process.env.NX_CACHE_S3_BUCKET = envValues.bucket;
          process.env.NX_CACHE_S3_PREFIX = envValues.prefix;
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
          process.env.NX_CACHE_S3_READ_ONLY = 'true';
          const runner = await setupS3TaskRunner(emptyOptions);
          expect(runner.storeFile).toThrowError('ReadOnly');
        });
      });
    });
  });
});
