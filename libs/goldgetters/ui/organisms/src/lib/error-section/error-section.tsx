import { FunctionComponent } from 'react';
import { NextLink } from '@pellegrims/shared/ui/atoms';

export const ErrorSection: FunctionComponent<{
  title: string;
  message: string;
}> = ({ message, title }) => (
  <section className="h-full">
    <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <div className="mx-auto max-w-screen-sm text-center">
        <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary">
          {title}
        </h1>
        <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
          Sorry, er ging iets mis
        </p>
        <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
          {message}
        </p>
        <NextLink
          href="/"
          className="inline-flex text-white bg-primary hover:bg-primary focus:ring-4 focus:outline-none focus:ring-primary font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary my-4"
        >
          Terug naar de website
        </NextLink>
      </div>
    </div>
  </section>
);
