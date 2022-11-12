import { useState } from "react";
import { ScrollView } from "reactjs-view";
import { Text } from "../../atoms/text";
import { Colors } from "../../colors";
import { TextInput } from "../textInput";
import { InnerTree } from "./innerTree";
import styles from "./treeNode.module.scss";

export const isInclude = (a: string, b: string) => {
  return (
    a.toLowerCase().includes(b.toLowerCase()) ||
    b.toLowerCase().includes(a.toLowerCase())
  );
};

export interface DataProps {
  title: string;
  id: string;
  isActive?: boolean;
  children?: DataProps[];
}

export interface TreeNodeProps {
  data: DataProps[];
  onSelectShelf?: (id: string) => void;
  title: string;
}

const TreeNode = ({ data, onSelectShelf, title }: TreeNodeProps) => {
  const [activeLeaf, setActiveLelf] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const onSelectLeaf = (id: string) => {
    setActiveLelf(id);
    onSelectShelf?.(id);
  };

  const onSearch = (value: string) => {
    setSearchTerm(value);
  };

  const filterdData = data.filter(({ title }) => {
    return isInclude(title, searchTerm);
  });

  return (
    <div className={styles["container"]}>
      <div className={styles["header"]}>
        <Text color={Colors.color_primary_2} theme="Regular" size={20}>
          {title}
        </Text>
      </div>
      <div className={styles["search"]}>
        <TextInput
          value={searchTerm}
          placeholder="Search Node ID"
          onChangeText={onSearch}
        />
      </div>
      <ScrollView style={{ paddingInline: 16, flex: 1 }}>
        <InnerTree
          onSelectLeaf={onSelectLeaf}
          activeLeaf={activeLeaf}
          data={filterdData}
        />
      </ScrollView>
    </div>
  );
};

export { TreeNode };
