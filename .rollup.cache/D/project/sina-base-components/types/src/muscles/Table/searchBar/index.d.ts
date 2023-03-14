/// <reference types="react" />
import { ColumnProps } from "../column";
interface SearchBarProps<T extends Record<string, any>> {
    isSearchVisible: boolean;
    columns: ColumnProps<T>[];
    data: T[];
    searchBarStyle?: React.CSSProperties;
    isOnCheckedRowsAvailable: boolean;
    onResetFilters?: () => void;
    searchBarClassName?: string;
    clearFilterIcon?: React.ReactNode;
}
declare const SearchBar: <T extends Record<string, any>>({ isSearchVisible, columns, data, searchBarStyle, isOnCheckedRowsAvailable, onResetFilters, searchBarClassName, clearFilterIcon, }: SearchBarProps<T>) => JSX.Element;
export { SearchBar };
//# sourceMappingURL=index.d.ts.map