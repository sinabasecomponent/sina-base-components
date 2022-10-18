import classNames from "classnames";
import { forwardRef, memo, ReactNode } from "react";
import { createUseStyles } from "react-jss";

// type Style = 0 | false | undefined | CSSProperties | Style[];
export type Variant =
  | "div"
  | "a"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "article"
  | "p"
  | "main"
  | "section";

export interface BaseTextProps
  extends Omit<React.HTMLAttributes<HTMLElement>, "children" | "className"> {
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

/** Inspired of React-native Text */
const BaseText = memo(
  forwardRef<any, BaseTextProps>(
    (
      {
        dir,
        numberOfLines,
        // eslint-disable-next-line @typescript-eslint/naming-convention
        selectable,
        className,
        style,
        ...rest
      },
      forwardedRef,
    ) => {
      const classes = useStyles();
      return (
        <div
          ref={forwardedRef}
          dir={dir != null ? dir : "auto"}
          className={classNames(
            classes.text,
            selectable === true && classes.selectable,
            selectable === false && classes.notSelectable,
            numberOfLines != null && classes.textMultiLine,
            className,
          )}
          style={{
            ...style,
            ...(numberOfLines && { WebkitLineClamp: numberOfLines }),
          }}
          {...rest}
        />
      );
    },
  ),
);

const useStyles = createUseStyles({
  text: {
    border: "0 solid black",
    boxSizing: "border-box",
    color: "black",
    display: "inline",
    fontSize: 14,
    margin: 0,
    padding: 0,
    whiteSpace: "pre-wrap",
    wordWrap: "break-word",
  },
  // See #13
  textMultiLine: {
    display: "-webkit-box",
    maxWidth: "100%",
    overflow: "hidden",
    textOverflow: "ellipsis",
    // whiteSpace: "pre",
    WebkitBoxOrient: "vertical",
  },
  notSelectable: {
    userSelect: "none",
  },
  selectable: {
    userSelect: "text",
  },
});

BaseText.displayName = "BaseText";

export { BaseText };
