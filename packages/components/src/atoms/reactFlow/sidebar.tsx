import React from "react";

export default () => {
  const onDragStart = (
    event: React.DragEvent<HTMLDivElement>,
    nodeType: string,
  ) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <aside>
      <div className="description">
        You can drag these nodes to the pane on the right.
      </div>
      <div
        className="dndnode input"
        onDragStart={(event) => onDragStart(event, "root")}
        draggable
      >
        Root Node
      </div>
      <div
        className="dndnode output"
        onDragStart={(event) => onDragStart(event, "two")}
        draggable
      >
        1-2 node
      </div>
      <div
        className="dndnode output"
        onDragStart={(event) => onDragStart(event, "four")}
        draggable
      >
        1-4 node
      </div>
      <div
        className="dndnode output"
        onDragStart={(event) => onDragStart(event, "eight")}
        draggable
      >
        1-8 node
      </div>
      <div
        className="dndnode output"
        onDragStart={(event) => onDragStart(event, "sixteen")}
        draggable
      >
        1-16 node
      </div>
      <div
        className="dndnode output"
        onDragStart={(event) => onDragStart(event, "thirtytwo")}
        draggable
      >
        1-32 node
      </div>
      <div
        className="dndnode output"
        onDragStart={(event) => onDragStart(event, "endnode")}
        draggable
      >
        end node
      </div>
    </aside>
  );
};
