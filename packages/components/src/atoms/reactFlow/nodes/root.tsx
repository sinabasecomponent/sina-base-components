import { Handle, Position, Connection } from "reactflow";
import { NodeData } from "..";
import { useTheme } from "../../../theme/context";
import { Text } from "../../text";
import { Tooltip } from "../../tooltip";
import { TooltipContent } from "./tooltipContent";

const RootNode = ({ data: { label, edges } }: { data: NodeData }) => {
  const { color_primary_1 } = useTheme();

  const rootNodeValidation = (connection: Connection) => {
    const isTargetHasEdge = edges?.find(({ target: edgeTarget }) => {
      return connection.target === edgeTarget;
    });
    return !isTargetHasEdge;
  };

  return (
    <Tooltip
      content={<TooltipContent label={label} />}
      arrowColor={color_primary_1 || ""}
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
        <Handle
          isValidConnection={rootNodeValidation}
          type="source"
          position={Position.Bottom}
          id="b"
        />
      </div>
    </Tooltip>
  );
};

export { RootNode };
