/// <reference types="react" />
declare const Clear: ({ handleOnClear, whatVisible, isVisible, }: {
    handleOnClear: () => void;
    whatVisible: "cross" | "arrow" | null;
    isVisible: boolean;
}) => JSX.Element;
export { Clear };
