import classNames from "classnames";
import { FC } from "react";
import { Colors } from "../../colors";
import { Loading } from "../loading";
import { Text } from "../text";
import styles from "./button.module.scss";

export interface ButtonProps
  extends Omit<React.DOMAttributes<HTMLButtonElement>, "type" | "children"> {
  type?: "submit" | "button" | "reset";
  mode?: "primary" | "secondary";
  children: React.ReactNode;
  className?: string;
  isLoading?: boolean;
}

const Button: FC<ButtonProps> = ({
  children,
  mode = "primary",
  type = "button",
  className,
  isLoading,
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
      // disabled={isLoading}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {typeof children !== "object" ? (
          <Text size={16} color={Colors.color_white}>
            {children}
          </Text>
        ) : (
          children
        )}
        {isLoading ? (
          <div style={{ marginInlineStart: 8 }}>
            <Loading
              isLoading
              spinnerColor={Colors.color_white}
              size={"medium"}
            />
          </div>
        ) : null}
      </div>
    </button>
  );
};
export { Button };
