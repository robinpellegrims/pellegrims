import runner from './nx-remotecache-s3';

describe('nx-remotecache-s3', () =>
  test('should have a defined runner', async () =>
    expect(runner).toBeInstanceOf(Function)));
