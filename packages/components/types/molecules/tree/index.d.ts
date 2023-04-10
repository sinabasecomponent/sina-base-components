/// <reference types="react" />
export interface TreeBasicType<T> {
    title: string;
    id: string;
    parentId?: string | null;
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
    defaultSeletedItem?: string;
}
declare const Tree: <T extends TreeBasicType<T>>({ data, onSelectItem, onLoadData, activeItemId, defaultSeletedItem, }: TreeProps<T>) => JSX.Element;
export { Tree };
