/* eslint-disable react/jsx-key */
// import { RowInteractionContext } from "../context";
// import { useStyles } from "./styles";

import { useState } from "react";
import { Colors } from "../../../colors";

interface RowProps extends React.HTMLAttributes<HTMLTableRowElement> {
  children?: React.ReactNode;
  isExpanded?: boolean;
  testID?: string;
  index: number;
  isChecked: boolean;
}

const Row = ({ isChecked, className, index, testID, ...rest }: RowProps) => {
  const [isHoverd, setIsHovered] = useState(false);
  // const { isAllRowsChecked } = useContext(TableContext);
  return (
    <tr
      {...rest}
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
      // onClick={() => onSelectRow({ index })}
      style={{
        backgroundColor: isChecked
          ? Colors.color_danger_3
          : isHoverd
          ? Colors.color_primary_2
          : "transparent",
        height: 32,
        borderBottom: ".5px solid #C1C0C0",
      }}
    />
  );
};

export { Row };
