import React from 'react';
import { Text } from '../../atoms/text';
import styles from './checkbox.module.scss';
import { Indeterminate } from './customRectangle/indeterminate';
import { CustomRectangle } from './customRectangle/inex';

export interface CheckBoxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  children?: React.ReactNode;
  indeterminate?: boolean;
  mode?: 'dark' | 'light';
}

const CheckBox = ({
  checked,
  value,
  onChange,
  children,
  name,
  indeterminate,
  mode = 'dark',
  ...rest
}: CheckBoxProps) => {
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e);
  };

  return (
    <label style={{ display: 'inline-flex' }}>
      <div
        className={styles['checkBoxWrapper']}
        style={{
          ...(typeof children !== 'undefined' && { marginInlineEnd: 4 }),
        }}
      >
        {indeterminate ? (
          <Indeterminate />
        ) : (
          <CustomRectangle checked={checked} mode={mode} />
        )}

        <input
          className={styles['hiddenInput']}
          type={'checkbox'}
          value={value}
          name={name}
          checked={checked}
          onChange={onChangeHandler}
          {...rest}
        />
      </div>

      {typeof children === 'string' ? (
        <Text size={16}>{children}</Text>
      ) : (
        children
      )}
    </label>
  );
};

export { CheckBox };
