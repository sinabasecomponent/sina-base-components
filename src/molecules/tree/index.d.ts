/// <reference types="react" />
export interface TreeBasicType<T> {
    title: string;
    id: string;
    children?: T[];
}
export declare type OnSelectItemProps<T> = {
    data: T;
    level: number;
};
export declare type OnLoadData<T> = (value: OnSelectItemProps<T>) => Promise<void>;
export interface TreeProps<T> {
    data: T[];
    onSelectItem?: (value: OnSelectItemProps<T>) => void;
    onLoadData?: (value: OnSelectItemProps<T>) => Promise<void>;
    activeItemId?: string;
}
declare const Tree: <T extends TreeBasicType<T>>({ data, onSelectItem, onLoadData, activeItemId, }: TreeProps<T>) => JSX.Element;
export { Tree };
