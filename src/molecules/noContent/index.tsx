import { BaseIcon, Text } from "../../atoms";
import { Colors } from "../../colors";
import { pxToVh } from "../../utils/convertUnit";
import styles from "./noContent.module.scss";

interface NoContentProps {
  text: string;
}

const NoContent = ({ text }: NoContentProps) => {
  return (
    <div className={styles["no-content"]}>
      <BaseIcon
        wrapperStyle={{ marginBottom: 10 }}
        size={{ height: pxToVh(107), width: pxToVh(91) }}
        name="Shelf-View-_-Traffic-Cone"
        unit="viewPort"
      />
      <Text color={Colors.color_warning_3} size={16}>
        {text}
      </Text>
    </div>
  );
};

export { NoContent };
