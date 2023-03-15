import { motion } from "framer-motion";
import { DOMAttributes } from "react";
import { BaseIcon } from "../../../atoms";
import { Colors } from "../../../colors";

const Clear = ({
  handleOnClear,
  whatVisible,
  isVisible,
}: {
  handleOnClear: () => void;
  whatVisible: "cross" | "arrow" | null;
  isVisible: boolean;
}) => {
  const handleOnClick: DOMAttributes<HTMLDivElement>["onClick"] = (e) => {
    e.stopPropagation();
    handleOnClear();
  };
  return (
    <div style={{ height: "100%", width: 20, position: "relative" }}>
      <div
        onClick={handleOnClick}
        style={{
          position: "absolute",
          top: 10,
          display: whatVisible === "cross" ? "block" : "none",
          cursor: "pointer",
        }}
      >
        <BaseIcon
          color={Colors.color_primary_1}
          name={"Performance-_-Table-Setting-_-Cross-icon-for-Delete-Item"}
          size={{ height: 10, width: 12 }}
        />
      </div>
      <div
        style={{
          position: "absolute",
          top: 12,
          display: whatVisible === "arrow" ? "block" : "none",
        }}
      >
        <motion.div animate={{ rotate: isVisible ? 180 : 0 }}>
          <BaseIcon
            color={isVisible ? Colors.color_primary_1 : Colors.color_primary_3}
            name={"Every-Boxes-_-Flesh-Icon-for-more-choices"}
            size={{ height: 6, width: 12 }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export { Clear };
