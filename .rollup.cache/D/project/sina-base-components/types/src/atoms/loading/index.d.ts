import React from "react";
import { Colors } from "../../colors";
export interface LoadingProps {
    children?: React.ReactNode;
    isLoading?: boolean;
    spinnerColor?: Colors;
    size?: "small" | "medium" | "large";
}
declare const Loading: ({ children, isLoading, spinnerColor, size }: LoadingProps) => JSX.Element;
export { Loading };
//# sourceMappingURL=index.d.ts.map