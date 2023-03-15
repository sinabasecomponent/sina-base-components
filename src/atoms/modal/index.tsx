import classNames from "classnames";
import React, { useEffect, useMemo, useState } from "react";
import ReactDOM from "react-dom";
import { useOnClickOutSide } from "../../utils/useOnclickOutsiede";
import styles from "./modal.module.scss";

interface ModalProps {
  getContainer?: HTMLElement;
  isVisible: boolean;
  onClose?: () => void;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
  centered?: boolean;
  destroyOnClose?: boolean;
}

const Modal = ({
  getContainer,
  isVisible,
  onClose,
  children,
  style,
  className,
  centered,
  destroyOnClose,
}: ModalProps) => {
  const [bodyRef, setBodyRef] = useState<HTMLElement | null>(null);
  const [modalRef, setModalRef] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    setBodyRef(document.body);
  }, []);

  const modalContainerElement = useMemo(() => {
    if (
      getContainer &&
      getContainer?.style.position &&
      getContainer?.style.position !== "static"
    ) {
      return getContainer;
    } else return bodyRef;
  }, [getContainer, bodyRef]);

  const drawerPositionStrategy: React.CSSProperties["position"] =
    modalContainerElement?.localName === "body" ? "fixed" : "absolute";

  const mask = <div className={styles["mask"]} />;
  const content = (
    <div
      ref={setModalRef}
      className={classNames(
        styles["modal-container"],
        centered && styles["centerd"],
        className,
      )}
      style={{
        position: drawerPositionStrategy,
        display: isVisible ? "block" : "none",
        ...style,
      }}
    >
      {children}
    </div>
  );

  useOnClickOutSide({
    element: modalRef,
    handler() {
      onClose?.();
    },
  });

  return (
    <>
      {modalContainerElement ? (
        <>
          {ReactDOM.createPortal(
            <>
              {isVisible ? mask : null}
              {!isVisible && destroyOnClose ? null : content}
            </>,
            modalContainerElement,
          )}
        </>
      ) : null}
    </>
  );
};

export { Modal };
