import { createUseStyles } from "react-jss";
import FiraBold from "../../fonts/FiraGO-Bold.ttf";
import FiraBoldItalic from "../../fonts/FiraGO-BoldItalic.ttf";
import FiroGoBook from "../../fonts/FiraGO-Book.ttf";
import FiroGoBookItalic from "../../fonts/FiraGO-BookItalic.ttf";
import FiraGOEight from "../../fonts/FiraGO-Eight.ttf";
import FiraGOEightItalic from "../../fonts/FiraGO-EightItalic.ttf";
import FiraGOFour from "../../fonts/FiraGO-Four.ttf";
import FiraGOFourItalic from "../../fonts/FiraGO-FourItalic.ttf";
import FiraGOHair from "../../fonts/FiraGO-Hair.ttf";
import FiraGOHairItalic from "../../fonts/FiraGO-HairItalic.ttf";
import FiraGOHeavyItalic from "../../fonts/FiraGO-HeavyItalic.ttf";
import FiraGOItalic from "../../fonts/FiraGO-Italic.ttf";
import FiraGOLight from "../../fonts/FiraGO-Light.ttf";
import FiraGOLightItalic from "../../fonts/FiraGO-LightItalic.ttf";
import FiraGOMedium from "../../fonts/FiraGO-Medium.ttf";
import FiraGOMediumItalic from "../../fonts/FiraGO-MediumItalic.ttf";
import FiraGORegular from "../../fonts/FiraGO-Regular.ttf";
import FiraGOSemiBold from "../../fonts/FiraGO-SemiBold.ttf";
import FiraGOSemiBoldItalic from "../../fonts/FiraGO-SemiBoldItalic.ttf";
import FiraGOThin from "../../fonts/FiraGO-Thin.ttf";
import FiraGOThinItalic from "../../fonts/FiraGO-ThinItalic.ttf";
import FiraGOTwo from "../../fonts/FiraGO-Two.ttf";
import FiraGOTwoItalic from "../../fonts/FiraGO-TwoItalic.ttf";
import FiraGOUltraLight from "../../fonts/FiraGO-UltraLight.ttf";

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
    name: "FiraBold",
    url: FiraBold,
    format: "truetype",
  },
  BoldItalic: {
    name: "FiraBoldItalic",
    url: FiraBoldItalic,
    format: "truetype",
  },
  Book: {
    name: "FiroGoBook",
    url: FiroGoBook,
    format: "truetype",
  },
  BookItalic: {
    name: "FiroGoBookItalic",
    url: FiroGoBookItalic,
    format: "truetype",
  },
  Eight: {
    name: "FiraGOEight",
    url: FiraGOEight,
    format: "truetype",
  },
  EightItalic: {
    name: "FiraGOEightItalic",
    url: FiraGOEightItalic,
    format: "truetype",
  },
  Four: {
    name: "FiraGOFour",
    url: FiraGOFour,
    format: "truetype",
  },
  FourItalic: {
    name: "FiraGOFourItalic",
    url: FiraGOFourItalic,
    format: "truetype",
  },
  Hair: {
    name: "FiraGOHair",
    url: FiraGOHair,
    format: "truetype",
  },
  HairItalic: {
    name: "FiraGOHairItalic",
    url: FiraGOHairItalic,
    format: "truetype",
  },
  HeavyItalic: {
    name: "FiraGOHeavyItalic",
    url: FiraGOHeavyItalic,
    format: "truetype",
  },
  Italic: {
    name: "FiraGOItalic",
    url: FiraGOItalic,
    format: "truetype",
  },
  Light: {
    name: "FiraGOLight",
    url: FiraGOLight,
    format: "truetype",
  },
  LightItalic: {
    name: "FiraGOLightItalic",
    url: FiraGOLightItalic,
    format: "truetype",
  },
  Medium: {
    name: "FiraGOMedium",
    url: FiraGOMedium,
    format: "truetype",
  },
  MediumItalic: {
    name: "FiraGOMediumItalic",
    url: FiraGOMediumItalic,
    format: "truetype",
  },
  Regular: {
    name: "FiraGORegular",
    url: FiraGORegular,
    format: "truetype",
  },
  SemiBold: {
    name: "FiraGOSemiBold",
    url: FiraGOSemiBold,
    format: "truetype",
  },
  SemiBoldItalic: {
    name: "FiraGOSemiBoldItalic",
    url: FiraGOSemiBoldItalic,
    format: "truetype",
  },
  Thin: {
    name: "FiraGOThin",
    url: FiraGOThin,
    format: "truetype",
  },
  ThinItalic: {
    name: "FiraGOThinItalic",
    url: FiraGOThinItalic,
    format: "truetype",
  },
  Two: {
    name: "FiraGOTwo",
    url: FiraGOTwo,
    format: "truetype",
  },
  TwoItalic: {
    name: "FiraGOTwoItalic",
    url: FiraGOTwoItalic,
    format: "truetype",
  },
  UltraLight: {
    name: "FiraGOUltraLight",
    url: FiraGOUltraLight,
    format: "truetype",
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
        ]),
      ) as any),
      ["@font-face" as any]: Object.values(fonts).map(
        ({ format, name, url }) => ({
          fontFamily: name,
          src: `url(${url}) format('${format}')`,
        }),
      ),
    });
  }

  return _useThemes();
};

export { useThemes };