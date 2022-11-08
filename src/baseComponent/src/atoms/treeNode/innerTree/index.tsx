import { useContext } from "react";
import { TreeNodeProps } from "..";
import { Collapse } from "../collapse";
import { LevelContext } from "../context/levelProvider";
import { Item } from "../item";

const InnerTree = ({ data }: TreeNodeProps) => {
  const level = useContext(LevelContext);
  return (
    <div style={{ paddingInlineStart: level > 1 ? 32 : 0 }}>
      {data.map(({ children, id, title }) => {
        if (children) {
          return (
            <Collapse title={title} level={level}>
              <LevelContext.Provider value={level + 1}>
                <InnerTree data={children} />
              </LevelContext.Provider>
            </Collapse>
          );
        }
        return <Item title={title} key={id} level={level} />;
      })}
    </div>
  );
};

export { InnerTree };
