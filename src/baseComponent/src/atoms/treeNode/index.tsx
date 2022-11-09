import { ScrollView } from "reactjs-view";
import { Text } from "../text";
import { InnerTree } from "./innerTree";
import styles from "./treeNode.module.scss";

export interface DataProps {
  title: string;
  id: string;
  children?: DataProps[];
}

export interface TreeNodeProps {
  data: DataProps[];
}

const TreeNode = ({ data }: TreeNodeProps) => {
  return (
    <div className={styles["container"]}>
      <div className={styles["header"]}>
        <Text theme="Regular" size={20}>
          Test Header
        </Text>
      </div>
      <ScrollView style={{ paddingInline: 16, flex: 1 }}>
        <InnerTree data={data} />
      </ScrollView>
    </div>
  );
};

export { TreeNode };
