import classNames from "classnames";
import React, { InputHTMLAttributes } from "react";
import TextInputState from "./testInputState";
import styles from "./text-input.module.scss";

export interface TextInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "className"> {
  label?: string;
  className?: string;
  onKeyPress?: (e: any) => void;
  onSubmitEditing?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  blurOnSubmit?: boolean;
  clearTextOnFocus?: boolean;
  selectTextOnFocus?: boolean;
}

function isEventComposing(nativeEvent: any) {
  return nativeEvent.isComposing || nativeEvent.keyCode === 229;
}

const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(
  (
    {
      label,
      className,
      onKeyPress,
      blurOnSubmit,
      onSubmitEditing,
      onBlur,
      onFocus,
      clearTextOnFocus,
      selectTextOnFocus,
      ...rest
    },
    forwardRef,
  ) => {
    function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
      const hostNode = e.target;
      // Prevent key events bubbling (see #612)
      e.stopPropagation();
      const shouldBlurOnSubmit = blurOnSubmit;
      const nativeEvent = e.nativeEvent;
      const isComposing = isEventComposing(nativeEvent);
      if (onKeyPress) {
        onKeyPress(e);
      }
      if (
        e.key === "Enter" &&
        !e.shiftKey &&
        // Do not call submit if composition is occuring.
        !isComposing &&
        !e.isDefaultPrevented()
      ) {
        if (blurOnSubmit && onSubmitEditing) {
          // prevent "Enter" from inserting a newline or submitting a form
          e.preventDefault();
          //@ts-ignore
          nativeEvent.text = e.target.value;
          onSubmitEditing(e);
        }
        if (shouldBlurOnSubmit && hostNode != null) {
          //@ts-ignore
          hostNode.blur();
        }
      }
    }

    function handleBlur(e: React.FocusEvent<HTMLInputElement>) {
      // TextInputState._currentlyFocusedNode = null;
      if (onBlur) {
        //@ts-ignore
        e.nativeEvent.text = e.target.value;
        onBlur(e);
      }
    }

    function handleFocus(e: React.FocusEvent<HTMLInputElement>) {
      const hostNode = e.target;
      if (onFocus) {
        //@ts-ignore
        e.nativeEvent.text = hostNode.value;
        onFocus(e);
      }
      if (hostNode != null) {
        TextInputState._currentlyFocusedNode = hostNode;
        if (clearTextOnFocus) {
          hostNode.value = "";
        }
        if (selectTextOnFocus) {
          // Safari requires selection to occur in a setTimeout
          setTimeout(() => {
            hostNode.select();
          }, 0);
        }
      }
    }

    return (
      <div className={classNames(styles["text-input"], className)}>
        <label htmlFor={label}>{label}</label>
        <input
          {...rest}
          type="text"
          ref={forwardRef}
          onKeyDown={handleKeyDown}
          onBlur={handleBlur}
        />
      </div>
    );
  },
);

export { TextInput };
