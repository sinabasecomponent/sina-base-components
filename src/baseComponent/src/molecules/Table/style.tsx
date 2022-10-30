import { createUseStyles } from "react-jss";
import { Colors } from "../../colors";

export const useStyles = createUseStyles(() => {
  return {
    table: {
      width: "100%",
      borderCollapse: "collapse",
    },
    tableHeader: {
      backgroundColor: Colors.main_purple,
    },
  };
});
