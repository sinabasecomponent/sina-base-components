import { DEFAULT_ALIGN, SEARCH_ICON } from "..";
import { BaseIcon } from "../../../atoms";
import { Colors } from "../../../colors";
import { ColumnProps } from "../column";
import { useStyles } from "./style";

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
  const classes = useStyles();
  return (
    <tr
      style={{
        display: isSearchVisible ? "table-row" : "none",
      }}
      className={classes.searchBar}
    >
      <th style={{ width: SEARCH_ICON }}>
        <div
          style={{
            height: 24,
            width: 32,
            borderRight: `1px solid ${Colors.purple_6}`,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <BaseIcon
            onClick={onToggleSearchBar}
            color={Colors.purple_6}
            name="Table_Cross-Icon-for-erasing-all-of-filters"
            size={14}
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
