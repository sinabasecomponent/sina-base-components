// import FiraBold from "@sina-base/asset/src/fonts/FiraGO-Bold.ttf";
import { createUseStyles } from "react-jss";
import FiraBold from "./fontsAsset/FiraGO-Bold.ttf";

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
    format: "ttf",
  },
  "bold-fa": {
    name: "FiraBold",
    url: FiraBold,
    format: "ttf",
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
