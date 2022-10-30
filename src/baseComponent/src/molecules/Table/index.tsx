import {
  Fragment,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { ScrollView, View } from "reactjs-view";
import { Column, ColumnProps } from "./column";
import { Order, OrderBy, TableContext } from "./context";
import { Header } from "./header";
import { RowContainer } from "./rowContainer";
import { SearchBar } from "./searchBar";
import { useStyles } from "./style";

export const SEARCH_ICON = 42;
export const SCROLL_BAR = 10;
export const DEFAULT_ALIGN = "center";

export interface TableProps<T> {
  data: T[];
  children: ReactNode;
  onSelectedRow: (value: { index: number }) => void;
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
  }, [orderBy, data, order, columns]);

  useEffect(() => {
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
            <Header onToggleSearchBar={onToggleSearchBar}>{children}</Header>
            <SearchBar
              columns={columns}
              data={data}
              isSearchVisible={isSearchVisible}
              onToggleSearchBar={onToggleSearchBar}
            />
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
  const [selectedRow, onSelectRow] = useState<number | undefined>(undefined);

  const onRowClick = (value: { index: number }) => {
    onSelectRow(value.index);
    props.onSelectedRow({ index: value.index });
  };

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
    <TableContext.Provider
      value={{
        onOrderChange,
        order,
        orderBy,
        onSelectRow: onRowClick,
        selectedRow: selectedRow,
      }}
    >
      <Table {...props} />
    </TableContext.Provider>
  );
};

TableWrapper.Column = Column;
export { TableWrapper as Table };
