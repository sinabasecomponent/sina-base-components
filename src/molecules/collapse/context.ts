import { createContext } from "react";

interface CollapseContextProps {
  onClickPanel: (value: string) => void;
  openedPanels: string[];
}

const defaultValue: CollapseContextProps = {
  onClickPanel: () => ({}),
  openedPanels: [],
};

const CollapseContext = createContext(defaultValue);

export { CollapseContext };
