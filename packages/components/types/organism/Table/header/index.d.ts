import React from "react";
import { ColumnType } from "../column";
interface HeaderProps<T extends object> {
    onToggleSearchBar?: () => void;
    isOnCheckedRowsAvailable: boolean;
    isSearchVisible: boolean;
    filterIcon?: React.ReactNode;
    columns: ColumnType<T>[];
    isIndeterminate: boolean;
}
declare const Header: <T extends object>({ onToggleSearchBar, isOnCheckedRowsAvailable, isSearchVisible, filterIcon, columns, isIndeterminate, }: HeaderProps<T>) => JSX.Element;
export { Header };
