import classNames from "classnames";
import { FC } from "react";
import { BaseIcon, Text } from "../../atoms";
import { Colors } from "../../colors";
import { useStyles } from "./style";

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
  isOpen = true,
}) => {
  const { lomNodeButton, lomNodeButtonSelected } = useStyles();
  const settingClicked = (event: React.MouseEvent) => {
    event.stopPropagation();
    settingClickHandler?.();
  };
  return (
    <div
      onClick={() => clickHandler()}
      className={classNames(lomNodeButton, isOpen && lomNodeButtonSelected)}
    >
      <BaseIcon
        size={{ height: 10, width: 10 }}
        name="Abstract-Service-Graph_Hamburger-Menu"
        onClick={settingClicked}
      />
      <Text>{text}</Text>
      {isOpen ? (
        <BaseIcon
          size={{ height: 10, width: 10 }}
          name="Amount-Boxes_Decrease"
          color={Colors.color_white}
        />
      ) : (
        <BaseIcon
          size={{ height: 10, width: 10 }}
          name="Amount-Boxes_Increase"
          color={Colors.color_white}
        />
      )}
    </div>
  );
};
export { NodeButton };
