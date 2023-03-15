/// <reference types="react" />
import { TabPane } from "./TabPane";
export interface TabsProps {
    children: React.ReactNode;
    activeTab?: string;
    onChange?: (id: string) => void;
    onClose?: (id: string) => void;
    className?: string;
    TabsTitle?: string | React.ReactNode;
}
declare const Tabs: {
    ({ children, activeTab: activeTabProp, onChange, onClose, className, TabsTitle, }: TabsProps): JSX.Element;
    TabPane: typeof TabPane;
};
export { Tabs };
