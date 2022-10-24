/* eslint-disable react/jsx-key */
import classNames from "classnames";
import { ReactNode } from "react";
// import { useObserveWindow } from "reactjs-view-core";
// import { useColors } from "shared-theme/src";
import { Text } from "../../../atoms/text";
import { useStyles } from "./style";
export interface CellProps
  extends Omit<React.TdHTMLAttributes<HTMLTableDataCellElement>, "align"> {
  children?: ReactNode;
  align?: "start" | "center" | "end";
  onPress?: () => void;
}

const Cell = ({
  width,
  children,
  onPress,
  align = "start",
  ...rest
}: CellProps) => {
  //   const classes = useStyles();
  //   const { onBackground } = useColors();
  //   const { isSmallerThanMedium } = useObserveWindow();
  const classes = useStyles();

  return (
    <td
      {...rest}
      onClick={onPress}
      className={classNames(
        // !isSmallerThanMedium && classes.container,
        // isSmallerThanMedium && classes.containerMedium,
        // onPress && classes.pointer,
        align === "start" && classes.start,
        align === "center" && classes.center,
        align === "end" && classes.end,
      )}
    >
      {typeof children !== "object" ? (
        <Text theme="Regular" size="small" color={"red"}>
          {children}
        </Text>
      ) : (
        children
      )}
    </td>
  );
};

export { Cell };
