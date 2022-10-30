import { useContext } from "react";
import { Colors } from "../../../colors";
import { Cell } from "../cell";
import { ColumnProps } from "../column";
import { TableContext } from "../context";
import { Row } from "../row";

interface RowContainer<T extends Object> {
  rowData: T;
  data: T[];
  columns: ColumnProps<T>[];
  index: number;
}

const RowContainer = <T extends Object>({
  rowData,
  columns,
  data,
  index: rowIndex,
}: RowContainer<T>) => {
  const { selectedRow } = useContext(TableContext);
  return (
    <Row index={rowIndex}>
      <td
        style={{
          ...(selectedRow === rowIndex && {
            borderInlineStart: `5px solid ${Colors.main_cyan}`,
          }),
        }}
      ></td>
      {columns.map(({ dataIndex, render, align }, index) => {
        const cell = rowData[dataIndex as keyof typeof rowData];
        return (
          <Cell key={index} align={align}>
            <>
              {render
                ? render({
                    value: cell,
                    index: rowIndex,
                    row: rowData,
                    data: data,
                  })
                : cell}
            </>
          </Cell>
        );
      })}
    </Row>
  );
};

export { RowContainer };
