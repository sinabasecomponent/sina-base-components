import { ReactNode, useContext } from "react";
import { DEFAULT_ALIGN } from "..";
import { BaseIcon, Text } from "../../../atoms";
import { Colors } from "../../../colors";
import { TableContext } from "../context";

export interface ColumnProps<
  T extends Record<string, any>,
  TChild extends T = T,
  TIndex extends keyof T = keyof T,
> {
  dataIndex: TIndex;
  children?: ReactNode;
  onPress?: () => void;
  className?: string;
  sorter?: (a: T | TChild, b: T | TChild) => number;
  style?: React.CSSProperties;
  contentStyle?: React.CSSProperties;
  sorterIconSize?: number;
  width?: number;
  align?: "start" | "center" | "end";
  renderFilter?: (data: { data: T[] }) => ReactNode;
  render?: (
    data:
      | {
          value: T[TIndex];
          row: T;
          index: number;
          data: T[];
          isTree?: false;
          parentRow?: undefined;
        }
      | {
          value: TChild[TIndex];
          row: TChild;
          isTree: true;
          parentRow: T;
          index: number;
          data: T[];
        },
  ) => ReactNode;
  testID?: string;
}

const Column = <T extends Record<string, any>>({
  children,
  dataIndex,
  sorter,
  style,
  align = DEFAULT_ALIGN,
}: ColumnProps<T>) => {
  const { onOrderChange, order, orderBy } = useContext(TableContext);

  const isAscending = orderBy === dataIndex && order === "ascending";
  const isDescending = orderBy === dataIndex && order === "descending";

  const onSort = () => {
    // onPress?.();
    if (sorter) {
      onOrderChange({ dataIndex });
    }
  };

  return (
    <th style={{ ...style, height: 45, padding: 0 }}>
      <div
        style={{
          height: "100%",
          alignItems: "center",
          display: "flex",
          cursor: sorter ? "pointer" : "default",
          justifyContent:
            align === "center"
              ? "center"
              : align === "start"
              ? "flex-start"
              : "flex-end",
        }}
        onClick={onSort}
      >
        {typeof children !== "object" ? (
          <Text theme="Medium" color={Colors.white}>
            {children}
          </Text>
        ) : (
          children
        )}
        {sorter ? (
          isDescending ? (
            <BaseIcon size={20} name={"Table-_-Sort-Icon_A-to-Z"} />
          ) : isAscending ? (
            <BaseIcon size={20} name="Table-_-Sort-Icon_Z-to-A" />
          ) : (
            <BaseIcon size={20} name="Table-_-Sort-Icon_OFF" />
          )
        ) : null}
      </div>
    </th>
  );
};

export { Column };
