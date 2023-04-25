import { Connection, Edge } from "reactflow";
const checkValidation = ({
  connection,
  id,
  edges,
  capacity,
}: {
  connection: Connection;
  edges?: Edge<any>[];
  id?: string;
  capacity?: number;
}) => {
  const numberOfEdges =
    edges?.filter(({ source }) => {
      return source === id;
    }).length || 0;

  const isOverEdge = capacity && capacity === numberOfEdges ? true : false;

  const targetEdge = edges?.find(({ target: edgeTarget }) => {
    return edgeTarget === connection.target;
  });
  const isSag = Boolean(targetEdge) || isOverEdge;
  return !isSag;
};

export { checkValidation };
