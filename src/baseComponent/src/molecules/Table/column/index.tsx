import { ReactNode } from "react";
import { Text } from "../../../atoms";

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
  width,
  sorter,
  onPress,
  className,
  style,
  contentStyle,
  sorterIconSize,
  testID,
  align = "start",
}: ColumnProps<T>) => {
  // const commonClasses = useCommonStyle("muscles");
  // const { isSmallerThanMedium } = useObserveWindow();
  // const classes = useStyles();
  // const { accent, onBackgroundLight, primaryLight } = useColors();
  // const { order, orderBy } = SortStore.useState();
  // const dispatch = SortStore.useDispatch();
  // const { headerStyles, headerHeight, headerWrapperStyles } =
  //   useContext(AditionalContext);
  // const isAscending = orderBy === dataIndex && order === "ascending";
  // const isDescending = orderBy === dataIndex && order === "descending";

  // const onSort = () => {
  //   onPress?.();
  //   if (sorter) {
  //     dispatch(changeOrder(dataIndex));
  //   }
  // };

  return (
    <td
      // className={classNames(
      //   classes.headerCell,
      //   !isSmallerThanMedium && classes.containerBiggerThanMedium,
      //   isSmallerThanMedium && classes.containerMedium,
      //   className,
      // )}
      style={{ ...style, textAlign: "center" }}
    >
      <div
        //   className={classNames(commonClasses.flexRow)}
        style={{
          height: 45,
          lineHeight: `${45}px`,
          justifyContent:
            align === "center"
              ? "center"
              : align === "start"
              ? "flex-start"
              : "flex-end",
          width,
        }}
        //   onPress={onSort}
      >
        {typeof children !== "object" ? (
          <Text
            theme="Regular"
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
        {/* {sorter && (
            <View
              testID={
                testID ? `${testID}-${dataIndex.toString()}-sort` : undefined
              }
            >
              <MaterialCommunityIcon
                size={sorterIconSize || 14}
                name="menu-up"
                color={isAscending ? primaryLight : onBackgroundLight}
                style={{ height: 6, marginTop: -4 }}
              />
              <MaterialCommunityIcon
                size={sorterIconSize || 14}
                name="menu-down"
                color={isDescending ? primaryLight : onBackgroundLight}
                style={{ height: 5 }}
              />
            </View>
          )} */}
      </div>
    </td>
  );
};

export { Column };
