import { Handle, Position } from "reactflow";
import { NodeData } from "..";
import { useTheme } from "../../../theme/context";
import { Text } from "../../text";
import { Tooltip } from "../../tooltip";
import { TooltipContent } from "./tooltipContent";

const EndNode = ({ data: { label } }: { data: NodeData }) => {
  const { color_primary_1 } = useTheme();
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
        <Handle type="target" position={Position.Top} id="a" />
      </div>
    </Tooltip>
  );
};

export { EndNode };
