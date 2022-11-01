import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles(() => {
  return {
    hiddenInput: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      margin: 0,
      opacity: 0,
    },
    Input: {
      width: 16,
      height: 16,
      border: `1px solid green`,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 3,
      cursor: "pointer",
      "&::after": {
        position: "absolute",
        content: "''",
        display: "block",
        width: 10,
        height: 10,
        backgroundColor: "red",
        opacity: 1,
        borderRadius: 1,
      },
    },
    Inputchecked: {
      "&::after": {
        opacity: 1,
        backgroundColor: "green",
      },
    },
    Indeterminate: {
      "&::after": {
        width: 6,
        height: 6,
        backgroundColor: "blue",
      },
    },
  };
});
