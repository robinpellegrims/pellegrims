import runner from './nx-remotecache-s3';
import { performance } from 'perf_hooks';

describe('nx-remotecache-s3', () => {
  beforeEach(() => {
    performance.mark('init-local');
    performance.mark('command-execution-begins');
  });

  test('should have a defined runner', async () => {
    const s3Runner = await runner(
      [],
      { lifeCycle: { startCommand: jest.fn(), endCommand: jest.fn() } },
      {
        taskGraph: {
          tasks: {},
          dependencies: {},
          roots: [],
        },
        nxArgs: {},
        nxJson: { npmScope: 'proj' },
        projectGraph: { nodes: {}, dependencies: {} },
      }
    );
    expect(s3Runner).toBeDefined();
  });
});
