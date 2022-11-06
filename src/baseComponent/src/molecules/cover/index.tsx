// import { StartFlagIcon } from 'assets/icons';
import { BaseIcon } from "../../atoms/baseIcon";
import styles from "./cover.module.scss";

const Cover = () => {
  return (
    <div className={styles["cover"]}>
      <div className={styles["text-box"]}>
        <BaseIcon name="Title-Bar-Icon-_-Exit" />
        <span> Hi! LOAD OR CREATE A PROJECT AND START!</span>
      </div>
    </div>
  );
};
export { Cover };
