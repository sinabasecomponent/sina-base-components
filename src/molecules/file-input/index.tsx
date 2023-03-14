import classNames from "classnames";
import { FC } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { BaseIcon } from "../../atoms/baseIcon";
import styles from "./file-input.module.scss";
import useFileInput from "./useFileInput";

export interface FileInputProps {
  register?: UseFormRegisterReturn;
  className?: string;
  fileType?: string;
}

const FileInput: FC<FileInputProps> = ({ register, className, fileType }) => {
  const { label, fileChangeHandler } = useFileInput(register);

  return (
    <div className={classNames(styles["file-input"], className)}>
      <label htmlFor={register?.name}>{register?.name}</label>
      <label className={styles["file-input__file-chooser"]}>
        {label ?? (
          <>
            <BaseIcon name="Add-Box_Add-Icon" />
            Add File
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
export { FileInput };
