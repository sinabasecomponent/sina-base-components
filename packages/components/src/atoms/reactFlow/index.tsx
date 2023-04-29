import React, { useState, useRef, useCallback } from "react";
import * as XLSX from "xlsx";
import { Modal } from "../modal";
import { TextInput } from "../../molecules";
import ReactFlow, {
  ReactFlowProvider,
  addEdge,
  useNodesState,
  useEdgesState,
  Controls,
  OnConnect,
  OnInit,
  ReactFlowInstance,
  XYPosition,
  Edge,
  OnEdgesDelete,
  Node,
} from "reactflow";
import { Two } from "./nodes";
import "reactflow/dist/style.css";
import Sidebar from "./sidebar";
import "./index.css";
import { Four } from "./nodes/four";
import { Eight } from "./nodes/eight";
import { Sixteen } from "./nodes/sixteen";
import { Thirtytwo } from "./nodes/thirtytwo";
import { RootNode } from "./nodes/root";
import { EndNode } from "./nodes/endNode";
import { Button } from "../../molecules/button";
import { createNestedArray } from "./createNestedArray";
import { flatData } from "@sina-base/utils";
let id = 0;
const getId = () => `dndnode_${id++}`;

export interface ExcelNodesType {
  label: string;
  x: number;
  y: number;
  absoluteX: number;
  absoluteY: number;
  id: string;
  type: string;
  width: number;
  height: number;
}

const nodeTypes = {
  two: Two,
  four: Four,
  eight: Eight,
  sixteen: Sixteen,
  thirtytwo: Thirtytwo,
  root: RootNode,
  endnode: EndNode,
};

export interface NodeData {
  label: string;
  edges?: Edge<any>[];
  id?: string;
}

const DnDFlow = () => {
  const reactFlowWrapper = useRef<HTMLDivElement>(null);
  const [nodes, setNodes, onNodesChange] = useNodesState<NodeData>([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [nodeName, setNodeName] = useState("");
  const [isModalVisible] = useState(false);

  const [reactFlowInstance, setReactFlowInstance] =
    useState<ReactFlowInstance | null>(null);

  const onConnect: OnConnect = useCallback(
    (params) => {
      setEdges((eds) => {
        return addEdge(params, eds);
      });
      //@ts-ignore
      setNodes((nodes) => {
        return nodes.map(({ data: { label, id }, ...rest }) => {
          return {
            ...rest,
            data: {
              label,
              id,
              edges: addEdge(params, edges),
            },
          };
        });
      });
    },
    [edges, setEdges, setNodes],
  );

  const handleSetReactFlowInstance: OnInit<any, any> = (
    reactFI: ReactFlowInstance,
  ) => {
    setReactFlowInstance(reactFI);
  };

  const onDragOver = useCallback((event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  const onDrop = useCallback(
    (event: React.DragEvent<HTMLDivElement>) => {
      event.preventDefault();
      const reactFlowBounds =
        reactFlowWrapper?.current?.getBoundingClientRect();
      const type = event.dataTransfer.getData("application/reactflow");
      const isRootAlreadyExist = nodes.find(({ type }) => {
        return type === "root";
      });
      // check if the dropped element is valid
      if (
        typeof type === "undefined" ||
        !type ||
        (Boolean(isRootAlreadyExist) && type === "root")
      ) {
        return;
      }

      const position = reactFlowInstance?.project({
        x: event.clientX - (reactFlowBounds?.left || 0),
        y: event.clientY - (reactFlowBounds?.top || 0),
      }) as XYPosition;

      const id = getId();
      const newNode = {
        id,
        type,
        position,
        data: { label: `${type} node-${id}`, edges, id },
      };
      setNodes((nds) => nds.concat(newNode));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [reactFlowInstance, edges, setNodes, nodes],
  );

  const handleDeleteNodes: OnEdgesDelete = (deletedNodes) => {
    const newEdges = edges.filter(({ id }) => {
      return (
        deletedNodes.find(({ id: deletedNodeId }) => id === deletedNodeId)
          ?.id !== id
      );
    });
    setNodes((nds) => {
      return nds.map(({ data, ...rest }) => {
        return {
          ...rest,
          data: {
            ...data,
            edges: newEdges,
          },
        };
      });
    });
  };

  const exportExcel = () => {
    const _nodes = nodes.map(
      ({
        data: { label },
        position: { x, y },
        positionAbsolute: { x: absoluteX, y: absoluteY } = {},
        id,
        type,
        width,
        height,
      }) => {
        return {
          label,
          x,
          y,
          absoluteX,
          absoluteY,
          id,
          type,
          width,
          height,
        };
      },
    );

    const nodesWorksheet = XLSX.utils.json_to_sheet(_nodes);
    const edgesWorksheet = XLSX.utils.json_to_sheet(edges);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, nodesWorksheet, "nodes");
    XLSX.utils.book_append_sheet(workbook, edgesWorksheet, "edges");
    XLSX.writeFile(workbook, "graph.xlsx");
  };

  const excelToGraph = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e?.target?.files?.[0];
    const data = await file?.arrayBuffer();
    const workbook = XLSX.read(data);
    const nodesArray: ExcelNodesType[] = XLSX.utils.sheet_to_json(
      workbook.Sheets[workbook.SheetNames[0]],
    );
    const edgesArray: Edge<any>[] = XLSX.utils.sheet_to_json(
      workbook.Sheets[workbook.SheetNames[1]],
    );

    const dataWithParent = nodesArray.map((data) => {
      const parentId = edgesArray.find(({ target }) => {
        return target === data.id;
      })?.source;
      return {
        ...data,
        parentId: parentId ?? null,
      };
    });

    const nestedNodes = createNestedArray({ nodes: dataWithParent });

    const flat = flatData(nestedNodes);
    const nodes: Node<NodeData, string | undefined>[] = flat.map(
      ({ absoluteX, absoluteY, height, id, label, type, width, x, y }) => {
        return {
          data: { label, edges: edgesArray, id },
          position: {
            x,
            y,
          },
          height,
          width,
          positionAbsolute: {
            x: absoluteX,
            y: absoluteY,
          },
          type,
          id,
        };
      },
    );
    const max = nodes.reduce((a, b) => {
      const id = +b.id.split("_")[1];
      return Math.max(a, id);
    }, -Infinity);
    id = max + 1;

    setNodes(nodes);
    setEdges(edgesArray);
  };

  return (
    <>
      <Modal isVisible={isModalVisible}>
        <div
          style={{
            width: 300,
            height: 200,
            borderRadius: 8,
            backgroundColor: "white",
            padding: 20,
          }}
        >
          <TextInput onChangeText={setNodeName} value={nodeName} />
        </div>
      </Modal>
      <div className="dndflow">
        <ReactFlowProvider>
          <div className="reactflow-wrapper" ref={reactFlowWrapper}>
            <ReactFlow
              nodes={nodes}
              edges={edges}
              onNodesChange={onNodesChange}
              onEdgesChange={(sag) => {
                onEdgesChange(sag);
              }}
              onConnect={onConnect}
              onInit={handleSetReactFlowInstance}
              onDrop={onDrop}
              onDragOver={onDragOver}
              fitView
              nodeTypes={nodeTypes}
              className="validationflow"
              onEdgesDelete={handleDeleteNodes}
            >
              <Controls />
            </ReactFlow>
          </div>
          <Sidebar />
        </ReactFlowProvider>
      </div>
      <div>
        <Button onClick={exportExcel}>export excel</Button>
        <input type={"file"} onChange={excelToGraph} />
      </div>
    </>
  );
};

export { DnDFlow };
