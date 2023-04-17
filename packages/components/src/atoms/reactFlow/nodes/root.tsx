import { Handle, Position, Connection } from "reactflow";
import { NodeData } from "..";
import { useTheme } from "../../../theme/context";
import { Text } from "../../text";

const RootNode = ({ data: { label, edges } }: { data: NodeData }) => {
  const { color_primary_1 } = useTheme();

  const rootNodeValidation = (connection: Connection) => {
    const isTargetHasEdge = edges?.find(({ target: edgeTarget }) => {
      return connection.target === edgeTarget;
    });
    return !isTargetHasEdge;
  };

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
      <Handle
        isValidConnection={rootNodeValidation}
        type="source"
        position={Position.Bottom}
        id="b"
      />
    </div>
  );
};

export { RootNode };
