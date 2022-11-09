import classNames from "classnames";
import { BaseIcon } from "../../baseIcon";
import styles from "./node.module.scss";

interface ItemProps {
  title: string;
  onClick?: () => void;
  isChild?: boolean;
  arrowDirection?: "up" | "down";
  level?: number;
  // height?: number;
}

const Item = ({
  title,
  onClick,
  arrowDirection,
  isChild,
  level,
}: // height,
ItemProps) => {
  return (
    <div
      onClick={onClick}
      className={classNames(
        styles["wrapper"],
        isChild && styles["wrapper__cursor"],
        level && level > 1 && styles["dotLine"],
      )}
    >
      <div className={styles["statusLine"]} />
      <div className={styles["content"]}>
        <div>{title}</div>
        {isChild ? (
          <BaseIcon
            wrapperClassName={classNames(
              styles["arrowDown"],
              arrowDirection === "up" && styles["arrowUp"],
            )}
            name={"Amount-Boxes_Decrease"}
            size={10}
            wrapperStyle={{ marginInlineStart: "auto" }}
          />
        ) : null}
      </div>
    </div>
  );
};

export { Item };
