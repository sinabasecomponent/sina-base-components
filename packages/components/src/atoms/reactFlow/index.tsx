import React, { useState, useRef, useCallback } from "react";
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

let id = 0;
const getId = () => `dndnode_${id++}`;

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
  const [isModalVisible, setIsModalVisible] = useState(false);

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
        data: { label: `${type} node-${id}`, edges: edges, id: id },
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
    </>
  );
};

export { DnDFlow };
