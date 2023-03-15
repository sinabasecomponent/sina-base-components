import * as React from "react";
import { BaseTextProps } from "./baseText/baseText";
import { fonts, fontSizes, fontWeights } from "./style";
interface TextProps extends BaseTextProps {
    theme?: keyof typeof fonts;
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
declare const Text: React.MemoExoticComponent<React.ForwardRefExoticComponent<TextProps & React.RefAttributes<any>>>;
export { Text, fonts };
export type { TextProps };
