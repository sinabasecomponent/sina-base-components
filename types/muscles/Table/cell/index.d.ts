import { ReactNode } from "react";
export interface CellProps extends Omit<React.TdHTMLAttributes<HTMLTableCellElement>, "align"> {
    children?: ReactNode;
    align?: "start" | "center" | "end";
    onPress?: () => void;
}
declare const Cell: ({ width, children, onPress, align, ...rest }: CellProps) => JSX.Element;
export { Cell };
