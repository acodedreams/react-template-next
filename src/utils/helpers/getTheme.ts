import { get } from 'lodash';

// eslint-disable-next-line
export const getTheme = (themeProp: string) => ({ theme }: any): string =>
  get(theme, themeProp);
