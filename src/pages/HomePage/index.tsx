import React from 'react';
import Head from 'next/head';
import { Container, Title } from './styles';

const HomePage: React.FC = () => {
  <Head>
    <title>Home</title>
    <meta name="description" content="" />
  </Head>;

  return (
    <Container>
      <Title>Hello World</Title>
    </Container>
  );
};

export default HomePage;
