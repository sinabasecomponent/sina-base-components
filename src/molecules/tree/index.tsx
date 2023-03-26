import { useContext } from "react";
import { Colors } from "../../colors";
import { Collapse } from "./collapse";
import { LevelContext } from "./context/levelProvider";

export interface TreeBasicType<T> {
  title: string;
  id: string;
  children?: T[];
}

export type OnSelectItemProps<T> = {
  data: T;
  level: number;
};

export type OnLoadData<T> = (value: OnSelectItemProps<T>) => Promise<void>;
export interface TreeProps<
  T extends TreeBasicType<T> = {
    title: string;
    id: string;
    children?: { title: string; id: string }[];
  },
> {
  data: T[];
  onSelectItem?: (value: OnSelectItemProps<T>) => void;
  onLoadData?: (value: OnSelectItemProps<T>) => Promise<void>;
  activeItemId?: string;
}

const Tree = <T extends TreeBasicType<T>>({
  data,
  onSelectItem,
  onLoadData,
  activeItemId,
}: TreeProps<T>) => {
  const level = useContext(LevelContext);

  const backgourndColor =
    level === 1
      ? Colors.color_secondary_3
      : level === 2
      ? Colors.color_primary_6
      : level === 3
      ? Colors.color_primary_3
      : Colors.color_primary_3;

  const textColor =
    level === 1
      ? Colors.color_secondary_1
      : level === 2
      ? Colors.color_primary_1
      : level === 3
      ? Colors.color_white
      : Colors.color_white;

  return (
    <div style={{ paddingInlineStart: level > 1 ? 32 : 0 }}>
      {data.map((data) => {
        return (
          <Collapse
            onClick={onSelectItem}
            data={data}
            textColor={textColor}
            backgroundColor={backgourndColor}
            title={data.title}
            level={level}
            key={data.id}
            onLoadData={onLoadData}
            id={data.id}
            activeItemId={activeItemId}
          >
            {data?.children?.length ? (
              <LevelContext.Provider value={level + 1}>
                <Tree
                  onSelectItem={onSelectItem}
                  data={data.children}
                  onLoadData={onLoadData}
                  activeItemId={activeItemId}
                />
              </LevelContext.Provider>
            ) : null}
          </Collapse>
        );
      })}
    </div>
  );
};

export { Tree };
