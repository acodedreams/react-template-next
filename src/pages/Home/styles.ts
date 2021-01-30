import styled from 'styled-components';
import Image from 'next/image';
import { getTheme, pxToRem } from '~/utils';
import { Typography } from '~/components';

const textTitleColor = getTheme('primary.main');
const backgroundColor = getTheme('primary.contrast');
const sloganColor = getTheme('secondary.contrast');
const mediumSpacing = getTheme('mediumSpacing');
const largeSpacing = getTheme('largeSpacing');

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;
  background-color: ${backgroundColor};
  flex-direction: column;
`;

export const HeadingWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: ${largeSpacing};
  @media (max-width: 800px) {
    width: 80%;
    flex-direction: column;
  }
`;

export const Logo = styled(Image).attrs({
  src: '/images/logo.svg',
  width: 118,
  height: 117,
})``;

export const Heading = styled(Typography)`
  font-weight: normal;
  text-align: center;
  color: ${textTitleColor};
  padding: ${mediumSpacing} ${mediumSpacing};
  font-size: ${pxToRem(60)} !important;
  @media (max-width: 800px) {
    display: none;
  }
`;

export const Slogan = styled(Typography)`
  text-align: center;
  color: ${sloganColor};
  font-size: ${pxToRem(26)} !important;
  padding-bottom: ${largeSpacing};
  @media (max-width: 800px) {
    width: 80%;
    font-size: ${pxToRem(20)} !important;
  }
`;
export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: ${pxToRem(750)};
  word-break: break-word;
  align-items: center;
  padding-bottom: ${largeSpacing};
  @media (max-width: 800px) {
    width: 80%;
  }
`;

export const Content = styled(Typography)`
  text-align: justify;
  color: ${sloganColor};
  font-size: ${pxToRem(18)} !important;
  @media (max-width: 800px) {
    width: 80%;
    font-size: ${pxToRem(16)} !important;
  }
`;

export const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: ${pxToRem(750)};
  word-break: break-word;
  align-items: center;
  @media (max-width: 800px) {
    width: 80%;
  }
`;

export const Footer = styled(Image).attrs({
  src: '/images/footer.svg',
  width: 620,
  height: 110,
})``;
