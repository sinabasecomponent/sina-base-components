// import { CloseIcon } from "assets/icons";
import classNames from "classnames";
import {
  FC,
  MouseEvent,
  ReactElement,
  useEffect,
  useRef,
  useState,
} from "react";
import { BaseIcon } from "../../atoms";
import { Button } from "../../molecules/button";
import styles from "./confirmationDialog.module.scss";

export interface ConfirmationDialogProps {
  message: string;
  title: string;
  onOkClicked?: () => void;
  onClose?: () => void;
  className?: string;
  children: ReactElement;
  okButtonOptions?: { type: "submit" | "button"; formId: string };
  containerId?: string;
}

const ConfirmationDialog: FC<ConfirmationDialogProps> = ({
  message,
  title,
  onOkClicked,
  onClose,
  className = "",
  children,
  okButtonOptions,
  containerId,
}) => {
  const [isShow, setShow] = useState(false);
  const dialogBoxRef = useRef<HTMLDivElement | null>(null);

  const handleClickOutside = (event: MouseEvent<HTMLDivElement>) => {
    if (!dialogBoxRef.current) return;
    if (!dialogBoxRef.current.contains(event.target as Node)) {
      setShow(false);
    }
  };

  useEffect(() => {
    if (!isShow) return;
    if (okButtonOptions?.formId) {
      const form = document.getElementById(okButtonOptions.formId);
      form?.addEventListener("submit", okHandler);
    }
    if (!containerId) return;
    const container = document.getElementById(containerId);
    if (!container) return;
    container.style.position = "relative";
    return () => {
      if (okButtonOptions) {
        document
          .getElementById(okButtonOptions.formId)
          ?.removeEventListener("submit", okHandler);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isShow]);

  const showHandler = () => {
    setShow(true);
  };

  const okHandler = () => {
    setShow(false);
    onOkClicked && onOkClicked();
  };

  const closeHandler = () => {
    setShow(false);
    onClose && onClose();
  };

  return (
    <>
      {isShow && (
        <div
          className={classNames(styles["dialog"], className)}
          onClick={handleClickOutside}
        >
          <div className={styles["dialog__box"]} ref={dialogBoxRef}>
            <div className={styles["dialog__box__close"]}>
              <BaseIcon
                size={16}
                onClick={closeHandler}
                name="Every-Boxes-_-Cross-Icon"
              />
            </div>
            <div className={styles["dialog__title"]}>
              <span>{title}</span>
            </div>
            <div className={styles["dialog__message"]}>{message}</div>
            <div className={styles["dialog__buttons"]}>
              <Button
                onClick={closeHandler}
                className={styles["dialog__buttons__cancel"]}
              >
                Cancel
              </Button>
              <Button
                onClick={onOkClicked ? okHandler : undefined}
                className={styles["dialog__buttons__ok"]}
                {...okButtonOptions}
              >
                OK
              </Button>
            </div>
          </div>
        </div>
      )}
      <div onClick={() => showHandler()}>{children}</div>
    </>
  );
};
export { ConfirmationDialog };
