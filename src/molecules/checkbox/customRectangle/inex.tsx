import { Colors } from '../../../colors';

const CustomRectangle = ({
  mode,
  checked,
}: {
  mode?: 'dark' | 'light';
  checked?: boolean;
}) => {
  const isLightChecked = mode === 'light' && checked;
  const isLightUnChecked = mode === 'light' && !checked;
  const isDarkChecked = mode === 'dark' && checked;
  const isDarkUnChecked = mode === 'dark' && !checked;

  const borderColor = isLightChecked
    ? Colors.color_secondary_1
    : isLightUnChecked
    ? Colors.color_white
    : (isDarkChecked || isDarkUnChecked) && Colors.color_primary_1;

  const backgroundColor = isLightChecked
    ? Colors.color_secondary_1
    : isLightUnChecked
    ? Colors.color_primary_3
    : isDarkChecked
    ? Colors.color_secondary_1
    : isDarkUnChecked
    ? Colors.color_primary_6
    : Colors.color_primary_6;

  return (
    <div
      style={{
        width: 16,
        height: 16,
        borderRadius: 3,
        border: `1px solid ${borderColor}`,
        position: 'relative',
        backgroundColor: 'transparent',
      }}
    >
      <div
        style={{
          position: 'absolute',
          width: 10,
          height: 10,
          backgroundColor: backgroundColor,
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      />
    </div>
  );
};

export { CustomRectangle };
