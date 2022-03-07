import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = (): React.ReactElement => (
  <>
    <Head>
      <title>Michael Kubín</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.png" />
    </Head>
    <h1 className="text-3xl" id="michael-kubin">
      Home page
      <br />
      <br />
      <p>
        In publishing and graphic design, lorem ipsum is common placeholder text used to demonstrate the graphic elements of a document or visual presentation, such as web pages, typography, and graphical layout. It is a form of greeking.

        Even though using lorem ipsum often arouses curiosity due to its resemblance to classical Latin, it is not intended to have meaning. Where text is visible in a document, people tend to focus on the textual content rather than upon overall presentation, so publishers use lorem ipsum when displaying a typeface or design in order to direct the focus to presentation. Lorem ipsum also approximates a typical distribution of letters in English.
      </p>
    </h1>
  </>
);

export default Home;
