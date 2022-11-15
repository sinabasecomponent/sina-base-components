import { useContext } from "react";
import { Colors } from "../../../colors";
import { CheckBox } from "../../../molecules/checkbox";
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
  isOnCheckedRowsAvailable: boolean;
}

const RowContainer = <T extends Object>({
  rowData,
  columns,
  data,
  index: rowIndex,
  rowKey,
  isOnCheckedRowsAvailable,
}: RowContainer<T>) => {
  const { checkedRows, handleCheckRow, selectedRow, onSelectRow } =
    useContext(TableContext);

  const isChecked = checkedRows.find(
    (item) => rowKey && item?.[rowKey] === rowData[rowKey],
  );

  const handleOnSelectSingleRow = () => {
    if (isOnCheckedRowsAvailable) return;
    onSelectRow?.(rowData);
  };

  return (
    <Row
      isOnCheckedRowsAvailable={isOnCheckedRowsAvailable}
      isSelected={
        rowKey && selectedRow && selectedRow[rowKey] === rowData[rowKey]
      }
      onClick={handleOnSelectSingleRow}
      index={rowIndex}
      isChecked={isChecked}
    >
      <td style={{ height: "inherit" }}>
        {rowKey && selectedRow && selectedRow[rowKey] === rowData[rowKey] ? (
          <div
            style={{
              position: "relative",
              height: "100%",
              borderInlineStart: `5px solid ${Colors.color_secondary_1}`,
            }}
          />
        ) : null}
        {isOnCheckedRowsAvailable ? (
          <div style={{ paddingInlineStart: 8 }}>
            <CheckBox
              onChange={() => {
                rowKey && handleCheckRow({ rowId: rowData[rowKey] });
              }}
              checked={isChecked}
            />
          </div>
        ) : null}
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
