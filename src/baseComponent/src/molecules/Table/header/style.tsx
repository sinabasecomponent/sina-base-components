import { createUseStyles } from "react-jss";
import { Colors } from "../../../colors";

export const useStyles = createUseStyles(() => {
  return {
    search: {
      borderRight: `1px solid ${Colors.purple_6}`,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      cursor: "pointer",
      width: 31,
    },
  };
});
