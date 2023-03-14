import { ReactNode } from "react";
import { ColumnProps } from "./column";
export declare const SEARCH_ICON = 32;
export declare const ROW_SELECTION = 62;
export declare const SCROLL_BAR = 10;
export declare const DEFAULT_ALIGN = "center";
export interface TableProps<T> {
    data?: T[];
    children?: ReactNode;
    rowKey?: keyof T;
    onCheckedRows?: (value: T[]) => void;
    headerStyle?: React.CSSProperties;
    headerClassName?: string;
    searchBarClassName?: string;
    searchBarStyle?: React.CSSProperties;
    searchBarToggle?: () => void;
    filterIcon?: React.ReactNode;
    clearFilterIcon?: React.ReactNode;
    isLoading?: boolean;
    onSelectRow?: (value: T) => void;
}
declare const Table: {
    <T extends object>({ children, data, onCheckedRows, rowKey, headerStyle, headerClassName, searchBarClassName, searchBarToggle, searchBarStyle, filterIcon, clearFilterIcon, isLoading, onSelectRow, }: TableProps<T>): JSX.Element;
    Column: <T_1 extends Record<string, any>>({ children, dataIndex, sorter, style, align, }: ColumnProps<T_1, T_1, keyof T_1>) => JSX.Element;
};
export { Table };
//# sourceMappingURL=index.d.ts.map