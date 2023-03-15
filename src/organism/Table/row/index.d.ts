/// <reference types="react" />
interface RowProps extends React.HTMLAttributes<HTMLTableRowElement> {
    children?: React.ReactNode;
    isExpanded?: boolean;
    isChecked: boolean;
    isSelected: boolean;
    isOnCheckedRowsAvailable: boolean;
}
declare const Row: ({ isChecked, isOnCheckedRowsAvailable, isSelected, ...rest }: RowProps) => JSX.Element;
export { Row };
