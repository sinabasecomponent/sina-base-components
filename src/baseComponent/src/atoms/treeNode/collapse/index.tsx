import { useState } from "react";
import { View } from "reactjs-view";
import { Item } from "../item";
import styles from "./collapse.module.scss";

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
  const [height, setHeight] = useState(0);
  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  return (
    <View
      onLayout={({
        nativeEvent: {
          layout: { height },
        },
      }) => {
        setHeight(height);
      }}
      className={styles["collapseWrapper"]}
    >
      <Item
        level={level}
        title={title}
        onClick={handleClick}
        isChild
        arrowDirection={open ? "up" : "down"}
        height={height}
      />
      {open && children}
      {open ? (
        <div
          style={{
            position: "absolute",
            top: 32,
            left: 14,
            height: height - 67,
            width: 0,
            borderLeft: "2px dotted blue",
          }}
        />
      ) : null}
    </View>
  );
};

export { Collapse };
