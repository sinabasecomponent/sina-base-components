import { Colors } from '../../../colors';
import styles from './radio.module.scss';

const CustomCircle = ({
  borderColor,
  backgroundColor,
}: {
  borderColor: Colors;
  backgroundColor: Colors;
}) => {
  return (
    <div
      className={styles['outterCircle']}
      style={{
        border: `1px solid ${borderColor}`,
      }}
    >
      <div
        className={styles['innerCircle']}
        style={{
          backgroundColor: backgroundColor,
        }}
      />
    </div>
  );
};

export { CustomCircle };
