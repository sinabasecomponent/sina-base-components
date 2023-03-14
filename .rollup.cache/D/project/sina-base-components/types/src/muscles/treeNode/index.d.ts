/// <reference types="react" />
import { TreeDataProps } from "../../molecules/tree";
export declare const isInclude: (a: string, b: string) => boolean;
export interface TreeNodeProps {
    data: TreeDataProps[];
    onSelectShelf?: (id: string) => void;
    title: string;
}
declare const TreeNode: ({ data, onSelectShelf, title }: TreeNodeProps) => JSX.Element;
export { TreeNode };
//# sourceMappingURL=index.d.ts.map