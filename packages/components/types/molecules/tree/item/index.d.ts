/// <reference types="react" />
interface ItemProps {
    title?: string;
    arrowDirection?: "up" | "down";
    level: number;
    backgroundColor: string;
    isActive?: boolean;
    textColor: string;
    fontSize?: number;
    isLoading: boolean;
    onClick?: () => void;
}
declare const Item: ({ title, onClick, arrowDirection, level, backgroundColor, isActive, textColor, fontSize, isLoading, }: ItemProps) => JSX.Element;
export { Item };
