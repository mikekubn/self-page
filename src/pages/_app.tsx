import React from 'react';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import MainLayout from 'src/layouts/MainLayout';
import Footer from 'src/components/Footer';
import TopPanel from 'src/components/TopPanel';
import { ThemeProvider } from 'src/providers/ThemeProvider';

const MyApp = ({ Component, pageProps }: AppProps): React.ReactElement => (
  <>
    <ThemeProvider>
      <TopPanel />
      <MainLayout>
        <Component {...pageProps} />
        <Footer />
      </MainLayout>
    </ThemeProvider>
  </>
);
export default MyApp;
