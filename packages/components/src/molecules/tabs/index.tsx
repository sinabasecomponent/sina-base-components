import classNames from "classnames";
import { Fragment, ReactNode, useEffect, useMemo, useState } from "react";
import { Text } from "../../atoms/text";
import { pxToVh } from "../../utils/convertUnit";
import { useHorizontalScroll } from "../../utils/useHorizontalScroll";
import { InternalTabPane } from "./internalTabPane";
import { TabPane, TabPaneProps } from "./TabPane";
import { useStyles } from "./style";
import { useTheme } from "../../theme/context";
export interface TabsProps {
  children: React.ReactNode;
  activeTab?: string;
  onChange?: (id: string) => void;
  onClose?: (id: string) => void;
  className?: string;
  TabsTitle?: string | React.ReactNode;
  noContent?: React.ReactNode;
}

const Tabs = ({
  children,
  activeTab: activeTabProp,
  onChange,
  onClose,
  className,
  TabsTitle,
  noContent,
}: TabsProps) => {
  const classes = useStyles();
  const { color_white, color_primary_2 } = useTheme();
  const [activeTab, setActiveTab] = useState<string | null>(null);
  const [openedTabs, setOpenedTabs] = useState<string[]>([]);
  const tabListRef = useHorizontalScroll();

  const handleOnChange = (id: string) => {
    onChange?.(id);
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

  useEffect(() => {
    if (activeTabProp) {
      setOpenedTabs((prev) => {
        const alreadyExist = prev.find((item) => item === activeTabProp);
        if (alreadyExist) return prev;
        return [...prev, activeTabProp];
      });
    }
  }, [activeTabProp]);

  return (
    <div className={classNames(classes["tabs"], className)}>
      <div className={classes["tabsContainer"]}>
        {TabsTitle ? (
          <div
            style={{
              backgroundColor: color_white,
              borderTopLeftRadius: 20,
            }}
          >
            {typeof TabsTitle === "string" ? (
              <div className={classes["tabsTitle"]}>
                <Text
                  theme="Regular"
                  size={`${pxToVh(20)}vh`}
                  color={color_primary_2}
                >
                  {TabsTitle}
                </Text>
              </div>
            ) : typeof TabsTitle === "object" ? (
              TabsTitle
            ) : null}
          </div>
        ) : null}

        <div ref={tabListRef} className={classes["tabsList"]}>
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

      <div className={classes["tabsContentContainer"]}>
        {noContent ? (
          <div style={{ height: "100%" }}>{noContent}</div>
        ) : (
          openedTabs.map((_id) => {
            const tab = tabs.find(({ id }) => id === _id);
            return (
              <div
                key={tab?.id}
                style={{
                  display: tab?.id === _activeTab ? "block" : "none",
                  height: "100%",
                }}
              >
                {tab?.children}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

Tabs.TabPane = TabPane;

export { Tabs };
