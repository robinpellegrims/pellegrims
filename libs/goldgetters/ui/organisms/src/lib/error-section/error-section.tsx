import { FunctionComponent } from 'react';
import { NextLink } from '@pellegrims/shared/ui/atoms';

export const ErrorSection: FunctionComponent<{
  title: string;
  message: string;
}> = ({ message, title }) => (
  <section className="h-full">
    <div className="mx-auto max-w-screen-xl py-8 px-4 lg:py-16 lg:px-6">
      <div className="mx-auto max-w-screen-sm text-center">
        <h1 className="text-primary mb-4 text-7xl font-extrabold tracking-tight lg:text-9xl">
          {title}
        </h1>
        <p className="mb-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white md:text-4xl">
          Sorry, er ging iets mis
        </p>
        <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
          {message}
        </p>
        <NextLink
          href="/"
          className="bg-primary hover:bg-primary focus:ring-primary dark:focus:ring-primary my-4 inline-flex rounded-lg px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4"
        >
          Terug naar de website
        </NextLink>
      </div>
    </div>
  </section>
);
