import classNames from "classnames";
import React from "react";
import { Text } from "../../atoms/text";
import styles from "./checkbox.module.scss";

export interface CheckBoxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  children?: React.ReactNode;
  indeterminate?: boolean;
}

const CheckBox = ({
  checked,
  value,
  onChange,
  children,
  name,
  indeterminate,
  ...rest
}: CheckBoxProps) => {
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e);
  };

  return (
    <label style={{ display: "flex" }}>
      <div
        style={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            ...(typeof children !== "undefined" && { marginInlineEnd: 4 }),
          }}
          className={classNames(
            styles["Input"],
            checked && !indeterminate && styles["Inputchecked"],
            indeterminate && styles["Indeterminate"],
          )}
        />
        <input
          className={styles["hiddenInput"]}
          type={"checkbox"}
          value={value}
          name={name}
          checked={checked}
          onChange={onChangeHandler}
          {...rest}
        />
      </div>

      {typeof children === "string" ? (
        <Text size={16}>{children}</Text>
      ) : (
        children
      )}
    </label>
  );
};

export { CheckBox };
