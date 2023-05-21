/// <reference types="react" />
export declare type Value = string | number | null | undefined;
export declare type Default = {
    value?: string | number;
    label?: React.ReactNode;
};
export interface SelectProps<T extends Record<string, unknown> = Default> {
    data: T[];
    value?: Value;
    valueExtractor?: (item: T) => Value;
    labelExtractor?: (item: T) => React.ReactNode;
    onChange?: (item: Value) => void;
    onClear?: () => void;
    disabled?: boolean;
}
export declare type OptionValue = {
    value: Value;
    label: React.ReactNode;
};
export interface OptionProps {
    isSelected: boolean;
    children: React.ReactNode;
    value: OptionValue;
    onClick: (value: OptionValue) => void;
}
