import {
  Fragment,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { ScrollView, View } from "reactjs-view";
import { BaseIcon } from "../../atoms";
import { Colors } from "../../colors";
import { Column, ColumnProps } from "./column";
import { Order, OrderBy, TableContext } from "./context";
import { RowContainer } from "./rowContainer";
import { useStyles } from "./style";

const SEARCH_ICON = 42;
const SCROLL_BAR = 10;
export const DEFAULT_ALIGN = "center";

export interface TableProps<T> {
  data: T[];
  children: ReactNode;
}
const Table = <T extends Object>({ children, data }: TableProps<T>) => {
  const [totalWidth, setTotalWidth] = useState(0);
  const [isSearchVisible, setShowSearchBar] = useState(false);
  const { order, orderBy } = useContext(TableContext);
  const [colWidth, setColWidth] = useState(0);

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

  const classes = useStyles();

  const onToggleSearchBar = () => {
    setShowSearchBar((prev) => {
      return !prev;
    });
  };

  const list = useMemo(() => {
    let result = data || [];
    if (orderBy) {
      const sorter = columns.find(({ dataIndex }) => {
        return dataIndex === orderBy;
      })?.sorter;
      result = [...data].sort(
        (a, b) =>
          (order === "ascending" ? sorter?.(a, b) : sorter?.(b, a)) || 0,
      );
    }

    return result;
  }, [orderBy, data, order]);

  // const columnsWidth = columns.reduce((prev, { width }) => {
  //   return prev + (width || 0);
  // }, 0);

  // const remainWidth = totalWidth - (columnsWidth + SCROLL_BAR + SEARCH_ICON);
  // console.log({ remainWidth });

  useEffect(() => {
    let x = 0;
    const columnsWidth = columns.reduce((prev, { width }) => {
      return prev + (width || 0);
    }, 0);

    const remainWidth = totalWidth - (columnsWidth + SCROLL_BAR + SEARCH_ICON);

    columns.forEach(({ width }) => {
      if (!width) {
        x += 1;
      }
    });
    if (x) {
      setColWidth(remainWidth / x);
    }
  }, [totalWidth]);

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <View
        onLayout={({
          nativeEvent: {
            layout: { width },
          },
        }) => {
          setTotalWidth(width || 0);
        }}
      >
        <table className={classes.table} role={"table"}>
          <colgroup>
            <col style={{ width: SEARCH_ICON }} />
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
          <thead className={classes.tableHeader}>
            <tr>
              <th>
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
                    name="Table_Search-Icon"
                    size={16}
                  />
                </div>
              </th>
              {children}
              <th />
            </tr>
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
                  <th
                    style={{ textAlign: align ? align : DEFAULT_ALIGN }}
                    key={index}
                  >
                    {renderFilter ? renderFilter({ data }) : null}
                  </th>
                );
              })}
              <th />
            </tr>
          </thead>
        </table>
      </View>
      <ScrollView style={{ flex: 1 }}>
        <table className={classes.table} role={"table"}>
          <colgroup>
            <col style={{ width: SEARCH_ICON }} />
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
            {list.map((row, index) => {
              return (
                <RowContainer
                  key={index}
                  rowData={row}
                  data={data}
                  index={index}
                  columns={columns}
                />
              );
            })}
          </tbody>
        </table>
      </ScrollView>
    </div>
  );
};

const TableWrapper = <T extends Object>(props: TableProps<T>) => {
  const [orderBy, setOrderBy] = useState<OrderBy>(undefined);
  const [order, setOrder] = useState<Order>(undefined);
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

  return (
    <TableContext.Provider value={{ onOrderChange, order, orderBy }}>
      <Table {...props} />
    </TableContext.Provider>
  );
};

TableWrapper.Column = Column;
export { TableWrapper as Table };
