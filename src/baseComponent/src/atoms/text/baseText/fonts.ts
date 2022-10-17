import FiroGo from "../fontsAsset/FiraGO-Bold.ttf";
import FiraGOBoldItalic from "../fontsAsset/FiraGO-BoldItalic.ttf";

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
  medium: {
    name: "FiroGo",
    url: FiroGo,
    format: "ttf",
  },
  "medium-fa": {
    name: "FiraGOBoldItalic",
    url: FiraGOBoldItalic,
    format: "ttf",
  },
};
