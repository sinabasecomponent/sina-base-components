import classNames from "classnames";
import { FC } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import styles from "./text-input.module.scss";

export interface TextInputProps {
  name?: string;
  register?: UseFormRegisterReturn;
  className?: string;
}

const TextInput: FC<TextInputProps> = ({ name, register, className }) => {
  return (
    <div className={classNames(styles["text-input"], className)}>
      <label htmlFor={name}>{name}</label>
      <input type="text" {...register} />
    </div>
  );
};
export { TextInput };
