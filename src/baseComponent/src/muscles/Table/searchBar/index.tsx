import { DEFAULT_ALIGN, SEARCH_ICON } from "..";
import { BaseIcon } from "../../../atoms";
import { Colors } from "../../../colors";
import { ColumnProps } from "../column";
import styles from "./searchBar.module.scss";

interface SearchBarProps<T extends Record<string, any>> {
  isSearchVisible: boolean;
  onToggleSearchBar: () => void;
  columns: ColumnProps<T>[];
  data: T[];
}

const SearchBar = <T extends Record<string, any>>({
  isSearchVisible,
  onToggleSearchBar,
  columns,
  data,
}: SearchBarProps<T>) => {
  return (
    <tr
      style={{
        display: isSearchVisible ? "table-row" : "none",
      }}
      className={styles["searchBar"]}
    >
      <th style={{ width: SEARCH_ICON }}>
        <div
          style={{
            height: 24,
            width: 32,
            borderRight: `1px solid ${Colors.color_danger_1}`,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <BaseIcon
            onClick={onToggleSearchBar}
            color={Colors.color_danger_1}
            name="Table-_-Clear-Filters"
            size={17}
          />
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
