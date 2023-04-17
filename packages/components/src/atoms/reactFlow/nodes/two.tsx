import { Handle, Position } from "reactflow";
import { NodeData } from "..";
import { useTheme } from "../../../theme/context";
import { Text } from "../../text";
import { checkValidation } from "./checkValidation";

const Two = ({ data: { label, edges, id } }: { data: NodeData }) => {
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
      <Handle
        type="source"
        position={Position.Bottom}
        id="b"
        style={{ left: "80%" }}
        isValidConnection={(connection) =>
          checkValidation({ connection, id, edges })
        }
      />
      <Handle
        type="source"
        position={Position.Bottom}
        id="c"
        style={{ left: "20%" }}
        isValidConnection={(connection) =>
          checkValidation({ connection, id, edges })
        }
      />
    </div>
  );
};

export { Two };
