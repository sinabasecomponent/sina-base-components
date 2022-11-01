import { useContext } from "react";
import { CheckBox } from "../../checkbox";
import { Cell } from "../cell";
import { ColumnProps } from "../column";
import { TableContext } from "../context";
import { Row } from "../row";

interface RowContainer<T extends Object> {
  rowData: T;
  data: T[];
  columns: ColumnProps<T>[];
  index: number;
  rowKey?: keyof T;
}

const RowContainer = <T extends Object>({
  rowData,
  columns,
  data,
  index: rowIndex,
  rowKey,
}: RowContainer<T>) => {
  const { checkedRows, addRow } = useContext(TableContext);

  const isChecked = checkedRows.find(
    (item) => rowKey && item?.[rowKey] === rowData[rowKey],
  );

  console.log({ isChecked });

  return (
    <Row index={rowIndex} isChecked={isChecked}>
      <td
      // style={{
      //   ...(selectedRow === rowIndex && {
      //     borderInlineStart: `5px solid ${Colors.main_cyan}`,
      //   }),
      // }}
      >
        <div style={{ paddingInlineStart: 8 }}>
          <CheckBox
            onChange={() => {
              rowKey && addRow({ rowId: rowData[rowKey] });
            }}
            checked={isChecked}
          />
        </div>
      </td>
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
