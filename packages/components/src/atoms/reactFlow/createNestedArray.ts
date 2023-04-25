interface Base {
  parentId: string | null;
  id: string;
}

export const createNestedArray = <T extends Base>({
  nodes,
}: {
  nodes: T[];
}): (T & { children: T[] })[] => {
  const dataTree = (
    items: T[],
    parentId?: string,
  ): (T & { children: T[] })[] => {
    return (
      items
        ?.filter((x) => {
          return parentId === null ? !x.parentId : x.parentId == parentId;
        })
        .map((item) => {
          return {
            ...item,
            children: dataTree(items, item.id),
          };
        }) || []
    );
  };

  const treeData = dataTree(nodes);

  return treeData;
};
