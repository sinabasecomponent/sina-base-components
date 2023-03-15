import FiroGoBook from 'public/fonts/FiraGO-Book.ttf';
import FiraBoldItalic from 'public/fonts/FiraGO-BoldItalic.ttf';
import FiraBold from 'public/fonts/FiraGO-Bold.ttf';
import FiroGoBookItalic from 'public/fonts/FiraGO-BookItalic.ttf';
import FiraGOEight from 'public/fonts/FiraGO-Eight.ttf';
import FiraGOEightItalic from 'public/fonts/FiraGO-EightItalic.ttf';
import FiraGOFour from 'public/fonts/FiraGO-Four.ttf';
import FiraGOFourItalic from 'public/fonts/FiraGO-FourItalic.ttf';
import FiraGOHair from 'public/fonts/FiraGO-Hair.ttf';
import FiraGOHairItalic from 'public/fonts/FiraGO-HairItalic.ttf';
import FiraGOHeavyItalic from 'public/fonts/FiraGO-HeavyItalic.ttf';
import FiraGOItalic from 'public/fonts/FiraGO-Italic.ttf';
import FiraGOLight from 'public/fonts/FiraGO-Light.ttf';
import FiraGOLightItalic from 'public/fonts/FiraGO-LightItalic.ttf';
import FiraGOMedium from 'public/fonts/FiraGO-Medium.ttf';
import FiraGOMediumItalic from 'public/fonts/FiraGO-MediumItalic.ttf';
import FiraGORegular from 'public/fonts/FiraGO-Regular.ttf';
import FiraGOSemiBold from 'public/fonts/FiraGO-SemiBold.ttf';
import FiraGOSemiBoldItalic from 'public/fonts/FiraGO-SemiBoldItalic.ttf';
import FiraGOThin from 'public/fonts/FiraGO-Thin.ttf';
import FiraGOThinItalic from 'public/fonts/FiraGO-ThinItalic.ttf';
import FiraGOTwo from 'public/fonts/FiraGO-Two.ttf';
import FiraGOTwoItalic from 'public/fonts/FiraGO-TwoItalic.ttf';
import FiraGOUltraLight from 'public/fonts/FiraGO-UltraLight.ttf';
import { createUseStyles } from 'react-jss';

export const fontWeights = {
  light: 100,
  regular: 400,
  medium: 500,
  bold: 700,
};

export const fontSizes = {
  xxsmall: 10,
  xsmall: 12,
  small: 14,
  medium: 16,
  large: 18,
  xlarge: 20,
  xxlarge: 22,
  h1: 32,
  h2: 24,
  h3: 18.7,
  h4: 16,
  h5: 13.2,
  h6: 10.7,
};

/** Change font before run any component */
export const fonts = {
  bold: {
    name: 'FiraBold',
    url: FiraBold,
    format: 'truetype',
  },
  BoldItalic: {
    name: 'FiraBoldItalic',
    url: FiraBoldItalic,
    format: 'truetype',
  },
  Book: {
    name: 'FiroGoBook',
    url: FiroGoBook,
    format: 'truetype',
  },
  BookItalic: {
    name: 'FiroGoBookItalic',
    url: FiroGoBookItalic,
    format: 'truetype',
  },
  Eight: {
    name: 'FiraGOEight',
    url: FiraGOEight,
    format: 'truetype',
  },
  EightItalic: {
    name: 'FiraGOEightItalic',
    url: FiraGOEightItalic,
    format: 'truetype',
  },
  Four: {
    name: 'FiraGOFour',
    url: FiraGOFour,
    format: 'truetype',
  },
  FourItalic: {
    name: 'FiraGOFourItalic',
    url: FiraGOFourItalic,
    format: 'truetype',
  },
  Hair: {
    name: 'FiraGOHair',
    url: FiraGOHair,
    format: 'truetype',
  },
  HairItalic: {
    name: 'FiraGOHairItalic',
    url: FiraGOHairItalic,
    format: 'truetype',
  },
  HeavyItalic: {
    name: 'FiraGOHeavyItalic',
    url: FiraGOHeavyItalic,
    format: 'truetype',
  },
  Italic: {
    name: 'FiraGOItalic',
    url: FiraGOItalic,
    format: 'truetype',
  },
  Light: {
    name: 'FiraGOLight',
    url: FiraGOLight,
    format: 'truetype',
  },
  LightItalic: {
    name: 'FiraGOLightItalic',
    url: FiraGOLightItalic,
    format: 'truetype',
  },
  Medium: {
    name: 'FiraGOMedium',
    url: FiraGOMedium,
    format: 'truetype',
  },
  MediumItalic: {
    name: 'FiraGOMediumItalic',
    url: FiraGOMediumItalic,
    format: 'truetype',
  },
  Regular: {
    name: 'FiraGORegular',
    url: FiraGORegular,
    format: 'truetype',
  },
  SemiBold: {
    name: 'FiraGOSemiBold',
    url: FiraGOSemiBold,
    format: 'truetype',
  },
  SemiBoldItalic: {
    name: 'FiraGOSemiBoldItalic',
    url: FiraGOSemiBoldItalic,
    format: 'truetype',
  },
  Thin: {
    name: 'FiraGOThin',
    url: FiraGOThin,
    format: 'truetype',
  },
  ThinItalic: {
    name: 'FiraGOThinItalic',
    url: FiraGOThinItalic,
    format: 'truetype',
  },
  Two: {
    name: 'FiraGOTwo',
    url: FiraGOTwo,
    format: 'truetype',
  },
  TwoItalic: {
    name: 'FiraGOTwoItalic',
    url: FiraGOTwoItalic,
    format: 'truetype',
  },
  UltraLight: {
    name: 'FiraGOUltraLight',
    url: FiraGOUltraLight,
    format: 'truetype',
  },
};

let _useThemes: (() => Record<keyof typeof fonts, string>) | undefined;

const useThemes = () => {
  if (!_useThemes) {
    _useThemes = createUseStyles<keyof typeof fonts>({
      ...(Object.fromEntries(
        Object.entries(fonts).map(([key, { name }]) => [
          key,
          {
            fontFamily: name,
          },
        ])
      ) as any),
      ['@font-face' as any]: Object.values(fonts).map(
        ({ format, name, url }) => ({
          fontFamily: name,
          src: `url(${url}) format('${format}')`,
        })
      ),
    });
  }

  return _useThemes();
};

export { useThemes };
