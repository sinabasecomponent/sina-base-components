import classNames from "classnames";
import { FC } from "react";
import { Colors } from "../../colors";
import { Text } from "../text";
import styles from "./button.module.scss";

export interface ButtonProps
  extends Omit<React.DOMAttributes<HTMLButtonElement>, "type" | "children"> {
  type?: "submit" | "button" | "reset";
  mode?: "primary" | "secondary";
  children: React.ReactNode;
  className?: string;
}

const Button: FC<ButtonProps> = ({
  children,
  mode = "primary",
  type = "button",
  className,
  ...rest
}) => {
  return (
    <button
      {...rest}
      className={classNames(
        styles["button"],
        mode === "primary" && styles["button--primary"],
        mode === "secondary" && styles["button--secondary"],
        className,
      )}
    >
      {typeof children !== "object" ? (
        <Text size={16} color={Colors.color_white}>
          {children}
        </Text>
      ) : (
        children
      )}
    </button>
  );
};
export { Button };
