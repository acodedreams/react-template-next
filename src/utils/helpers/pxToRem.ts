export const pxToRem = (pixels: number, baseline = 16): string =>
  `${pixels / baseline}rem`;
