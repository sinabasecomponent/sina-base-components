import { useStyles } from "./style";
const CustomCircle = ({
  borderColor,
  backgroundColor,
}: {
  borderColor: string | undefined;
  backgroundColor: string | undefined;
}) => {
  const classes = useStyles();
  return (
    <div
      className={classes["outterCircle"]}
      style={{
        border: `1px solid ${borderColor}`,
      }}
    >
      <div
        className={classes["innerCircle"]}
        style={{
          backgroundColor: backgroundColor,
        }}
      />
    </div>
  );
};

export { CustomCircle };
