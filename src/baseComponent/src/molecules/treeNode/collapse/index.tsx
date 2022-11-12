import { motion } from "framer-motion";
import { useState } from "react";
import { View } from "reactjs-view";
import { Colors } from "../../../colors";
import { Item } from "../item";

const Collapse = ({
  title,
  children,
  level,
  backgroundColor,
  textColor,
}: {
  title: string;
  children: React.ReactNode;
  level: number;
  backgroundColor: Colors;
  textColor: Colors;
}) => {
  const [open, setOpen] = useState(false);
  const [height, setHeight] = useState(0);
  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div>
      <Item
        textColor={textColor}
        backgroundColor={backgroundColor}
        level={level}
        title={title}
        onClick={handleClick}
        arrowDirection={open ? "up" : "down"}
      />
      <motion.div animate={{ height: open ? height : 0 }}>
        <View
          onLayout={({
            nativeEvent: {
              layout: { height },
            },
          }) => {
            setHeight(height);
          }}
        >
          {open && children}
          {open ? (
            <div
              style={{
                position: "absolute",
                top: -20,
                left: 14,
                height: height - 16,
                width: 0,
                borderLeft: `2px dotted ${Colors.color_primary_2}`,
              }}
            />
          ) : null}
        </View>
      </motion.div>
    </div>
  );
};

export { Collapse };
