import React, { FC } from 'react';
import Head from 'next/head';
import { Heading, Wrapper } from './styles';

const Home: FC = () => (
  <>
    <Head>
      <title>Home</title>
    </Head>

    <Wrapper>
      <Heading variant="h1">Home</Heading>
    </Wrapper>
  </>
);

export default Home;
