import { ReactNode } from "react";
export interface ColumnProps<T extends Record<string, any>, TChild extends T = T, TIndex extends keyof T = keyof T> {
    dataIndex: TIndex;
    children?: ReactNode;
    onPress?: () => void;
    className?: string;
    sorter?: (a: T | TChild, b: T | TChild) => number;
    style?: React.CSSProperties;
    contentStyle?: React.CSSProperties;
    sorterIconSize?: number;
    width?: number;
    align?: "start" | "center" | "end";
    renderFilter?: (data: {
        data: T[];
    }) => ReactNode;
    render?: (data: {
        value: T[TIndex];
        row: T;
        index: number;
        data: T[];
        isTree?: false;
        parentRow?: undefined;
    } | {
        value: TChild[TIndex];
        row: TChild;
        isTree: true;
        parentRow: T;
        index: number;
        data: T[];
    }) => ReactNode;
    testID?: string;
}
declare const Column: <T extends Record<string, any>>({ children, dataIndex, sorter, style, align, }: ColumnProps<T, T, keyof T>) => JSX.Element;
export { Column };
