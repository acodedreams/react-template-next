import * as CPF from '@fnando/cpf';
import { toOnlyNumbers } from '..';

export const isValidCpf = (value: string | null | undefined): boolean =>
  !!value && CPF.isValid(toOnlyNumbers(value));
