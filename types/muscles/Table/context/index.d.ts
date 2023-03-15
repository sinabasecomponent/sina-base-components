/// <reference types="react" />
export declare type Order = undefined | "ascending" | "descending";
export declare type OrderBy = undefined | string | number | symbol;
interface TableContextProps {
    order: Order;
    orderBy: OrderBy;
    onOrderChange: (data: {
        dataIndex: OrderBy;
    }) => void;
    checkedRows: any[];
    handleCheckRow: (value: {
        rowId: any;
    }) => void;
    isAllRowsChecked: boolean;
    onCheckAllRows: () => void;
    onSelectRow: (value: any) => void;
    selectedRow: any;
}
export declare const TableContext: import("react").Context<TableContextProps>;
export {};
