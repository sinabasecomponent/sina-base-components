interface GroupProps {
  children?: React.ReactNode;
  value: string;
}

const Group = ({ children }: GroupProps) => {
  return <div>{children}</div>;
};

export { Group };
