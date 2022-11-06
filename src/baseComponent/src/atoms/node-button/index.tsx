// import { ArrowIcon } from "assets/icons";
import classNames from "classnames";
import { FC } from "react";
import { Colors } from "../../colors";
import { BaseIcon } from "../baseIcon";
import styles from "./node-button.module.scss";

export interface NodeButtonProps {
  text: string;
  clickHandler: () => void;
  settingClickHandler?: () => void;
  isOpen?: boolean;
}

const NodeButton: FC<NodeButtonProps> = ({
  text,
  clickHandler,
  settingClickHandler,
  isOpen = false,
}) => {
  const settingClicked = (event: React.MouseEvent) => {
    event.stopPropagation();
    settingClickHandler?.();
  };
  return (
    <div
      onClick={() => clickHandler()}
      className={classNames(
        styles["lom-node-button"],
        isOpen && styles["lom-node-button--selected"],
      )}
    >
      <BaseIcon
        name="Abstract-Service-Graph_Hamburger-Menu"
        onClick={settingClicked}
      />
      <span>{text}</span>
      {isOpen ? (
        <BaseIcon name="Amount-Boxes_Decrease" color={Colors.white} />
      ) : (
        <BaseIcon name="Amount-Boxes_Increase" color={Colors.white} />
      )}
    </div>
  );
};
export { NodeButton };
