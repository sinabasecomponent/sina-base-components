import { motion } from "framer-motion";
import { useState } from "react";
import { View } from "reactjs-view";
import { Item } from "../item";

const Collapse = ({
  title,
  children,
  level,
}: {
  title: string;
  children: React.ReactNode;
  level: number;
}) => {
  const [open, setOpen] = useState(false);
  // const [height, setHeight] = useState(0);
  const [height2, setHeight2] = useState(0);
  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  return (
    <View
    // onLayout={({
    //   nativeEvent: {
    //     layout: { height },
    //   },
    // }) => {
    //   setHeight(height);
    // }}
    // className={styles["collapseWrapper"]}
    >
      <Item
        level={level}
        title={title}
        onClick={handleClick}
        isChild
        arrowDirection={open ? "up" : "down"}
        // height={height}
      />
      <motion.div animate={{ height: open ? height2 : 0 }}>
        <View
          onLayout={({
            nativeEvent: {
              layout: { height },
            },
          }) => {
            setHeight2(height);
          }}
        >
          {open && children}
          {open ? (
            <div
              style={{
                position: "absolute",
                top: -20,
                left: 14,
                height: height2 - 16,
                width: 0,
                borderLeft: "2px dotted blue",
              }}
            />
          ) : null}
        </View>
      </motion.div>
    </View>
  );
};

export { Collapse };
