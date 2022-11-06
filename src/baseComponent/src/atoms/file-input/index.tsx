import { PlusIcon } from "assets/icons";
import classNames from "classnames";
import { FC } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import styles from "./file-input.module.scss";
import useFileInput from "./useFileInput";

interface Props {
  register: UseFormRegisterReturn;
  className?: string;
  fileType: string;
}

const FileInput: FC<Props> = ({ register, className, fileType }) => {
  const { label, fileChangeHandler } = useFileInput(register);

  return (
    <div className={classNames(styles["file-input"], className)}>
      <label htmlFor={register.name}>{register.name}</label>
      <label className={styles["file-input__file-chooser"]}>
        {label ?? (
          <>
            <PlusIcon className={styles["file-input__icon"]} /> Add File
          </>
        )}
        <input
          {...register}
          onChange={fileChangeHandler}
          accept={fileType}
          type="file"
          id="formId"
          hidden
        />
      </label>
    </div>
  );
};
export default FileInput;
