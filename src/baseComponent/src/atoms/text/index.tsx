import classNames from "classnames";
import * as React from "react";
import { BaseText, BaseTextProps, Variant } from "./baseText/baseText";
import { fonts, fontSizes, fontWeights, useThemes } from "./style";

interface TextProps extends BaseTextProps {
  theme?: "medium" | "regular" | "light" | "bold";
  lang?: "fa" | "en";
  weight?: keyof typeof fontWeights | number;
  color?: string;
  /**
   * Sizes
   *
   * - Xxsmall: 10,
   * - Xsmall: 12,
   * - Small: 14,
   * - Medium: 16,
   * - Large: 18,
   * - Xlarge: 20,
   * - Xxlarge: 22,
   */
  size?: keyof typeof fontSizes | number;
}

const Text = React.memo(
  React.forwardRef<any, TextProps>(
    (
      {
        theme = "regular",
        lang,
        className,
        color,
        style,
        size,
        weight,
        variant,
        ...rest
      },
      ref,
    ) => {
      const themes = useThemes();

      // console.log(themes["bold"]);
      // console.log(themes);
      // console.log(theme);
      // console.log(`${theme}${lang ? `-${lang}` : ""}`);

      const fontSize = typeof size === "string" ? fontSizes[size] : size;
      const fontWeight =
        typeof weight === "string" ? fontWeights[weight] : weight;
      const setVariant = (): Variant => {
        if (typeof size !== "number" && size?.match(/h(1|2|3|4|5|6)/g)) {
          return size as Variant;
        }
        return "p";
      };

      return (
        <BaseText
          ref={ref}
          variant={variant || setVariant()}
          className={classNames(
            themes[`${theme}${lang ? `-${lang}` : ""}` as keyof typeof themes],
            className,
          )}
          style={{
            ...style,
            color,
            fontSize,
            fontWeight,
          }}
          {...rest}
        />
      );
    },
  ),
);

export { Text, fonts };
export type { TextProps };
