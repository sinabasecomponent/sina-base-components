import { createContext } from "react";

export type Order = undefined | "ascending" | "descending";
export type OrderBy = undefined | string | number | symbol;
interface TableContextProps {
  order: Order;
  orderBy: OrderBy;
  onOrderChange: (data: { dataIndex: OrderBy }) => void;
  checkedRows: any[];
  addRow: (value: { rowId: any }) => void;
  isAllRowsChecked: boolean;
  onCheckAllRows: () => void;
}

export const TableContext = createContext<TableContextProps>({
  order: undefined,
  orderBy: undefined,
  onOrderChange: () => ({}),
  checkedRows: [],
  addRow: () => ({}),
  isAllRowsChecked: false,
  onCheckAllRows: () => ({}),
});
