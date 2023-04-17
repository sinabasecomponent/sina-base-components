import { Handle, Position } from "reactflow";
import { NodeData } from "..";
import { useTheme } from "../../../theme/context";
import { Text } from "../../text";

const EndNode = ({ data: { label } }: { data: NodeData }) => {
  const { color_primary_1 } = useTheme();
  return (
    <div
      style={{
        width: 60,
        height: 20,
        border: `1px solid ${color_primary_1}`,
        borderRadius: 4,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text size={8} color={color_primary_1}>
        {label}
      </Text>
      <Handle type="target" position={Position.Top} id="a" />
    </div>
  );
};

export { EndNode };
