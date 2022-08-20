import { createReactQueryHooks } from '@trpc/react';
import type { AppRouter } from '@pellegrims/goldgetters/server';
import { withTRPC } from '@trpc/next';

export const trpc = createReactQueryHooks<AppRouter>();

export const withGoldgettersTRPC = withTRPC<AppRouter>({
  config: () => ({ url: `${getBaseUrl()}/api/trpc` }),
  ssr: true,
});

const getBaseUrl = () => {
  if (typeof window !== 'undefined') {
    return '';
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  return `http://localhost:${process.env.PORT ?? 4200}`;
};
