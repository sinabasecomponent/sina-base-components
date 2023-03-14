/// <reference types="react" />
export interface TreeDataProps {
    title: string;
    id: string;
    isActive?: boolean;
    children?: TreeDataProps[];
}
export interface TreeProps {
    data: TreeDataProps[];
    activeLeaf?: string | null;
    onSelectLeaf?: (id: string) => void;
}
declare const Tree: ({ data, activeLeaf, onSelectLeaf }: TreeProps) => JSX.Element;
export { Tree };
//# sourceMappingURL=index.d.ts.map