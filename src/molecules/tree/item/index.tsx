import classNames from "classnames";
import { Loading, Text } from "../../../atoms";
import { BaseIcon } from "../../../atoms/baseIcon";
import { Colors } from "../../../colors";
import { useStyle } from "./style";

interface ItemProps {
  title?: string;
  arrowDirection?: "up" | "down";
  level: number;
  backgroundColor: Colors;
  isActive?: boolean;
  textColor: Colors;
  fontSize?: number;
  isLoading: boolean;
  onClick?: () => void;
}

const Item = ({
  title,
  onClick,
  arrowDirection,
  level,
  backgroundColor,
  isActive,
  textColor,
  fontSize = 16,
  isLoading,
}: ItemProps) => {
  const classes = useStyle();
  return (
    <div
      onClick={() => onClick?.()}
      style={{
        cursor: "pointer",
        backgroundColor: isActive ? Colors.color_primary_1 : backgroundColor,
      }}
      className={classNames(
        classes["wrapper"],
        level && level > 1 && classes["dotLine"],
      )}
    >
      <div className={classes["statusLine"]} />
      <div className={classes["content"]}>
        <Text theme="Regular" size={fontSize} color={textColor}>
          {title}
        </Text>
        {isLoading ? (
          <div style={{ marginInlineStart: "auto" }}>
            <Loading size="small" spinnerColor={Colors.color_warning_1} />
          </div>
        ) : null}
        {arrowDirection !== undefined ? (
          <BaseIcon
            wrapperClassName={classNames(
              classes["arrowDown"],
              arrowDirection === "up" && classes["arrowUp"],
            )}
            name={"Amount-Boxes_Decrease"}
            size={{ height: 6, width: 12 }}
            wrapperStyle={{ marginInlineStart: "auto" }}
            color={Colors.color_primary_2}
          />
        ) : null}
      </div>
    </div>
  );
};

export { Item };
