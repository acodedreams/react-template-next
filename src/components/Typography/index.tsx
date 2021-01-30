import React, { FC } from 'react';
import { CustomTypography } from './styles';

const Typography: FC<TypographyType> = ({ variant, children, ...rest }) => (
  <CustomTypography variant={variant} {...rest}>
    {children}
  </CustomTypography>
);

export default Typography;
