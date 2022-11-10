import React, { useContext } from "react";
import { BaseIcon } from "../../../atoms";
import { Colors } from "../../../colors";
import { CheckBox } from "../../../molecules/checkbox";
import { TableContext } from "../context";
import styles from "./header.module.scss";

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
                borderRight: `1px solid ${Colors.color_primary_6}`,
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

          <div style={{ height: 24 }} className={styles["search"]}>
            <BaseIcon
              onClick={onToggleSearchBar}
              color={Colors.color_primary_6}
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
