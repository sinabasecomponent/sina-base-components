import React, { useContext } from "react";
import { BaseIcon } from "../../../atoms";
import { Colors } from "../../../colors";
import { CheckBox } from "../../checkbox";
import { TableContext } from "../context";
import { useStyles } from "./style";

const Header = ({
  children,
  onToggleSearchBar,
  data,
  isOnCheckedRowsAvailable,
}: {
  children: React.ReactNode;
  onToggleSearchBar?: () => void;
  data: any[];
  isOnCheckedRowsAvailable: boolean;
}) => {
  const classes = useStyles();
  const { checkedRows, onCheckAllRows, isAllRowsChecked } =
    useContext(TableContext);
  return (
    <tr>
      <th>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {isOnCheckedRowsAvailable ? (
            <div
              style={{
                borderRight: `1px solid ${Colors.purple_6}`,
                width: 31,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: 24,
              }}
            >
              <CheckBox
                checked={isAllRowsChecked}
                onChange={onCheckAllRows}
                indeterminate={
                  checkedRows.length > 0 && checkedRows.length !== data.length
                }
              />
            </div>
          ) : null}

          <div style={{ height: 24 }} className={classes.search}>
            <BaseIcon
              onClick={onToggleSearchBar}
              color={Colors.purple_6}
              name="Table-_-Filter"
              size={16}
            />
          </div>
        </div>
      </th>
      {children}
      <th />
    </tr>
  );
};

export { Header };
