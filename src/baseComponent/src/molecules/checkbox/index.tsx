import classNames from "classnames";
import React, { useEffect, useState } from "react";
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
  const [isCheck, setChecked] = useState(false);
  const [isIndeterminate, setIndeterminate] = useState(false);

  const classes = useStyles();

  useEffect(() => {
    typeof indeterminate !== "undefined" && setIndeterminate(indeterminate);
  }, [indeterminate]);

  useEffect(() => {
    typeof checked !== "undefined" && setChecked(checked);
  }, [checked]);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e);
    if (typeof indeterminate === "undefined") {
      setIndeterminate(false);
    }
    if (typeof checked !== "boolean" && typeof indeterminate === "undefined") {
      setChecked((prev) => !prev);
    }
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
            isCheck && !isIndeterminate && classes.Inputchecked,
            isIndeterminate && classes.Indeterminate,
          )}
        />
        <input
          className={classes.hiddenInput}
          type={"checkbox"}
          value={value}
          name={name}
          checked={isCheck}
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
