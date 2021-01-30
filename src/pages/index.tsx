import React from 'react';
import Head from 'next/head';

import HomeContainer from './Home';

const Home: React.FC = () => (
  <>
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <HomeContainer />
  </>
);
export default Home;
