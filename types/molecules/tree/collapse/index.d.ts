/// <reference types="react" />
import { Colors } from "../../../colors";
declare const Collapse: ({ title, children, level, backgroundColor, textColor, }: {
    title: string;
    children: React.ReactNode;
    level: number;
    backgroundColor: Colors;
    textColor: Colors;
}) => JSX.Element;
export { Collapse };
