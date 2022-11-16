import _ from "lodash";
import { useContext, useEffect, useMemo, useState } from "react";
import { Colors } from "../../colors";
import { Text } from "../text";
import { ModeType, RadioContext, ValueType } from "./context";
import styles from "./radio.module.scss";

export interface RadioProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "value" | "name"> {
  children?: React.ReactNode;
  value?: ValueType;
}
const Radio = ({ children, value, ...rest }: RadioProps) => {
  const [ripples, setRipples] = useState<{ id: number }[]>([]);

  const {
    onChange,
    value: contextValue,
    mode,
    name,
  } = useContext(RadioContext);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e);
  };

  const _value: React.InputHTMLAttributes<HTMLInputElement>["value"] = value
    ? value
    : undefined;

  const isChecked = _value === contextValue;

  const isLightChecked = mode === "light" && isChecked;
  const isLightUnChecked = mode === "light" && !isChecked;
  const isDarkChecked = mode === "dark" && isChecked;
  const isDarkUnChecked = mode === "dark" && !isChecked;

  const borderColor = isLightChecked
    ? Colors.color_secondary_1
    : isLightUnChecked
    ? Colors.color_white
    : (isDarkChecked || isDarkUnChecked) && Colors.color_primary_1;

  const backgroundColor = isLightChecked
    ? Colors.color_secondary_1
    : isLightUnChecked
    ? Colors.color_primary_3
    : isDarkChecked
    ? Colors.color_secondary_1
    : isDarkUnChecked
    ? Colors.color_primary_6
    : Colors.color_primary_6;

  const showRipple = () => {
    setRipples((prev) => {
      return [...prev, { id: Date.now() }];
    });
  };

  const renderRipple = () => {
    if (ripples.length > 0) {
      return ripples.map(({ id }) => {
        return <div className={styles["ripple"]} key={id} />;
      });
    }
  };

  const onDebounce = useMemo(
    () =>
      _.debounce(() => {
        setRipples([]);
      }, 1000),
    [],
  );

  return (
    <label
      onMouseDown={showRipple}
      onMouseUp={onDebounce}
      style={{
        position: "relative",
        display: "inline-flex",
        alignItems: "center",
        columnGap: 11,
        cursor: "pointer",
      }}
    >
      <div style={{ position: "relative", width: 16, height: 16 }}>
        <div
          style={{
            width: 16,
            height: 16,
            border: `1px solid ${borderColor}`,
            borderRadius: "50%",
            backgroundColor: Colors.color_white,
            position: "absolute",
            display: "inline-block",
            zIndex: 2,
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
          }}
        >
          <div
            style={{
              width: 10,
              height: 10,
              backgroundColor: backgroundColor,
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%,-50%)",
              borderRadius: "50%",
            }}
          />
          <input
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
        </div>
        {renderRipple()}
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
};

const Group = ({
  children,
  value,
  name,
  onChange,
  mode = "dark",
}: {
  children?: React.ReactNode;
  value?: ValueType;
  name?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  mode?: ModeType;
}) => {
  const [internalValue, setInternalValue] = useState<ValueType>(undefined);

  useEffect(() => {
    setInternalValue(value);
  }, [value]);

  const hangleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInternalValue(e.target.value);
    onChange?.(e);
  };

  return (
    <RadioContext.Provider
      value={{
        value: internalValue,
        onChange: hangleOnChange,
        name,
        mode,
      }}
    >
      {children}
    </RadioContext.Provider>
  );
};

Radio.Group = Group;

export { Radio };
