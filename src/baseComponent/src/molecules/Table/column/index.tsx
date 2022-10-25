import { ReactNode, useContext } from "react";
import { DEFAULT_ALIGN } from "..";
import { BaseIcon, Text } from "../../../atoms";
import { Colors } from "../../../colors";
import { TableContext } from "../context";

export interface ColumnProps<
  T extends Record<string, any>,
  TChild extends T = T,
  TIndex extends keyof T = keyof T,
> {
  dataIndex: TIndex;
  children?: ReactNode;
  onPress?: () => void;
  className?: string;
  sorter?: (a: T | TChild, b: T | TChild) => number;
  style?: React.CSSProperties;
  contentStyle?: React.CSSProperties;
  sorterIconSize?: number;
  width?: number;
  align?: "start" | "center" | "end";
  renderFilter?: (data: { data: T[] }) => ReactNode;
  render?: (
    data:
      | {
          value: T[TIndex];
          row: T;
          index: number;
          data: T[];
          isTree?: false;
          parentRow?: undefined;
        }
      | {
          value: TChild[TIndex];
          row: TChild;
          isTree: true;
          parentRow: T;
          index: number;
          data: T[];
        },
  ) => ReactNode;
  testID?: string;
}

const Column = <T extends Record<string, any>>({
  children,
  dataIndex,
  // width,
  sorter,
  // onPress,
  // className,
  style,
  // contentStyle
  // sorterIconSize,
  // testID,
  align = DEFAULT_ALIGN,
}: ColumnProps<T>) => {
  const { onOrderChange, order, orderBy } = useContext(TableContext);

  // const commonClasses = useCommonStyle("muscles");
  // const { isSmallerThanMedium } = useObserveWindow();
  // const classes = useStyles();
  // const { accent, onBackgroundLight, primaryLight } = useColors();
  // const { order, orderBy } = SortStore.useState();
  // const dispatch = SortStore.useDispatch();
  // const { headerStyles, headerHeight, headerWrapperStyles } =
  //   useContext(AditionalContext);
  const isAscending = orderBy === dataIndex && order === "ascending";
  const isDescending = orderBy === dataIndex && order === "descending";

  // const onSort = () => {
  //   onPress?.();
  //   if (sorter) {
  //     dispatch(changeOrder(dataIndex));
  //   }
  // };

  const onSort = () => {
    // onPress?.();
    if (sorter) {
      onOrderChange({ dataIndex });
    }
  };

  return (
    <th
      // className={classNames(
      //   classes.headerCell,
      //   !isSmallerThanMedium && classes.containerBiggerThanMedium,
      //   isSmallerThanMedium && classes.containerMedium,
      //   className,
      // )}
      style={{ ...style, height: "100%", padding: 0 }}
    >
      <div
        //   className={classNames(commonClasses.flexRow)}
        style={{
          display: "flex",
          height: 45,
          lineHeight: `${45}px`,
          justifyContent:
            align === "center"
              ? "center"
              : align === "start"
              ? "flex-start"
              : "flex-end",
          // width,
        }}
        onClick={onSort}
      >
        {typeof children !== "object" ? (
          <Text
            theme="Medium"
            color={Colors.white}
            //   color={accent}
            //   style={{
            //     ...headerStyles,
            //   }}
          >
            {children}
          </Text>
        ) : (
          children
        )}
        {sorter ? (
          isDescending ? (
            <BaseIcon name={"Table_Sort-Icon_A-to-Z"} />
          ) : isAscending ? (
            <BaseIcon name="Table_Sort-Icon_Z-to-A" />
          ) : (
            <BaseIcon name="Table_Sort-Icon_OFF" />
          )
        ) : null}
      </div>
    </th>
  );
};

export { Column };
