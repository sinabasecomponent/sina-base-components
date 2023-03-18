import React from 'react';
import { Colors } from '../../colors';
export interface LoadingProps {
    children?: React.ReactNode;
    isLoading?: boolean;
    spinnerColor?: Colors;
    size?: 'small' | 'medium' | 'large';
    style?: React.CSSProperties;
}
declare const Loading: ({ children, isLoading, spinnerColor, size, style, }: LoadingProps) => JSX.Element;
export { Loading };
