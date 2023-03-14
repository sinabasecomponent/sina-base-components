import React from "react";
export interface CollapseProps {
    children: React.ReactNode;
    accordion?: boolean;
    onChange?: (value: {
        activePanelsKey: string[];
        clickedPanelKey: string;
    }) => void;
    activeKey?: string[];
}
declare const Collapse: {
    ({ children, accordion, onChange, activeKey, }: CollapseProps): JSX.Element;
    Panel: ({ children, title, id }: import("./panel").PanelProps) => JSX.Element;
};
export { Collapse };
//# sourceMappingURL=index.d.ts.map