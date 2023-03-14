import classNames from "classnames";
import React from "react";
import { Colors } from "../../colors";
import styles from "./loading.module.scss";
import { Spinner } from "./spinner";

export interface LoadingProps {
  children?: React.ReactNode;
  isLoading?: boolean;
  spinnerColor?: Colors;
  size?: "small" | "medium" | "large";
}

const Loading = ({ children, isLoading, spinnerColor, size }: LoadingProps) => {
  if (children === undefined) {
    return <Spinner spinerColor={spinnerColor} size={size} />;
  } else {
    return (
      <div style={{ position: "relative", height: "100%" }}>
        {isLoading ? (
          <div
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              zIndex: 2,
              top: 0,
              left: 0,
            }}
          >
            <div
              style={{
                display: "inline-block",
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <Spinner spinerColor={spinnerColor} size={size} />
            </div>
          </div>
        ) : null}

        <div
          className={classNames(
            styles["spin-container"],
            isLoading && styles["spin-container--loading"],
          )}
        >
          {children}
        </div>
      </div>
    );
  }
};

export { Loading };
