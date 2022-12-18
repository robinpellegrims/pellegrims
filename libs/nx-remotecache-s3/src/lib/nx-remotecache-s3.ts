import defaultTasksRunner from 'nx/src/tasks-runner/default-tasks-runner';
import { createCustomRunner } from 'nx-remotecache-custom';
import { setupS3TaskRunner } from './setup-s3-task-runner';

import type { S3Options } from './setup-s3-task-runner';

const runner: typeof defaultTasksRunner =
  createCustomRunner<S3Options>(setupS3TaskRunner);

export default runner;
