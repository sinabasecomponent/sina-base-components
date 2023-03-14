import classNames from "classnames";
import { ReactNode } from "react";
import { BaseIcon, Text } from "../../atoms";
import { Colors } from "../../colors";
import styles from "./tabs.module.scss";

export interface InternalTabPaneProps {
  id: string;
  renderTitle:
    | React.ReactNode
    | (({ id, isActive }: { id: string; isActive: boolean }) => ReactNode);
  closable: boolean;
  onClick: (id: string) => void;
  isActive: boolean;
  onClose?: (id: string) => void;
}

function InternalTabPane({
  id,
  renderTitle,
  closable,
  onClick,
  isActive,
  onClose,
}: InternalTabPaneProps) {
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        onClick(id);
      }}
      className={classNames(
        styles["tabs__tab"],
        isActive && styles["tabs__tab--active"],
      )}
      key={id}
    >
      {typeof renderTitle === "string" ? (
        <Text
          size={14}
          theme={"Regular"}
          color={isActive ? Colors.color_white : Colors.color_primary_3}
        >
          {renderTitle}
        </Text>
      ) : typeof renderTitle === "function" ? (
        renderTitle({ id, isActive })
      ) : null}
      {closable && (
        <BaseIcon
          wrapperStyle={{
            position: "absolute",
            top: 5,
            right: 5,
          }}
          color={Colors.color_primary_4}
          name="Table-_-Cross-Icon-for-erasing-all-of-filters"
          size={9}
          onClick={(event: React.MouseEvent) => {
            event.stopPropagation();
            onClose?.(id);
          }}
        />
      )}
    </button>
  );
}

export { InternalTabPane };
