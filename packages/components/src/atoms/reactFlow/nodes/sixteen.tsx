import { Handle, Position } from "reactflow";
import { NodeData } from "..";
import { useTheme } from "../../../theme/context";
import { Text } from "../../text";
import { checkValidation } from "./checkValidation";

const Sixteen = ({ data: { label, edges, id } }: { data: NodeData }) => {
  const { color_primary_1 } = useTheme();
  const array = Array.from({ length: 16 }, (_, i) => i + 1);

  return (
    <div
      style={{
        width: 200,
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
      <Handle type="target" position={Position.Top} id={"a"} />
      <div
        style={{
          width: "100%",
          position: "absolute",
          top: "100%",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        {array.map((item) => {
          return (
            <Handle
              isValidConnection={(connection) =>
                checkValidation({ connection, id, edges })
              }
              key={item}
              type="source"
              position={Position.Bottom}
              id={String(item)}
              style={{
                position: "static",
                transform: "translateY(-50%)",
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export { Sixteen };
