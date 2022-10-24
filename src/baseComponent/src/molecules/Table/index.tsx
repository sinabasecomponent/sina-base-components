import {
  Fragment,
  ReactNode,
  useContext,
  useMemo,
  useRef,
  useState,
} from "react";
import { BaseIcon } from "../../atoms";
import { Colors } from "../../colors";
import { Column, ColumnProps } from "./column";
import { Order, OrderBy, TableContext } from "./context";
import { RowContainer } from "./rowContainer";
import { useStyles } from "./style";

const SEARCH_ICON = 42;
const SCROLL_BAR = 17;

export interface TableProps<T> {
  data: T[];
  children: ReactNode;
}
const Table = <T extends Object>({ children, data }: TableProps<T>) => {
  const numOfColWithoutWidth = useRef(2);
  const [totalWidth, setTotalWidth] = useState(0);
  const [isSearchVisible, setShowSearchBar] = useState(false);
  const { order, orderBy } = useContext(TableContext);

  const columns = useMemo(() => {
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

  const columnsWidth = columns.reduce((prev, { width }) => {
    return prev + (width || 0);
  }, 0);

  const remainWidth = totalWidth - (columnsWidth + SCROLL_BAR + SEARCH_ICON);
  // columns.forEach(({ width }) => {
  //   if (!width) {
  //     numOfColWithoutWidth.current += 1;
  //   }
  // });

  // useEffect(()=>{

  // },[])

  let colWidth = 0;

  if (numOfColWithoutWidth.current) {
    colWidth = remainWidth / numOfColWithoutWidth.current;
  }

  console.log(numOfColWithoutWidth.current);

  return (
    <>
      <div>
        <table
          ref={(ref) => {
            setTotalWidth(ref?.offsetWidth || 0);
          }}
          className={classes.table}
          role={"table"}
        >
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
              <th style={{ width: 17 }} />
            </tr>
            {/* <tr
            style={{
              display: isSearchVisible ? "table-row" : "none",
            }}
            className={classes.searchBar}
          >
            <td style={{ width: SEARCH_ICON }}>
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
            </td>
            {columns.map(({ renderFilter }, index) => {
              return (
                <td key={index}>
                  {renderFilter ? renderFilter({ data }) : null}
                </td>
              );
            })}
          </tr> */}
          </thead>
        </table>
      </div>
      <div style={{ overflowY: "auto", height: 300 }}>
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
      </div>
    </>
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
