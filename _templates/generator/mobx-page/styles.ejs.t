---
to: src/pages/<%= h.changeCase.pascal(name) %>/styles.ts
---
import styled from 'styled-components';
import { Typography } from '~/components';
import { getTheme } from '~/utils';

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  background-color: ${backgroundColor};
`;

export const Heading = styled(Typography)`
  font-weight: normal;
  text-align: center;
  color: ${titleColor};
`;
