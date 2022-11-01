import classNames from "classnames";
import React from "react";
import { Text } from "../../atoms/text";
import { useStyles } from "./style";

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
  const classes = useStyles();

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
            classes.Input,
            checked && !indeterminate && classes.Inputchecked,
            indeterminate && classes.Indeterminate,
          )}
        />
        <input
          className={classes.hiddenInput}
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
