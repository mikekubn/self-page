import React from 'react';
import type { AppProps } from 'next/app';
import MainLayout from 'layouts/MainLayout';

function MyApp({ Component, pageProps }: AppProps): React.ReactElement {
  return (
    <>
      <MainLayout />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
