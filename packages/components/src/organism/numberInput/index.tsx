import { BaseIcon } from "../../atoms";
import { TextInput, TextInputProps } from "../../molecules";
import { theming } from "../../theme";
const { useTheme } = theming;

interface NumberInput extends TextInputProps {
  onDecrease: () => void;
  onIncrease: () => void;
}

const NumberInput = ({ onDecrease, onIncrease }: NumberInput) => {
  const { color_primary_1 } = useTheme();
  return (
    <div style={{ position: "relative" }}>
      <BaseIcon
        name={"Amount-Boxes_Decrease"}
        size={{ height: 7, width: 12 }}
        unit={"pixel"}
        wrapperStyle={{
          position: "absolute",
          left: 10,
          top: "50%",
          transform: "translateY(-50%)",
          cursor: "pointer",
        }}
        color={color_primary_1}
        onClick={onDecrease}
      />
      <BaseIcon
        onClick={onIncrease}
        color={color_primary_1}
        name={"Amount-Boxes_Increase"}
        size={{ height: 7, width: 12 }}
        unit={"pixel"}
        wrapperStyle={{
          position: "absolute",
          right: 10,
          top: "50%",
          transform: "translateY(-50%)",
          cursor: "pointer",
        }}
      />
      <TextInput style={{ paddingInline: 24, textAlign: "center" }} />
    </div>
  );
};

export { NumberInput };
