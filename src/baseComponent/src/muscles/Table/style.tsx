import { createUseStyles } from "react-jss";
import { Colors } from "../../colors";

export const useStyles = createUseStyles(() => {
  return {
    table: {
      width: "100%",
      borderCollapse: "collapse",
      "& tr,td,th": {
        padding: 0,
      },
    },
    tableHeader: {
      backgroundColor: Colors.main_purple,
    },
  };
});