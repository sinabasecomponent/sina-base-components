import { useContext } from "react";
import { DEFAULT_ALIGN, SEARCH_ICON } from "..";
import { BaseIcon } from "../../../atoms";
import { Colors } from "../../../colors";
import { CheckBox } from "../../../molecules";
import { ColumnProps } from "../column";
import { TableContext } from "../context";

interface SearchBarProps<T extends Record<string, any>> {
  isSearchVisible: boolean;
  columns: ColumnProps<T>[];
  data: T[];
  searchBarStyle?: React.CSSProperties;
  isOnCheckedRowsAvailable: boolean;
  onResetFilters?: () => void;
  searchBarClassName?: string;
  clearFilterIcon?: React.ReactNode;
}

const SearchBar = <T extends Record<string, any>>({
  isSearchVisible,
  columns,
  data,
  searchBarStyle,
  isOnCheckedRowsAvailable,
  onResetFilters,
  searchBarClassName,
  clearFilterIcon,
}: SearchBarProps<T>) => {
  const { checkedRows, onCheckAllRows, isAllRowsChecked } =
    useContext(TableContext);
  return (
    <tr
      className={searchBarClassName}
      style={{
        display: isSearchVisible ? "table-row" : "none",
        height: 45,
        backgroundColor: Colors.color_primary_2,
        ...searchBarStyle,
      }}
    >
      <th style={{ width: SEARCH_ICON }}>
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
                borderRight: `1px solid ${Colors.color_primary_5}`,
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
          <div
            style={{
              height: 24,
              width: 31,
              borderRight: `1px solid ${Colors.color_primary_5}`,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {clearFilterIcon ? (
              clearFilterIcon
            ) : (
              <BaseIcon
                wrapperStyle={{ cursor: "pointer" }}
                onClick={onResetFilters}
                color={Colors.color_primary_5}
                name="Table-_-Clear-Filters"
                size={17}
              />
            )}
          </div>
        </div>
      </th>
      {columns.map(({ renderFilter, align }, index) => {
        return (
          <th style={{ textAlign: align ? align : DEFAULT_ALIGN }} key={index}>
            {renderFilter ? renderFilter({ data }) : null}
          </th>
        );
      })}
      <th />
    </tr>
  );
};

export { SearchBar };
