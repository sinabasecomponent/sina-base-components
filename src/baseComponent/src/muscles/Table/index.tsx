import {
  Fragment,
  ReactNode,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useVirtual } from "react-virtual";
import { ScrollView, View } from "reactjs-view";
import { Loading } from "../../atoms";
import { Colors } from "../../colors";
import { Column, ColumnProps } from "./column";
import { Order, OrderBy, TableContext } from "./context";
import { Header } from "./header";
import { RowContainer } from "./rowContainer";
import { SearchBar } from "./searchBar";
import styles from "./table.module.scss";

export const SEARCH_ICON = 32;
export const ROW_SELECTION = 62;
export const SCROLL_BAR = 10;
export const DEFAULT_ALIGN = "center";

export interface TableProps<T> {
  data?: T[];
  children?: ReactNode;
  rowKey?: keyof T;
  onCheckedRows?: (value: T[]) => void;
  headerStyle?: React.CSSProperties;
  headerClassName?: string;
  searchBarClassName?: string;
  searchBarStyle?: React.CSSProperties;
  searchBarToggle?: () => void;
  filterIcon?: React.ReactNode;
  clearFilterIcon?: React.ReactNode;
  isLoading?: boolean;
  onSelectRow?: (value: T) => void;
}

const Table = <T extends object>({
  children,
  data,
  onCheckedRows,
  rowKey,
  headerStyle,
  headerClassName,
  searchBarClassName,
  searchBarToggle,
  searchBarStyle,
  filterIcon,
  clearFilterIcon,
  isLoading,
  onSelectRow,
}: TableProps<T>) => {
  const [totalWidth, setTotalWidth] = useState(0);
  const [order, setOrder] = useState<Order>(undefined);
  const [isSearchVisible, setShowSearchBar] = useState(false);
  const [orderBy, setOrderBy] = useState<OrderBy>(undefined);
  const [colWidth, setColWidth] = useState(0);
  const [selectedRow, setSelectedRow] = useState<T | undefined>(undefined);
  const [checkedRows, setCheckRows] = useState<T[]>([]);

  const [isAllRowsChecked, setAllRowsChecked] = useState(false);
  const tableContainerRef = useRef<HTMLDivElement>(null);

  const columns: ColumnProps<T>[] = useMemo(() => {
    function getChildren(_children: any): ColumnProps<T>[] {
      if (!_children) {
        return [];
      }
      if (
        typeof _children === "boolean" ||
        typeof _children === "undefined" ||
        _children === null
      ) {
        return [];
      }
      if (typeof _children !== "object") {
        throw new Error("Table children must be Column");
      }
      if (!Array.isArray(_children)) {
        if (_children.type === Column) {
          const result: ColumnProps<T> = {
            ...(_children.props as any),
            child: _children,
          };

          return [result];
        }

        if (_children.type === Fragment) {
          return getChildren((_children.props as any)?.children);
        }
      }
      return _children?.flatMap((child: ReactNode) => {
        return getChildren(child);
      });
    }

    const mappedChildren = getChildren(children);

    return mappedChildren;
  }, [children]);

  const list = useMemo(() => {
    let result = data || [];
    if (orderBy) {
      const sorter = columns.find(({ dataIndex }) => {
        return dataIndex === orderBy;
      })?.sorter;
      result = [...(data || [])].sort(
        (a, b) =>
          (order === "ascending" ? sorter?.(a, b) : sorter?.(b, a)) || 0,
      );
    }

    return result;
  }, [orderBy, data, order, columns]);

  const onToggleSearchBar = () => {
    setShowSearchBar((prev) => {
      return !prev;
    });
    searchBarToggle?.();
  };

  useLayoutEffect(() => {
    let withOutWidthNum = 0;
    const columnsWidth = columns.reduce((prev, { width }) => {
      return prev + (width || 0);
    }, 0);

    const remainWidth = totalWidth - (columnsWidth + SCROLL_BAR + SEARCH_ICON);

    columns.forEach(({ width }) => {
      if (!width) {
        withOutWidthNum += 1;
      }
    });
    if (withOutWidthNum) {
      setColWidth(remainWidth / withOutWidthNum);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [totalWidth]);

  const searchIconWidth = onCheckedRows ? ROW_SELECTION : SEARCH_ICON;

  const isSearchAvailable = columns.find(({ renderFilter }) => renderFilter);

  const onOrderChange = ({ dataIndex }: { dataIndex: OrderBy }) => {
    setOrder(
      dataIndex === orderBy
        ? order === "ascending"
          ? "descending"
          : order === "descending"
          ? undefined
          : "ascending"
        : "ascending",
    );
    setOrderBy(
      dataIndex === orderBy && order === "descending" ? undefined : dataIndex,
    );
  };

  const handleCheckRow = ({ rowId }: { rowId: T[keyof T] }) => {
    const currentRow = checkedRows.find((item) => {
      return rowKey && item[rowKey] === rowId;
    });

    if (currentRow) {
      const filtered = checkedRows.filter((item) => {
        return rowKey && item[rowKey] !== rowId;
      });
      setCheckRows(filtered);
      return;
    }

    const selectedRow = (data || []).find((item) => {
      return rowKey && item[rowKey] === rowId;
    });

    if (selectedRow) {
      setCheckRows((prev) => {
        return [...prev, selectedRow];
      });
    }
  };

  const handleOnSelectRow = (value: T) => {
    setSelectedRow(value);
    onSelectRow?.(value);
  };

  const onCheckAllRows = () => {
    if (!rowKey) return;
    setAllRowsChecked((prev) => !prev);
    if (data) {
      setCheckRows(data);
    }
    if (isAllRowsChecked) {
      setCheckRows([]);
    }
  };

  useEffect(() => {
    onCheckedRows?.(checkedRows);
    if (checkedRows.length === 0) {
      setAllRowsChecked(false);
      return;
    }
    if (checkedRows.length === data?.length) {
      setAllRowsChecked(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, checkedRows]);

  const rowVirtualizer = useVirtual({
    parentRef: tableContainerRef,
    size: list.length,
    overscan: 20,
  });

  const { virtualItems: virtualRows, totalSize } = rowVirtualizer;
  const paddingTop = virtualRows.length > 0 ? virtualRows?.[0]?.start || 0 : 0;
  const paddingBottom =
    virtualRows.length > 0
      ? totalSize - (virtualRows?.[virtualRows.length - 1]?.end || 0)
      : 0;

  return (
    <div
      style={{
        flex: 1,
        width: "100%",
        height: "100%",
        overflowY: "auto",
      }}
    >
      <Loading size="large" isLoading={isLoading}>
        <TableContext.Provider
          value={{
            handleCheckRow,
            checkedRows,
            isAllRowsChecked,
            onCheckAllRows,
            onOrderChange,
            order,
            orderBy,
            selectedRow: selectedRow,
            onSelectRow: handleOnSelectRow,
          }}
        >
          <div
            style={{ display: "flex", flexDirection: "column", height: "100%" }}
          >
            <View
              onLayout={({
                nativeEvent: {
                  layout: { width },
                },
              }) => {
                setTotalWidth(width || 0);
              }}
            >
              <table className={styles["table"]} role={"table"}>
                <colgroup>
                  <col
                    style={{
                      width: searchIconWidth,
                    }}
                  />
                  {columns.map(({ width, dataIndex }) => {
                    return (
                      <col
                        key={dataIndex as string}
                        style={{ width: width ? width : colWidth }}
                      />
                    );
                  })}
                  <col style={{ width: SCROLL_BAR }} />
                </colgroup>
                <thead
                  className={headerClassName}
                  style={{
                    backgroundColor: Colors.color_primary_1,
                    ...headerStyle,
                  }}
                >
                  <Header
                    filterIcon={filterIcon}
                    isSearchVisible={isSearchVisible}
                    isOnCheckedRowsAvailable={Boolean(onCheckedRows)}
                    data={data || []}
                    onToggleSearchBar={isSearchAvailable && onToggleSearchBar}
                  >
                    {children}
                  </Header>
                  {isSearchAvailable ? (
                    <SearchBar
                      clearFilterIcon={clearFilterIcon}
                      searchBarStyle={searchBarStyle}
                      searchBarClassName={searchBarClassName}
                      columns={columns}
                      data={data || []}
                      isSearchVisible={isSearchVisible}
                      isOnCheckedRowsAvailable={Boolean(onCheckedRows)}
                    />
                  ) : null}
                </thead>
              </table>
            </View>
            <ScrollView ref={tableContainerRef} style={{ flex: 1 }}>
              <table className={styles["table"]} role={"table"}>
                <colgroup>
                  <col style={{ width: searchIconWidth }} />
                  {columns.map(({ width, dataIndex }) => {
                    return (
                      <col
                        key={dataIndex as string}
                        style={{ width: width ? width : colWidth }}
                      />
                    );
                  })}
                </colgroup>

                <tbody>
                  {paddingTop > 0 && (
                    <tr>
                      <td style={{ height: `${paddingTop}px` }} />
                    </tr>
                  )}
                  {virtualRows.map((virtualRow, index) => {
                    const row = list[virtualRow.index];
                    return (
                      <RowContainer
                        // onSelectRow={handleOnSelectRow}
                        key={index}
                        isOnCheckedRowsAvailable={Boolean(onCheckedRows)}
                        rowKey={rowKey}
                        rowData={row}
                        data={data || []}
                        index={index}
                        columns={columns}
                      />
                    );
                  })}
                  {paddingBottom > 0 && (
                    <tr>
                      <td style={{ height: `${paddingBottom}px` }} />
                    </tr>
                  )}
                </tbody>
              </table>
            </ScrollView>
          </div>
        </TableContext.Provider>
      </Loading>
    </div>
  );
};

Table.Column = Column;
export { Table };
