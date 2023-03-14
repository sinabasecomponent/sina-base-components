import { PropsWithChildren, ReactNode } from "react";
export interface DropDownProps<T> {
    placeholder: string | ReactNode;
    options: {
        value: T;
        label: string;
    }[];
    onChange?: (value: T) => void;
    className?: string;
}
declare function DropDown<T>({ placeholder, options, onChange, className, }: PropsWithChildren<DropDownProps<T>>): JSX.Element;
export { DropDown };
//# sourceMappingURL=index.d.ts.map