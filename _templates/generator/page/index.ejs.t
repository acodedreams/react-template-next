---
to: src/pages/<%= h.changeCase.pascal(name) %>/index.tsx
---
import React, { FC } from 'react';
import <%= h.changeCase.pascal(name) %> from './<%= h.changeCase.pascal(name) %>';

// type Props = {};

export const <%= h.changeCase.pascal(name) %>Container: FC = () => {
  return <<%= h.changeCase.pascal(name) %> />;
};

export default <%= h.changeCase.pascal(name) %>Container;

