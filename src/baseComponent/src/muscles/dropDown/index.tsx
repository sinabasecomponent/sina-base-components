// import { ArrowIcon } from "assets/icons";
import classNames from "classnames";
import {
  PropsWithChildren,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import { BaseIcon, SearchBox } from "../../atoms";
import { Button } from "../../molecules/button";
import styles from "./dropDown.module.scss";

export interface DropDownProps<T> {
  placeholder: string | ReactNode;
  options: { value: T; label: string }[];
  onChange?: (value: T) => void;
  className?: string;
}

function DropDown<T>({
  placeholder,
  options = [],
  onChange,
  className = "",
}: PropsWithChildren<DropDownProps<T>>) {
  const [isOpen, setOpen] = useState(false);
  const [filteredList, setFilteredList] = useState(options);

  const overlayRef = useRef<HTMLDivElement | null>(null);

  const searchHandler = (input: string) => {
    if (!input.length) {
      return setFilteredList(options);
    }
    setFilteredList(options.filter((option) => option.label.includes(input)));
  };

  const selectItemHandler = (value: T) => {
    if (onChange) {
      onChange(value);
      setOpen(false);
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (!overlayRef.current) return;
    if (!overlayRef.current.contains(event.target as Node)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div ref={overlayRef} className={classNames(styles["dropdown"], className)}>
      <Button
        className={styles["dropdown__button"]}
        onClick={() => setOpen((prev) => !prev)}
      >
        {placeholder}
        <div className={styles["dropdown__icon--down"]}>
          <BaseIcon
            name="Tree-View_Flesh-Icon-for-next-level"
            //   className={styles["dropdown__icon--down"]}
          />
        </div>
      </Button>
      {isOpen && (
        <div className={styles["dropdown__overlay"]}>
          <SearchBox
            searchHandler={searchHandler}
            searchTitle=""
            className={styles["dropdown__searchbox"]}
          />
          {filteredList.map((option) => (
            <div
              key={option.label}
              className={styles["dropdown__item"]}
              onClick={() => selectItemHandler(option.value)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
export { DropDown };
