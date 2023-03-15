import { Colors } from '../../../colors';

const Indeterminate = () => {
  const borderColor = Colors.color_white;
  const backgroundColor = Colors.color_secondary_1;

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
          width: 6,
          height: 6,
          backgroundColor: backgroundColor,
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      />
    </div>
  );
};

export { Indeterminate };
