import { Connection, Edge } from "reactflow";
const checkValidation = ({
  connection,
  id,
  edges,
}: {
  connection: Connection;
  edges?: Edge<any>[];
  id?: string;
}) => {
  const isSource = connection.source === id;
  if (isSource) {
    const sourceEdge = edges?.find(
      ({ source: edgeSource, sourceHandle: edgeSourceHandle }) => {
        return (
          edgeSource === connection.source &&
          edgeSourceHandle === connection.sourceHandle
        );
      },
    );
    const targetEdge = edges?.find(({ target: edgeTarget }) => {
      return edgeTarget === connection.target;
    });
    const isSag = sourceEdge || targetEdge;
    return !isSag;
  } else {
    const targetEdge = edges?.find(({ target }) => {
      return target === connection.target;
    });
    return !(targetEdge?.source === connection.source);
  }
};

export { checkValidation };
