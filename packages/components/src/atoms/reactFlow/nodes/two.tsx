import { Handle, Position } from "reactflow";
import { NodeData } from "..";
import { useTheme } from "../../../theme/context";
import { Text } from "../../text";
import { Tooltip } from "../../tooltip";
import { checkValidation } from "./checkValidation";
import { TooltipContent } from "./tooltipContent";

const Two = ({ data: { label, edges, id } }: { data: NodeData }) => {
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
        <Handle
          type="source"
          position={Position.Bottom}
          id="b"
          isValidConnection={(connection) =>
            checkValidation({ connection, id, edges, capacity: 2 })
          }
        />
      </div>
    </Tooltip>
  );
};

export { Two };
