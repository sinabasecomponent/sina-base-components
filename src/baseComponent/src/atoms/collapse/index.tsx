import React, { useState } from "react";
import { CollapseContext } from "./context";
import { Panel } from "./panel";

export interface CollapseProps {
  children: React.ReactNode;
  accordion?: boolean;
  onChange?: (value: {
    activePanelsKey: string[];
    clickedPanelKey: string;
  }) => void;
  activeKey?: string[];
}

const Collapse = ({
  children,
  accordion,
  onChange,
  activeKey,
}: CollapseProps) => {
  const [openedPanels, setOpenPanel] = useState<string[]>([]);

  let _openedPanels: string[] = [];

  if (activeKey) {
    _openedPanels = activeKey;
  } else {
    _openedPanels = openedPanels;
  }

  const handleOnClickPanel = (value: string) => {
    if (activeKey) {
      onChange?.({ activePanelsKey: [value], clickedPanelKey: value });
      return;
    }
    const alreadyExist = openedPanels.find((item) => item === value);
    let _openedPanels: string[] = [];

    if (!accordion) {
      if (alreadyExist) {
        _openedPanels = openedPanels.filter((item) => item !== alreadyExist);
        setOpenPanel(_openedPanels);
      } else if (!alreadyExist) {
        _openedPanels = [...openedPanels, value];
        setOpenPanel(_openedPanels);
      }
    } else if (accordion) {
      _openedPanels = alreadyExist ? [] : [value];
      setOpenPanel(_openedPanels);
    }
    onChange?.({ activePanelsKey: _openedPanels, clickedPanelKey: value });
  };

  return (
    <CollapseContext.Provider
      value={{ onClickPanel: handleOnClickPanel, openedPanels: _openedPanels }}
    >
      <div>{children}</div>
    </CollapseContext.Provider>
  );
};

Collapse.Panel = Panel;
export { Collapse };
