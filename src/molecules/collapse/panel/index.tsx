import { motion } from "framer-motion";
import React, { useContext, useLayoutEffect } from "react";
import Measure from "react-measure";
import { BaseIcon } from "../../../atoms/baseIcon";
import { Text } from "../../../atoms/text";
import { Colors } from "../../../colors";
import { CollapseContext } from "../context";
import styles from "./panel.module.scss";

export interface PanelProps {
  children: React.ReactNode;
  title: React.ReactNode;
  id: string;
}

const Panel = ({ children, title, id }: PanelProps) => {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const { openedPanels, onClickPanel, defaultOpen, handleDefaultOpen } =
    useContext(CollapseContext);

  const handleOnClick = () => {
    onClickPanel(id);
  };

  useLayoutEffect(() => {
    if (defaultOpen) {
      handleDefaultOpen(id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const isOpen = Boolean(openedPanels.find((item) => item === id));

  return (
    <div style={{ marginBottom: 16 }}>
      <div className={styles["title-wrapper"]} onClick={handleOnClick}>
        <div className={styles["title"]}>
          {typeof title === "string" ? (
            <Text
              theme="Regular"
              size={16}
              color={isOpen ? Colors.color_primary_1 : Colors.color_primary_3}
              ellipsis
            >
              {title}
            </Text>
          ) : (
            title
          )}
        </div>
        <motion.div
          style={{ marginRight: 10 }}
          animate={{ rotate: isOpen ? 180 : 0 }}
        >
          <BaseIcon
            color={isOpen ? Colors.color_primary_1 : Colors.color_primary_3}
            name={"Every-Boxes-_-Flesh-Icon-for-more-choices"}
            size={{ height: 6, width: 12 }}
          />
        </motion.div>
      </div>
      <Measure client bounds offset>
        {({ measureRef, contentRect }) => {
          return (
            <motion.div
              style={{ overflow: "hidden", height: 0 }}
              animate={{ height: isOpen ? contentRect.bounds?.height : 0 }}
            >
              <div ref={measureRef}>{children}</div>
            </motion.div>
          );
        }}
      </Measure>
    </div>
  );
};

export { Panel };
