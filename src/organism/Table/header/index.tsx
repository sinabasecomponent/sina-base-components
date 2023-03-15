import React, { useContext } from 'react';
import { BaseIcon } from '../../../atoms';
import { Colors } from '../../../colors';
import { CheckBox } from '../../../molecules/checkbox';
import { Column, ColumnType } from '../column';
import { TableContext } from '../context';
import styles from './header.module.scss';

interface HeaderProps<T extends object> {
  onToggleSearchBar?: () => void;
  isOnCheckedRowsAvailable: boolean;
  isSearchVisible: boolean;
  filterIcon?: React.ReactNode;
  columns: ColumnType<T>[];
  isIndeterminate: boolean;
}

const Header = <T extends object>({
  onToggleSearchBar,
  isOnCheckedRowsAvailable,
  isSearchVisible,
  filterIcon,
  columns,
  isIndeterminate,
}: HeaderProps<T>) => {
  const { onCheckAllRows, isAllRowsChecked } = useContext(TableContext);

  return (
    <tr>
      <th>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {isOnCheckedRowsAvailable ? (
            <div className={styles['select-all']}>
              <CheckBox
                mode='light'
                checked={isAllRowsChecked}
                onChange={onCheckAllRows}
                indeterminate={isIndeterminate}
              />
            </div>
          ) : null}

          <div style={{ height: 24 }} className={styles['search']}>
            {filterIcon ? (
              filterIcon
            ) : (
              <BaseIcon
                color={
                  isSearchVisible
                    ? Colors.color_secondary_2
                    : Colors.color_primary_6
                }
                onClick={onToggleSearchBar}
                name='Table-_-Filter'
                size={{ width: 14, height: 14 }}
              />
            )}
          </div>
        </div>
      </th>
      {columns.map(({ dataIndex, title, sorter, style }) => {
        return (
          <Column
            key={dataIndex as string}
            dataIndex={dataIndex}
            title={title}
            sorter={sorter}
            style={style}
          />
        );
      })}
      <th />
    </tr>
  );
};

export { Header };
