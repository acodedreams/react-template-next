---
to: src/components/<%= h.changeCase.pascal(name) %>/index.tsx
---
import React, { FC } from 'react';
// import { Wrapper, Text } from './styles';

type Props = {};

const <%= h.changeCase.pascal(name) %>:FC<Props> = ({}) => (
  <Wrapper>
    <Text><%= h.changeCase.pascal(name) %> component</Text>
  </Wrapper>
)

export default <%= h.changeCase.pascal(name) %>;
