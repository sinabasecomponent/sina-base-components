import React from "react";
import "./icon";
import { IconsNames } from "./iconNames";
interface BaseIconProps extends Omit<React.HTMLAttributes<HTMLElement>, "className" | "style" | "children" | "color"> {
    name?: IconsNames;
    size?: "xsmall" | "small" | "medium" | "large" | number;
    color?: string | string[];
    testID?: string;
    wrapperStyle?: React.CSSProperties;
    wrapperClassName?: string;
}
declare const BaseIcon: ({ name, color, size, testID, wrapperStyle, wrapperClassName, ...rest }: BaseIconProps) => JSX.Element;
export { BaseIcon };
export type { IconsNames, BaseIconProps };
