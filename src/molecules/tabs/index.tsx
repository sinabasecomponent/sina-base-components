import classNames from "classnames";
import { Fragment, ReactNode, useEffect, useMemo, useState } from "react";
import { Text } from "../../atoms";
import { Colors } from "../../colors";
import { useHorizontalScroll } from "../../utils/useHorizontalScroll";
import { InternalTabPane } from "./internalTabPane";
import { TabPane, TabPaneProps } from "./TabPane";
import styles from "./tabs.module.scss";

export interface TabsProps {
  children: React.ReactNode;
  activeTab?: string;
  onChange?: (id: string) => void;
  onClose?: (id: string) => void;
  className?: string;
  TabsTitle?: string | React.ReactNode;
}

const Tabs = ({
  children,
  activeTab: activeTabProp,
  onChange,
  onClose,
  className,
  TabsTitle,
}: TabsProps) => {
  const [activeTab, setActiveTab] = useState<string | null>(null);
  const [opendTabs, setOpenedTabs] = useState<string[]>([]);
  const tabListRef = useHorizontalScroll();

  const handleOnChange = (id: string) => {
    onChange?.(id);
    setOpenedTabs((prev) => {
      const alreadyExist = prev.find((item) => item === id);
      if (alreadyExist) return prev;
      return [...prev, id];
    });
    if (activeTabProp) return;
    setActiveTab(id);
  };

  const handleOnClose = (id: string) => {
    onClose?.(id);
  };

  const tabs: TabPaneProps[] = useMemo(() => {
    function getChildren(_children: any): TabPaneProps[] {
      if (!_children) {
        return [];
      }
      if (
        typeof _children === "boolean" ||
        typeof _children === "undefined" ||
        _children === null
      ) {
        return [];
      }
      if (typeof _children !== "object") {
        throw new Error("Tabs children must be TabPane");
      }
      if (!Array.isArray(_children)) {
        if (_children.type === TabPane) {
          const result: TabPaneProps = {
            ..._children.props,
            child: _children,
          };

          return [result];
        }

        if (_children.type === Fragment) {
          return getChildren((_children.props as any)?.children);
        }
      }
      return _children?.flatMap((child: ReactNode) => {
        return getChildren(child);
      });
    }

    const mappedChildren = getChildren(children);

    return mappedChildren;
  }, [children]);

  let _activeTab: string | null = null;
  if (activeTabProp) {
    _activeTab = activeTabProp;
  } else {
    _activeTab = activeTab;
  }

  useEffect(() => {
    if (tabs.length > 0) {
      setActiveTab(tabs[0].id);
      setOpenedTabs((prev) => {
        return [...prev, tabs[0].id];
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={classNames(styles["tabs"], className)}>
      <div
        style={{
          display: "flex",
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          overflow: "hidden",
        }}
      >
        {TabsTitle ? (
          <div
            style={{
              backgroundColor: Colors.color_white,
              borderTopLeftRadius: 20,
            }}
          >
            {typeof TabsTitle === "string" ? (
              <div style={{ padding: "15px 15px 0px 15px" }}>
                <Text theme="Regular" size={20} color={Colors.color_primary_2}>
                  {TabsTitle}
                </Text>
              </div>
            ) : typeof TabsTitle === "object" ? (
              TabsTitle
            ) : null}
          </div>
        ) : null}

        <div ref={tabListRef} className={styles["tabs__list"]}>
          {tabs.map(({ id, renderTitle, closable }) => {
            const isActive = id === _activeTab;

            return (
              <InternalTabPane
                renderTitle={renderTitle}
                isActive={isActive}
                onClick={handleOnChange}
                key={id}
                id={id}
                onClose={handleOnClose}
                closable={Boolean(closable)}
              />
            );
          })}
        </div>
      </div>

      <div className={styles["tabs__content"]}>
        {opendTabs.map((_id) => {
          const tab = tabs.find(({ id }) => id === _id);
          return (
            <div
              key={tab?.id}
              style={{ display: tab?.id === _activeTab ? "block" : "none" }}
            >
              {tab?.children}
            </div>
          );
        })}
      </div>
    </div>
  );
};

Tabs.TabPane = TabPane;

export { Tabs };
