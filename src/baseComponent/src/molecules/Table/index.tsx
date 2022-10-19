import { Fragment, ReactNode, useMemo } from "react";
import { Column, ColumnProps } from "./column";
import { RowContainer } from "./rowContainer";

export interface TableProps<T extends Object> {
  data: T[];
  children: ReactNode;
}
const Table = <T extends Object>({ children, data }: TableProps<T>) => {
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

  return (
    <table style={{ border: "1px solid black" }} role={"table"}>
      <thead>
        <tr>{children}</tr>
      </thead>
      {data.map((row, index) => {
        return (
          <RowContainer
            rowData={row}
            data={data}
            index={index}
            columns={columns}
          />
        );
      })}
    </table>
  );
};

Table.Column = Column;

export { Table };
