/* eslint-disable react/jsx-key */
// import { RowInteractionContext } from "../context";
// import { useStyles } from "./styles";

import { useState } from "react";
import { Colors } from "../../../colors";

interface RowProps extends React.HTMLAttributes<HTMLTableRowElement> {
  children?: React.ReactNode;
  isExpanded?: boolean;
  testID?: string;
}

const Row = ({ className, testID, ...rest }: RowProps) => {
  //   const classes = useStyles();
  //   const { eventHandlers, isHovered } = useContext(RowInteractionContext);
  const [isHoverd, setIsHovered] = useState(false);

  return (
    <tr
      {...rest}
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
      style={{
        backgroundColor: isHoverd ? Colors.blue_for_Text : "transparent",
        height: 45,
      }}
      //   {...eventHandlers()}
      //   className={classNames(
      //     classes.container,
      //     // isHovered && classes.expanded,
      //     className,
      //   )}
      //   data-testid={testID}
    />
  );
};

export { Row };
