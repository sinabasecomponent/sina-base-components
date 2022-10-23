import { createUseStyles } from "react-jss";
import { Colors } from "../../colors";

export const useStyles = createUseStyles(() => {
  return {
    table: {
      width: "100%",
      borderCollapse: "collapse",
      // tableLayout: "fixed",
    },
    tableHeader: {
      height: 46,
      backgroundColor: Colors.main_purple,
    },
    searchBar: {
      height: 46,
      backgroundColor: Colors.purple_7,
    },
  };
});
