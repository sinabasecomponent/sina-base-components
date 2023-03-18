/// <reference types="react" />
export declare type Order = undefined | 'ascending' | 'descending';
export declare type OrderBy = undefined | string | number | symbol;
interface TableContextProps {
    order: Order;
    orderBy: OrderBy;
    onOrderChange: (data: {
        dataIndex: OrderBy;
    }) => void;
    isAllRowsChecked: boolean;
    onCheckAllRows: () => void;
    onSelectRow: (value: unknown) => void;
    selectedRow: unknown;
}
export declare const TableContext: import("react").Context<TableContextProps>;
export {};
