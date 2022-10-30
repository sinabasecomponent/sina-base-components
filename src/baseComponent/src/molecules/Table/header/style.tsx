import { createUseStyles } from "react-jss";
import { Colors } from "../../../colors";

export const useStyles = createUseStyles(() => {
  return {
    header: {
      height: 24,
      width: 32,
      borderRight: `1px solid ${Colors.purple_6}`,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      cursor: "pointer",
    },
  };
});
