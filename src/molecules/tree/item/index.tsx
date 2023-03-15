import classNames from 'classnames';
// import { useState } from 'react';
// import { OnSelectItemProps, TreeBasicType } from '..';
import { Loading, Text } from '../../../atoms';
import { BaseIcon } from '../../../atoms/baseIcon';
import { Colors } from '../../../colors';
import styles from './node.module.scss';

interface ItemProps {
  title?: string;
  arrowDirection?: 'up' | 'down';
  level: number;
  backgroundColor: Colors;
  isActive?: boolean;
  textColor: Colors;
  fontSize?: number;
  isLoading: boolean;
  onClick?: () => void;
}

const Item = ({
  title,
  onClick,
  arrowDirection,
  level,
  backgroundColor,
  isActive,
  textColor,
  fontSize = 16,
  isLoading,
}: ItemProps) => {
  return (
    <div
      onClick={() => onClick?.()}
      style={{
        cursor: 'pointer',
        backgroundColor: isActive ? Colors.color_primary_1 : backgroundColor,
      }}
      className={classNames(
        styles['wrapper'],
        level && level > 1 && styles['dotLine']
      )}
    >
      <div className={styles['statusLine']} />
      <div className={styles['content']}>
        <Text theme='Regular' size={fontSize} color={textColor}>
          {title}
        </Text>
        {isLoading ? (
          <div style={{ marginInlineStart: 'auto' }}>
            <Loading size='small' spinnerColor={Colors.color_warning_1} />
          </div>
        ) : null}
        {arrowDirection !== undefined ? (
          <BaseIcon
            wrapperClassName={classNames(
              styles['arrowDown'],
              arrowDirection === 'up' && styles['arrowUp']
            )}
            name={'Amount-Boxes_Decrease'}
            size={{ height: 6, width: 12 }}
            wrapperStyle={{ marginInlineStart: 'auto' }}
            color={Colors.color_primary_2}
          />
        ) : null}
      </div>
    </div>
  );
};

export { Item };
