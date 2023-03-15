/// <reference types="react" />
import { Colors } from "../../../colors";
interface ItemProps {
    title: string;
    onClick?: () => void;
    arrowDirection?: "up" | "down";
    level?: number;
    backgroundColor: Colors;
    isActiveLeaf?: boolean;
    textColor: Colors;
    fontSize?: number;
}
declare const Item: ({ title, onClick, arrowDirection, level, backgroundColor, isActiveLeaf, textColor, fontSize, }: ItemProps) => JSX.Element;
export { Item };
