import React, { useEffect, useState } from "react";
import { CollapseContext } from "./context";
import { Panel } from "./panel";

export interface CollapseProps {
  children: React.ReactNode;
  accordion?: boolean;
  onChange?: (value: string[] | null) => void;
  activeKey?: string[];
}

const Collapse = ({
  children,
  accordion,
  onChange,
  activeKey,
}: CollapseProps) => {
  const [openedPanels, setOpenPanel] = useState<string[]>([]);

  useEffect(() => {
    activeKey && setOpenPanel(activeKey);
  }, [activeKey]);

  useEffect(() => {
    onChange?.(openedPanels);
  }, [openedPanels]);

  const handleOnClickPanel = (value: string) => {
    if (activeKey) {
      onChange?.([value]);
      return;
    }
    const alreadyExist = openedPanels.find((item) => item === value);
    if (!accordion) {
      if (alreadyExist) {
        const newOpenedPanels = openedPanels.filter(
          (item) => item !== alreadyExist,
        );
        setOpenPanel(newOpenedPanels);
      } else if (!alreadyExist) {
        setOpenPanel([...openedPanels, value]);
      }
    } else if (accordion) {
      const newState = alreadyExist ? [] : [value];
      setOpenPanel(newState);
    }
  };

  return (
    <CollapseContext.Provider
      value={{ onClickPanel: handleOnClickPanel, openPanels: openedPanels }}
    >
      <div>{children}</div>
    </CollapseContext.Provider>
  );
};

Collapse.Panel = Panel;
export { Collapse };
