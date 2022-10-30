import { createUseStyles } from "react-jss";
import { Colors } from "../../../colors";

export const useStyles = createUseStyles(() => {
  return {
    searchBar: {
      height: 45,
      backgroundColor: Colors.purple_7,
    },
  };
});
