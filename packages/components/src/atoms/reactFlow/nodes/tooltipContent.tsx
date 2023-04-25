import { useTheme } from "../../../theme/context";
import { Text } from "../../text";

export const TooltipContent = ({ label }: { label: string }) => {
  const { color_primary_1 } = useTheme();
  return (
    <div
      style={{
        width: 200,
        height: 30,
        borderRadius: "4px",
        backgroundColor: color_primary_1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text size={14} color={"white"}>
        {label}
      </Text>
    </div>
  );
};
