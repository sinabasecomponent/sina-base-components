import { Colors } from "../../../colors";

const CustomCircle = ({
  borderColor,
  backgroundColor,
}: {
  borderColor: Colors;
  backgroundColor: Colors;
}) => {
  return (
    <div
      style={{
        width: 16,
        height: 16,
        border: `1px solid ${borderColor}`,
        borderRadius: "50%",
        backgroundColor: Colors.color_white,
        position: "absolute",
        display: "inline-block",
        zIndex: 2,
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
      }}
    >
      <div
        style={{
          width: 10,
          height: 10,
          backgroundColor: backgroundColor,
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          borderRadius: "50%",
        }}
      />
    </div>
  );
};

export { CustomCircle };
