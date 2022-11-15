import { useContext, useState } from "react";
import { Text } from "../text";
import { RadioContext } from "./context";

export interface RadioProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "value"> {
  children?: React.ReactNode;
  mode?: "dark" | "light";
  value?: string | number | undefined;
}
const Radio = ({
  checked,
  children,
  mode,
  name,
  value,
  ...rest
}: RadioProps) => {
  const { onChange, value: _valuex } = useContext(RadioContext);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e);
  };

  const _value: React.InputHTMLAttributes<HTMLInputElement>["value"] = value
    ? value
    : undefined;

  return (
    <label
      style={{
        position: "relative",
        display: "inline-flex",
        alignItems: "center",
        columnGap: 8,
      }}
    >
      <div
        style={{
          width: 16,
          height: 16,
          border: "1px solid green",
          borderRadius: "50%",
          backgroundColor: "white",
          position: "relative",
          display: "inline-block",
        }}
      >
        <input
          onChange={onChangeHandler}
          //   onClick={onChangeHandler}
          style={{
            opacity: 0,
            position: "absolute",
            top: "50%",
            left: "50%",
            margin: 0,
            transform: "translate(-50%,-50%)",
          }}
          type={"radio"}
          value={_value}
          name={name}
          //   checked={checked}
          {...rest}
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
};

const Group = ({
  children,
  value,
  name,
}: {
  children?: React.ReactNode;
  value: string;
  name: string;
}) => {
  const [xvalue, setxValue] = useState();

  const hangleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value, "saga");
  };

  return (
    <div>sag</div>
    // <RadioContext.Provider value={{ value, onChange: hangleOnChange, name }}>
    //   {children}
    // </RadioContext.Provider>
  );
};

Radio.Group = Group;

export { Radio };
