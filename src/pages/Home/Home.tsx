import React, { FC } from 'react';
import Head from 'next/head';
import {
  Slogan,
  Wrapper,
  HeadingWrapper,
  Logo,
  Content,
  ContentWrapper,
  FooterWrapper,
  Footer,
} from './styles';

const Home: FC = () => (
  <>
    <Head>
      <title>Home</title>
    </Head>

    <Wrapper>
      <HeadingWrapper>
        <Logo alt="Code Dreams" />
      </HeadingWrapper>
      <ContentWrapper>
        <Slogan variant="h2">
          Heeey Dreaaamer! Já ta pronto para voar e transformar sonhos em
          código?
        </Slogan>
        <Content variant="subtitle1">
          Preparamos toda a arquitetura com muito carinho! No README do projeto
          temos uma documento de forma detalhada explicando todos os passos para
          continuarmos dando sequecia em flow de trabalho maravilhoso! E se
          sentir falta de algo ou tem sugestão de melhoria, pode ficar a vontade
          em falar!
        </Content>
      </ContentWrapper>
      <FooterWrapper>
        <Footer alt="Enjoy your code, live your Dream" />
      </FooterWrapper>
    </Wrapper>
  </>
);

export default Home;
