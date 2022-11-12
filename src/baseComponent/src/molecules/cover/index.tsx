// import { StartFlagIcon } from 'assets/icons';
import { Text } from "../../atoms";
import { BaseIcon } from "../../atoms/baseIcon";
import styles from "./cover.module.scss";

const Cover = () => {
  return (
    <div className={styles["cover"]}>
      <div className={styles["text-box"]}>
        <BaseIcon name="Title-Bar-Icon-_-Exit" />
        <Text size={16}> Hi! LOAD OR CREATE A PROJECT AND START!</Text>
      </div>
    </div>
  );
};
export { Cover };
