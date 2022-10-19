/* eslint-disable react/jsx-key */
// import { RowInteractionContext } from "../context";
// import { useStyles } from "./styles";

interface RowProps extends React.HTMLAttributes<HTMLTableRowElement> {
  children?: React.ReactNode;
  isExpanded?: boolean;
  testID?: string;
}

const Row = ({ className, testID, ...rest }: RowProps) => {
  //   const classes = useStyles();

  //   const { eventHandlers, isHovered } = useContext(RowInteractionContext);

  return (
    <tr
      {...rest}
      //   {...eventHandlers()}
      //   className={classNames(
      //     classes.container,
      //     // isHovered && classes.expanded,
      //     className,
      //   )}
      //   data-testid={testID}
    />
  );
};

export { Row };
