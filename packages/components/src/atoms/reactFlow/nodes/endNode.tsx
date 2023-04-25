import { Handle, Position } from "reactflow";
import { NodeData } from "..";
import { useTheme } from "../../../theme/context";
import { Text } from "../../text";
import { Tooltip } from "../../tooltip";

const EndNode = ({ data: { label } }: { data: NodeData }) => {
  const { color_primary_1 } = useTheme();
  return (
    <Tooltip
      content={
        <div style={{ width: 200, height: 30, border: "1px solid red" }}>
          {label}
        </div>
      }
      arrowColor={"red"}
    >
      <div
        style={{
          width: 60,
          height: 15,
          border: `1px solid ${color_primary_1}`,
          borderRadius: 4,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text ellipsis size={6} color={color_primary_1}>
          {label}
        </Text>
        <Handle type="target" position={Position.Top} id="a" />
      </div>
    </Tooltip>
  );
};

export { EndNode };
