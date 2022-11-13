import { BuildExecutorSchema, VercelEnvironment } from './schema';
import { execSync } from 'child_process';

// Based on https://vercel.com/guides/how-can-i-use-github-actions-with-vercel

export default async function runExecutor(options: BuildExecutorSchema) {
  if (!options.orgId) {
    throw new Error(`Missing "orgId" option`);
  }

  if (!options.projectId) {
    throw new Error(`Missing "projectId" option`);
  }

  const vercelToken = process.env['VERCEL_TOKEN'];

  if (!vercelToken) {
    throw new Error(`Missing "VERCEL_TOKEN" environment variable`);
  }

  const environment: VercelEnvironment = options.environment ?? 'preview';
  const prodFlag = environment === 'production' ? '--prod' : '';

  const env = `VERCEL_ORG_ID=${options.orgId} VERCEL_PROJECT_ID=${options.projectId}`;

  execSync(
    `${env} npx vercel pull --yes --environment=${environment} --token=${vercelToken}`,
    { stdio: 'inherit' }
  );

  execSync(`${env} npx vercel build ${prodFlag} --token=${vercelToken}`, {
    stdio: 'inherit',
  });

  execSync(
    `${env} npx vercel deploy --prebuilt ${prodFlag} --token=${vercelToken}`,
    { stdio: 'inherit' }
  );

  return { success: true };
}
