import { useTheme } from "../../../theme/context";

const Indeterminate = () => {
  const { color_white: borderColor, color_secondary_1: backgroundColor } =
    useTheme();

  return (
    <div
      style={{
        width: 16,
        height: 16,
        borderRadius: 3,
        border: `1px solid ${borderColor}`,
        position: "relative",
        backgroundColor: "transparent",
      }}
    >
      <div
        style={{
          position: "absolute",
          width: 6,
          height: 6,
          backgroundColor: backgroundColor,
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />
    </div>
  );
};

export { Indeterminate };
