/// <reference types="react" />
import { ColumnProps } from "../column";
interface RowContainer<T extends Object> {
    rowData: T;
    data: T[];
    columns: ColumnProps<T>[];
    index: number;
    rowKey?: keyof T;
    isOnCheckedRowsAvailable: boolean;
}
declare const RowContainer: <T extends Object>({ rowData, columns, data, index: rowIndex, rowKey, isOnCheckedRowsAvailable, }: RowContainer<T>) => JSX.Element;
export { RowContainer };
