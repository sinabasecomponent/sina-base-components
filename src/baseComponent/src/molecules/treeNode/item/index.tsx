import classNames from "classnames";
import { Text } from "../../../atoms";
import { BaseIcon } from "../../../atoms/baseIcon";
import { Colors } from "../../../colors";
import styles from "./node.module.scss";

interface ItemProps {
  title: string;
  onClick?: () => void;
  arrowDirection?: "up" | "down";
  level?: number;
  backgroundColor: Colors;
  isActiveLeaf?: boolean;
  textColor: Colors;
  fontSize?: number;
}

const Item = ({
  title,
  onClick,
  arrowDirection,
  level,
  backgroundColor,
  isActiveLeaf,
  textColor,
  fontSize = 16,
}: ItemProps) => {
  return (
    <div
      onClick={onClick}
      style={{
        cursor: "pointer",
        backgroundColor: isActiveLeaf
          ? Colors.color_primary_1
          : backgroundColor,
      }}
      className={classNames(
        styles["wrapper"],
        level && level > 1 && styles["dotLine"],
      )}
    >
      <div className={styles["statusLine"]} />
      <div className={styles["content"]}>
        <Text theme="Regular" size={fontSize} color={textColor}>
          {title}
        </Text>
        {arrowDirection !== undefined ? (
          <BaseIcon
            wrapperClassName={classNames(
              styles["arrowDown"],
              arrowDirection === "up" && styles["arrowUp"],
            )}
            name={"Amount-Boxes_Decrease"}
            size={10}
            wrapperStyle={{ marginInlineStart: "auto" }}
            color={Colors.color_primary_2}
          />
        ) : null}
      </div>
    </div>
  );
};

export { Item };
