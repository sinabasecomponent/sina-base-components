import classNames from "classnames";
import { FC } from "react";
import { Colors } from "../../colors";
import { Loading } from "../loading";
import { Text } from "../text";
import styles from "./button.module.scss";

export interface ButtonProps
  extends Omit<React.HTMLAttributes<HTMLButtonElement>, "type" | "children"> {
  type?: "submit" | "button" | "reset";
  mode?: "primary" | "secondary";
  children: React.ReactNode;
  className?: string;
  isLoading?: boolean;
  disabled?: boolean;
}

const Button: FC<ButtonProps> = ({
  children,
  mode = "primary",
  type = "button",
  className,
  isLoading,
  disabled,
  ...rest
}) => {
  return (
    <button
      {...rest}
      disabled={disabled || isLoading}
      className={classNames(
        styles["button"],
        mode === "primary" && styles["button--primary"],
        mode === "secondary" && styles["button--secondary"],
        className,
      )}
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
      </div>
      {isLoading ? (
        <div
          style={{
            position: "absolute",
            right: 0,
            top: "53%",
            transform: "translate(-20px,-50%)",
          }}
        >
          <Loading
            isLoading
            spinnerColor={Colors.color_white}
            size={"medium"}
          />
        </div>
      ) : null}
      {(isLoading || disabled) && <div className={styles["cover"]} />}
    </button>
  );
};
export { Button };
