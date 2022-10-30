import React from "react";
import { BaseIcon } from "../../../atoms";
import { Colors } from "../../../colors";
import { useStyles } from "./style";

const Header = ({
  children,
  onToggleSearchBar,
}: {
  children: React.ReactNode;
  onToggleSearchBar?: () => void;
}) => {
  const classes = useStyles();
  return (
    <tr>
      <th>
        <div className={classes.header}>
          <BaseIcon
            onClick={onToggleSearchBar}
            color={Colors.purple_6}
            name="Table_Search-Icon"
            size={16}
          />
        </div>
      </th>
      {children}
      <th />
    </tr>
  );
};

export { Header };
