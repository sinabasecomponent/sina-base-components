import { createContext } from "react";

interface CollapseContextProps {
  onClickPanel: (value: string) => void;
  openPanels: string[] | string | null;
}

const defaultValue: CollapseContextProps = {
  onClickPanel: () => ({}),
  openPanels: null,
};

const CollapseContext = createContext(defaultValue);

export { CollapseContext };
