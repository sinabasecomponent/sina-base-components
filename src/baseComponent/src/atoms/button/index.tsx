import classNames from "classnames";
import { FC, MouseEventHandler, ReactNode } from "react";
import styles from "./button.module.scss";

export interface ButtonProps {
  children: ReactNode | ReactNode[];
  className?: string;
  onClick?: MouseEventHandler<HTMLElement> | undefined;
  type?: "submit" | "button";
  formId?: string;
}

const Button: FC<ButtonProps> = ({
  children,
  className,
  onClick,
  type,
  formId,
}) => {
  return (
    <button
      className={classNames(styles["button"], className)}
      type={type}
      onClick={onClick ?? onClick}
      form={formId}
    >
      {children}
    </button>
  );
};
export { Button };
