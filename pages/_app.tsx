import React from 'react';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import MainLayout from 'layouts/MainLayout';
import CenterLayout from 'layouts/CenterLayout';
import Footer from 'components/Footer';
import ToggleButton from 'components/ToggleButton';

const MyApp = ({ Component, pageProps }: AppProps): React.ReactElement => (
  <div className="flex flex-col flex-1 h-[100vh]">
    <header className="fixed top-0 left-0 flex flex-row h-10 w-[100%] bg-orange">
      <ToggleButton value={false} callback={(val) => console.log('val', val)} />
    </header>
    <MainLayout>
      <CenterLayout>
        <Component {...pageProps} />
      </CenterLayout>
      <Footer />
    </MainLayout>
  </div>
);

export default MyApp;
