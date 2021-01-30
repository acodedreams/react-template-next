---
to: src/pages/<%= h.changeCase.pascal(name) %>/styles.ts
---
import styled from 'styled-components';
import { Typography } from '~/components';

export const Wrapper = styled.div`
  display: 'flex';
  width: 100%;
`;

export const Heading = styled(Typography)`
  font-weight: normal;
  text-align: center;
  color: #000;
`;
