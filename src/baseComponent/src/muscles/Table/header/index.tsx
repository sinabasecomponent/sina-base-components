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
  isSearchVisible,
  filterIcon,
}: {
  children: React.ReactNode;
  onToggleSearchBar?: () => void;
  data: any[];
  isOnCheckedRowsAvailable: boolean;
  isSearchVisible: boolean;
  filterIcon?: React.ReactNode;
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
                mode="light"
                checked={isAllRowsChecked}
                onChange={onCheckAllRows}
                indeterminate={
                  checkedRows.length > 0 && checkedRows.length !== data.length
                }
              />
            </div>
          ) : null}

          <div style={{ height: 24 }} className={styles["search"]}>
            {filterIcon ? (
              filterIcon
            ) : (
              <BaseIcon
                color={
                  isSearchVisible
                    ? Colors.color_secondary_2
                    : Colors.color_primary_6
                }
                onClick={onToggleSearchBar}
                name="Table-_-Filter"
                size={16}
              />
            )}
          </div>
        </div>
      </th>
      {children}
      <th />
    </tr>
  );
};

export { Header };
