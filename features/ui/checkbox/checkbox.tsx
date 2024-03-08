import { InputHTMLAttributes, LabelHTMLAttributes } from "react";
import classNames from "classnames";
import styles from "./checkbox.module.scss";

export type CheckboxPropsType = {
  label: LabelHTMLAttributes<HTMLLabelElement>;
  input: InputHTMLAttributes<HTMLInputElement>;
  size: string;
  text: string;
};

export function Checkbox(props: CheckboxPropsType) {
  const { label, input, size, text } = props;

  const labelClasses = {
    [styles.label]: true,
    [styles[size]]: size,
  };

  const spanClasses = {
    [styles.labelText]: true,
    [styles[size]]: size,
  };

  const labelEl = (
    <label
      {...label}
      htmlFor="checkboxID"
      className={classNames(labelClasses)}
    ></label>
  );
  const spanEl = <span className={classNames(spanClasses)}>{text}</span>;

  return (
    <div className={styles.checkboxContainer}>
      <input
        {...input}
        type="checkbox"
        id="checkboxID"
        className={styles.input}
      />
      {text ? (
        <>
          {labelEl}
          {spanEl}
        </>
      ) : (
        <>{labelEl}</>
      )}
    </div>
  );
}
