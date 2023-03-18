/// <reference types="react" />
import { Colors } from '../../../colors';
interface ItemProps {
    title?: string;
    arrowDirection?: 'up' | 'down';
    level: number;
    backgroundColor: Colors;
    isActive?: boolean;
    textColor: Colors;
    fontSize?: number;
    isLoading: boolean;
    onClick?: () => void;
}
declare const Item: ({ title, onClick, arrowDirection, level, backgroundColor, isActive, textColor, fontSize, isLoading, }: ItemProps) => JSX.Element;
export { Item };
