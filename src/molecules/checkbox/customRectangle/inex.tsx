// import { Colors } from '../../../colors';

import { useTheme } from "../../../theme/context";

const CustomRectangle = ({
  mode,
  checked,
}: {
  mode?: "dark" | "light";
  checked?: boolean;
}) => {
  const {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    color_secondary_1,
    // eslint-disable-next-line @typescript-eslint/naming-convention
    color_white,
    // eslint-disable-next-line @typescript-eslint/naming-convention
    color_primary_1,
    // eslint-disable-next-line @typescript-eslint/naming-convention
    color_primary_3,
    // eslint-disable-next-line @typescript-eslint/naming-convention
    color_primary_6,
  } = useTheme();
  const isLightChecked = mode === "light" && checked;
  const isLightUnChecked = mode === "light" && !checked;
  const isDarkChecked = mode === "dark" && checked;
  const isDarkUnChecked = mode === "dark" && !checked;

  const borderColor = isLightChecked
    ? color_secondary_1
    : isLightUnChecked
    ? color_white
    : (isDarkChecked || isDarkUnChecked) && color_primary_1;

  const backgroundColor = isLightChecked
    ? color_secondary_1
    : isLightUnChecked
    ? color_primary_3
    : isDarkChecked
    ? color_secondary_1
    : isDarkUnChecked
    ? color_primary_6
    : color_primary_6;

  return (
    <div
      style={{
        width: 16,
        height: 16,
        borderRadius: 3,
        border: `1px solid ${borderColor}`,
        position: "relative",
        backgroundColor: "transparent",
      }}
    >
      <div
        style={{
          position: "absolute",
          width: 10,
          height: 10,
          backgroundColor: backgroundColor,
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />
    </div>
  );
};

export { CustomRectangle };
