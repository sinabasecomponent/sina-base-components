/// <reference types="react" />
import { ColumnType } from "../column";
interface SearchBarProps<T> {
    isSearchVisible: boolean;
    columns: ColumnType<T>[];
    data: T[];
    searchBarStyle?: React.CSSProperties;
    isOnCheckedRowsAvailable: boolean;
    onResetFilters?: () => void;
    searchBarClassName?: string;
    clearFilterIcon?: React.ReactNode;
    isIndeterminate: boolean;
}
declare const SearchBar: <T extends Record<string, unknown>>({ isSearchVisible, columns, data, searchBarStyle, isOnCheckedRowsAvailable, onResetFilters, searchBarClassName, clearFilterIcon, isIndeterminate, }: SearchBarProps<T>) => JSX.Element;
export { SearchBar };
