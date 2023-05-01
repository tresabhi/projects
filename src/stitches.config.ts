import { blueDark, mauveDark } from '@radix-ui/colors';
import { createStitches } from '@stitches/core';
import {
  createBorderStyles,
  createColors,
  createFontSizes,
  createSpaces,
} from 'bepaint';

export const {
  config,
  createTheme,
  css,
  getCssText,
  globalCss,
  keyframes,
  prefix,
  reset,
  theme,
} = createStitches({
  theme: {
    colors: {
      ...createColors<undefined>(mauveDark),
      ...createColors(blueDark, 'accent'),
    },
    spaces: createSpaces<undefined>(),
    borderStyles: createBorderStyles<undefined>(mauveDark),
    fontSizes: createFontSizes<undefined>(),
  },
});
