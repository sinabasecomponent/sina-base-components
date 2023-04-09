import { createUseStyles } from "react-jss";
import { theming } from "../../theme";

const useStyles = createUseStyles(
  (theme) => {
    return {
      textInput: {
        alignItems: "center",
        display: "flex",
        justifyContent: "space-between",
        "& label": {
          fontSize: "1rem",
          lineHeight: "1.125rem",
          color: theme.color_primary_2,
          textTransform: "capitalize",
        },
        "& input": {
          width: "100%",
          backgroundColor: theme.color_background,
          color: theme.color_primary_2,
          border: "none",
          padding: "0.7rem",
          borderRadius: "0.4375rem",
          outline: "none",
        },
      },
    };
  },
  { theming },
);

export { useStyles };
