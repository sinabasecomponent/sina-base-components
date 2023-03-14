import classNames from "classnames";
import { ReactNode } from "react";
export declare type Variant = "div" | "a" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "article" | "p" | "main" | "section";
export interface BaseTextProps extends Omit<React.HTMLAttributes<HTMLElement>, "children" | "className"> {
    testID?: string;
    href?: string;
    variant?: Variant;
    children?: ReactNode | ReactNode[] | null;
    onPress?: (e: any) => void;
    dir?: "auto" | "ltr" | "rtl";
    numberOfLines?: number;
    selectable?: boolean;
    className?: Parameters<typeof classNames>[0];
}
declare const BaseText: import("react").MemoExoticComponent<import("react").ForwardRefExoticComponent<BaseTextProps & import("react").RefAttributes<any>>>;
export { BaseText };
//# sourceMappingURL=baseText.d.ts.map