import { motion } from "framer-motion";
import React, { useContext, useState } from "react";
import { View } from "reactjs-view";
import { Colors } from "../../../colors";
import { BaseIcon } from "../../baseIcon";
import { Text } from "../../text";
import { CollapseContext } from "../context";

const RIGHT_GUTTER = 30;

export interface PanelProps {
  children: React.ReactNode;
  title: React.ReactNode;
  id: string;
}

const Panel = ({ children, title, id }: PanelProps) => {
  const { openPanels, onClickPanel } = useContext(CollapseContext);

  const [height, setHeight] = useState(0);

  const handleOnClick = () => {
    onClickPanel(id);
  };

  let isOpen: boolean = false;
  if (Array.isArray(openPanels)) {
    isOpen = Boolean(openPanels.find((item) => item === id));
  } else if (!Array.isArray(openPanels)) {
    isOpen = Boolean(id === openPanels);
  }

  return (
    <div style={{ marginBottom: 16 }}>
      <div
        style={{ display: "flex", height: 30, cursor: "pointer" }}
        onClick={handleOnClick}
      >
        <div
          style={{
            flex: 1,
            height: "100%",
            backgroundColor: Colors.color_primary_7,
            borderRadius: 7,
          }}
        >
          {typeof title === "string" ? (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
              }}
            >
              <Text
                theme="Regular"
                size={16}
                color={isOpen ? Colors.color_primary_1 : Colors.color_primary_3}
              >
                {title}
              </Text>
            </div>
          ) : (
            title
          )}
        </div>
        <div
          style={{
            height: "100%",
            width: RIGHT_GUTTER,
            justifyContent: "end",
            alignItems: "center",
            display: "flex",
          }}
        >
          <motion.div animate={{ rotate: isOpen ? 180 : 0 }}>
            <BaseIcon
              name={"Every-Boxes-_-Flesh-Icon-for-more-choices"}
              size={12}
            />
          </motion.div>
        </div>
      </div>
      <motion.div
        style={{ overflow: "hidden", height: 0 }}
        animate={{ height: isOpen ? height : 0 }}
      >
        <View
          onLayout={({
            nativeEvent: {
              layout: { height },
            },
          }) => {
            setHeight(height);
          }}
          style={{
            width: `calc(100% - ${RIGHT_GUTTER}px)`,
          }}
        >
          {children}
        </View>
      </motion.div>
    </div>
  );
};

export { Panel };
