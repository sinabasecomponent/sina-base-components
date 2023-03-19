import { createUseStyles } from "react-jss";
import { ColorsType } from "../../theme/context";

export const useStyle = createUseStyles((theme: ColorsType) => ({
  sag: {
    backgroundColor: theme.color_primary_1,
  },
}));
