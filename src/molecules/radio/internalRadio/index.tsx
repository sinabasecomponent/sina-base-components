import { motion } from "framer-motion";
import React, { useContext, useState } from "react";
import { Text } from "../../../atoms/text";
import { Colors } from "../../../colors";
import { RadioContext, ValueType } from "../context";
import { CustomCircle } from "./customCircle";
import styles from "./radio.module.scss";

export interface RadioProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "value" | "name"> {
  children?: React.ReactNode;
  value?: ValueType;
}
const InternalRadio = React.forwardRef<HTMLDivElement, RadioProps>(
  ({ children, value, onFocus, onBlur, ...rest }, ref) => {
    const [isFocused, setFocus] = useState(false);

    const {
      onChange,
      value: contextValue,
      mode,
      name,
    } = useContext(RadioContext);

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange(e);
    };

    const focusHandler: React.FocusEventHandler<HTMLInputElement> = (e) => {
      onFocus?.(e);
      setFocus(true);
    };

    const blurHandler: React.FocusEventHandler<HTMLInputElement> = (e) => {
      onBlur?.(e);
      setFocus(false);
    };

    const _value: React.InputHTMLAttributes<HTMLInputElement>["value"] = value
      ? value
      : undefined;

    const isChecked = _value === contextValue;

    const isLightChecked = mode === "light" && isChecked;
    const isLightUnChecked = mode === "light" && !isChecked;
    const isDarkChecked = mode === "dark" && isChecked;
    const isDarkUnChecked = mode === "dark" && !isChecked;

    const borderColor: Colors = isLightChecked
      ? Colors.color_secondary_1
      : isLightUnChecked
      ? Colors.color_white
      : isDarkChecked || isDarkUnChecked
      ? Colors.color_primary_1
      : Colors.color_primary_1;

    const backgroundColor: Colors = isLightChecked
      ? Colors.color_secondary_1
      : isLightUnChecked
      ? Colors.color_primary_3
      : isDarkChecked
      ? Colors.color_secondary_1
      : isDarkUnChecked
      ? Colors.color_primary_6
      : Colors.color_primary_6;

    return (
      <label
        style={{
          position: "relative",
          display: "inline-flex",
          alignItems: "center",
          columnGap: 11,
          cursor: "pointer",
        }}
      >
        <div ref={ref} style={{ position: "relative", width: 16, height: 16 }}>
          <CustomCircle {...{ borderColor, backgroundColor }} />
          <input
            onFocus={focusHandler}
            onBlur={blurHandler}
            onChange={onChangeHandler}
            style={{
              opacity: 0,
              position: "absolute",
              top: "50%",
              left: "50%",
              margin: 0,
              transform: "translate(-50%,-50%)",
              cursor: "pointer",
            }}
            type={"radio"}
            value={_value}
            name={name}
            checked={_value === contextValue}
            {...rest}
          />
          <motion.div
            className={styles["ripple"]}
            animate={{
              width: isFocused ? 20 : 0,
              height: isFocused ? 20 : 0,
            }}
          />
        </div>

        {typeof children === "string" ? (
          <span>
            <Text size={16}>{children}</Text>
          </span>
        ) : (
          <span>{children}</span>
        )}
      </label>
    );
  },
);

export { InternalRadio };
