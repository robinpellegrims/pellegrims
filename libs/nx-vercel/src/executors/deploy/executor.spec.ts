import executor from './executor';

jest.mock('child_process');

const OLD_ENV = process.env;

describe('Build Executor', () => {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  beforeEach(() => (process.env = { ...OLD_ENV, VERCEL_TOKEN: '123' }));
  afterEach(() => (process.env = { ...OLD_ENV }));
  it('can run', async () => {
    const output = await executor({ orgId: '123', projectId: '456' });
    expect(output.success).toBe(true);
  });
});
