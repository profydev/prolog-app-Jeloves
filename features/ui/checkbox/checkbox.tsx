import { InputHTMLAttributes, LabelHTMLAttributes } from "react";
import classNames from "classnames";
import styles from "./checkbox.module.scss";

export type CheckboxPropsType = {
  label: LabelHTMLAttributes<HTMLLabelElement>;
  input: InputHTMLAttributes<HTMLInputElement>;
  size: string;
};

export function Checkbox(props: CheckboxPropsType) {
  const { label, input, size } = props;

  const labelClasses = {
    [styles.label]: true,
    [styles[size]]: size,
  };

  return (
    <>
      <input
        {...input}
        type="checkbox"
        id="checkboxID"
        className={styles.input}
      />
      <label
        {...label}
        htmlFor="checkboxID"
        className={classNames(labelClasses)}
      ></label>
    </>
  );
}
