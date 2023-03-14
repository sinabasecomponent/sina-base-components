/* eslint-disable react/jsx-key */
import classNames from "classnames";
import { ReactNode } from "react";
import { DEFAULT_ALIGN } from "..";
import { Text } from "../../../atoms/text";
import styles from "./cell.module.scss";
export interface CellProps
  extends Omit<React.TdHTMLAttributes<HTMLTableCellElement>, "align"> {
  children?: ReactNode;
  align?: "start" | "center" | "end";
  onPress?: () => void;
}

const Cell = ({
  width,
  children,
  onPress,
  align = DEFAULT_ALIGN,
  ...rest
}: CellProps) => {
  return (
    <td
      {...rest}
      style={{ height: "inherit" }}
      onClick={onPress}
      className={classNames(
        align === "start" && styles["start"],
        align === "center" && styles["center"],
        align === "end" && styles["end"],
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
