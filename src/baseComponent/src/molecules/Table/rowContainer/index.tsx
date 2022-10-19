import { Cell } from "../cell";
import { ColumnProps } from "../column";
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
  return (
    <Row>
      {columns.map(({ dataIndex, render }) => {
        const cell = rowData[dataIndex as keyof typeof rowData];
        return (
          <Cell>
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
