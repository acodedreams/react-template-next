---
to: src/pages/<%= h.changeCase.pascal(name) %>/<%= h.changeCase.pascal(name) %>.tsx
---
import React, { FC } from 'react';
import Head from 'next/head'
import { Heading, Wrapper } from './styles';

type Props = {};

const <%= h.changeCase.pascal(name) %>: FC<Props> = () => (
  <>
    <Head>
      <title><%= h.changeCase.pascal(name) %></title>
    </Head>

    <Wrapper>
      <Heading><%= h.changeCase.pascal(name) %></Heading>
    </Wrapper>
  </>
);

export default <%= h.changeCase.pascal(name) %>;
