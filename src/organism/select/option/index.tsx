import classNames from "classnames";
import { Text } from "../../../atoms/text";
import { Colors } from "../../../colors";
import { OptionProps } from "../types";
import styles from "./option.module.scss";

const Option = ({ children, value, onClick, isSelected }: OptionProps) => {
  const handleOnClick = () => {
    onClick(value);
  };

  return (
    <div
      onClick={handleOnClick}
      className={classNames(
        styles["item"],
        isSelected && styles["item--selected"],
      )}
    >
      <Text size={16} theme={"Regular"} color={Colors.color_primary_1}>
        {children}
      </Text>
    </div>
  );
};

export { Option };
