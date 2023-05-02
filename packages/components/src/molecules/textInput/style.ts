import { createUseStyles } from "react-jss";
import { theming } from "../../theme";

const useStyles = createUseStyles(
  (theme) => {
    return {
      textInput: {
        width: "100%",
        backgroundColor: theme.color_background,
        color: theme.color_primary_2,
        border: "none",
        padding: "0.7rem",
        borderRadius: "0.4375rem",
        outline: "none",
      },
    };
  },
  { theming },
);

export { useStyles };
