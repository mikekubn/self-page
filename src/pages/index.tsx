import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { LeftSideHomePage, RightSideHomePage } from '@/components/Sections/HomeSection';

const Home: NextPage = (): React.ReactElement => (
  <>
    <Head>
      <title>Michael Kubín</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.png" />
    </Head>
    <section id="home" className="flex h-screen pb-20">
      <LeftSideHomePage />
      <RightSideHomePage />
    </section>
    <section id="technology" className="h-screen bg-green" />
    <section id="contact" className="h-screen bg-purple" />
  </>
);

export default Home;