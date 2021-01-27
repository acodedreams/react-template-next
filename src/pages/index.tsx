import React from 'react';
import Head from 'next/head';

import HomePage from './HomePage';

const Home: React.FC = () => (
  <>
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <HomePage />
  </>
);
export default Home;
