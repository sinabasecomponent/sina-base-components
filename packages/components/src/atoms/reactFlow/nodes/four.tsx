import { Handle, Position, Connection } from "reactflow";
import { NodeData } from "..";
import { useTheme } from "../../../theme/context";
import { Text } from "../../text";
import { checkValidation } from "./checkValidation";

const Four = ({ data: { label, edges, id } }: { data: NodeData }) => {
  const { color_primary_1 } = useTheme();

  // const checkValidation = (connection: Connection) => {
  //   const sag1 = edges?.find(({ target }) => {
  //     return target === connection.target;
  //   });
  //   const sag = edges?.find(({ source }) => {
  //     return source === connection.source;
  //   });

  //   const alreadyExist = sag1 || sag;

  //   return !alreadyExist;
  // };

  return (
    <div
      style={{
        width: 80,
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
        isValidConnection={(connection) =>
          checkValidation({ connection, id, edges })
        }
        type="target"
        position={Position.Top}
        id="a"
      />
      <Handle
        type="source"
        position={Position.Bottom}
        id="a"
        style={{ left: "20%" }}
        isValidConnection={(connection) =>
          checkValidation({ connection, id, edges })
        }
      />
      <Handle
        type="source"
        position={Position.Bottom}
        id="b"
        style={{ left: "40%" }}
        isValidConnection={(connection) =>
          checkValidation({ connection, id, edges })
        }
      />
      <Handle
        type="source"
        position={Position.Bottom}
        id="c"
        style={{ left: "60%" }}
        isValidConnection={(connection) =>
          checkValidation({ connection, id, edges })
        }
      />
      <Handle
        type="source"
        position={Position.Bottom}
        id="d"
        style={{ left: "80%" }}
        isValidConnection={(connection) =>
          checkValidation({ connection, id, edges })
        }
      />
    </div>
  );
};

export { Four };
