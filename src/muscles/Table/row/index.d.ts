/// <reference types="react" />
interface RowProps extends React.HTMLAttributes<HTMLTableRowElement> {
    children?: React.ReactNode;
    isExpanded?: boolean;
    testID?: string;
    index: number;
    isChecked: boolean;
    isSelected: boolean;
    isOnCheckedRowsAvailable: boolean;
}
declare const Row: ({ isChecked, className, index, testID, isOnCheckedRowsAvailable, isSelected, ...rest }: RowProps) => JSX.Element;
export { Row };
