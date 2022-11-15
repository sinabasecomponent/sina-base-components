import { useState } from "react";
import { Colors } from "../../../colors";

interface RowProps extends React.HTMLAttributes<HTMLTableRowElement> {
  children?: React.ReactNode;
  isExpanded?: boolean;
  testID?: string;
  index: number;
  isChecked: boolean;
  isSelected: boolean;
  isOnCheckedRowsAvailable: boolean;
}

const Row = ({
  isChecked,
  className,
  index,
  testID,
  isOnCheckedRowsAvailable,
  isSelected,
  ...rest
}: RowProps) => {
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
        backgroundColor: isChecked
          ? Colors.color_secondary_3
          : isSelected
          ? Colors.color_secondary_3
          : isHoverd
          ? Colors.color_primary_7
          : "transparent",
        height: 32,
        borderBottom: ".5px solid #C1C0C0",
        cursor: isOnCheckedRowsAvailable ? "default" : "pointer",
      }}
    />
  );
};

export { Row };
