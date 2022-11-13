export type VercelEnvironment = 'preview' | 'production';

export interface BuildExecutorSchema {
  projectId: string;
  orgId: string;
  environment?: VercelEnvironment;
}
