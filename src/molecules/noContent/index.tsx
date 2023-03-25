import { BaseIcon, Text } from "../../atoms";
import { Colors } from "../../colors";
import { pxToVh } from "../../utils/convertUnit";
import { useStyles } from "./style";

export interface NoContentProps {
  text: string;
}

const NoContent = ({ text }: NoContentProps) => {
  const classes = useStyles();
  return (
    <div className={classes["noContent"]}>
      <BaseIcon
        wrapperStyle={{ marginBottom: 10 }}
        size={{ height: pxToVh(107), width: pxToVh(91) }}
        name="Shelf-View-_-Traffic-Cone"
        unit="viewPort"
      />
      <Text color={Colors.color_warning_3} size={16}>
        {text}
      </Text>
    </div>
  );
};

export { NoContent };
