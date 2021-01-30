import * as CNPJ from '@fnando/cnpj';
import { toOnlyNumbers } from '..';

export const isValidCnpj = (value: string | null | undefined): boolean =>
  !!value && CNPJ.isValid(toOnlyNumbers(value));
