const ROOT_X = 250;
const ROOT_Y = 20;
const GUTTER = 10;
const LEVEL_GUTTER = 150;
export interface Base {
  parentId?: string | null;
  id: string;
}

export type RecursiveTree<T extends Base> = T & {
  children?: RecursiveTree<T>[];
  occupyWidth?: number;
  level?: number;
  x?: number;
  y?: number;
  absoluteX?: number;
  absoluteY?: number;
  width?: number;
};

export const createNestedArray = <T extends Base>({
  nodes,
}: {
  nodes: T[];
}): RecursiveTree<T>[] => {
  const dataTree = (
    items: T[],
    parentId?: string,
    level: number = 0,
  ): (T & { children: T[] })[] => {
    return (
      items
        ?.filter((x) => {
          return parentId === null ? !x.parentId : x.parentId == parentId;
        })
        .map((item) => {
          return {
            ...item,
            level: level,
            children: dataTree(items, item.id, level + 1),
            x: ROOT_X,
            absoluteX: ROOT_X,
            y: level ? level * LEVEL_GUTTER : ROOT_Y,
            absoluteY: level ? level * LEVEL_GUTTER : ROOT_Y,
          };
        }) || []
    );
  };

  const treeData = dataTree(nodes);

  function findWidth<T extends Base>(item: RecursiveTree<T>): number {
    if (!item.children?.length) {
      return (item?.width || 0) + GUTTER;
    }

    const width = item.children.reduce((prev, child) => {
      return prev + findWidth(child);
    }, GUTTER);
    return width;
  }

  const assignWidth = <T extends Base>(
    data: RecursiveTree<T>[],
  ): RecursiveTree<T>[] => {
    return data.map((item) => {
      if (item.children) {
        item.children = assignWidth(item.children);
      }
      item.occupyWidth = findWidth(item);
      return {
        ...item,
      };
    });
  };

  const dataWithOccupyWidth = assignWidth(treeData);

  const findPosition = <T extends Base>(data: RecursiveTree<T>) => {
    if (data.children && data.children?.length > 0) {
      const sortChildren = data.children.sort((a, b) => {
        return (b.occupyWidth || 0) - (a.occupyWidth || 0);
      });

      const childrenWithPosX = sortChildren.reduce(
        (acc: RecursiveTree<T>[], crr, index) => {
          if (index === 0) {
            const x = (data.x || 0) + (data.occupyWidth || 0) / 2;
            return [{ ...crr, x: x, absoluteX: x }];
          }

          const otherX =
            (acc[index - 1].x || 0) -
            (sortChildren[index - 1].occupyWidth || 0);
          return [...acc, { ...crr, x: otherX, absoluteX: otherX }];
        },
        [],
      );
      return childrenWithPosX;
    }
  };

  const assignPosition = <T extends Base>(
    data: RecursiveTree<T>[],
  ): RecursiveTree<T>[] => {
    return data.map((item) => {
      item.children = findPosition(item);
      if (item.children) {
        assignPosition(item.children);
      }
      return item;
    });
  };
  return assignPosition(dataWithOccupyWidth);
};
