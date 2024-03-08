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

  const labelTextElement = <span className={styles.labelText}>{text}</span>;

  // When :disabling this component, only <input> must be disabled.
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
      >
        {text !== null && <>{labelTextElement}</>}
      </label>
    </>
  );
}
