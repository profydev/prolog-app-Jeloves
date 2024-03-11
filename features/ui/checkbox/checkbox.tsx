import {
  InputHTMLAttributes,
  LabelHTMLAttributes,
  useRef,
  useState,
} from "react";
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

  const [status, setStatus] = useState<
    "checked" | "indeterminate" | "unchecked"
  >("unchecked");
  const inputReference = useRef<HTMLInputElement>(null);
  const onClick = () => {
    switch (status) {
      case "unchecked":
        setStatus("checked");
        break;
      case "checked":
        setStatus("indeterminate");
        inputReference.current!.indeterminate = true;
        break;
      case "indeterminate":
        setStatus("unchecked");
        inputReference.current!.indeterminate = false;
        break;
    }
  };

  const labelClasses = {
    [styles.label]: true,
    [styles[size]]: size,
    [styles[status]]: status,
  };
  const labelTextElement = <span className={styles.labelText}>{text}</span>;
  console.log(status);
  // When :disabling this component, only <input> must be disabled.
  return (
    <>
      <input
        {...input}
        ref={inputReference}
        type="checkbox"
        id="checkboxID"
        className={styles.input}
      />
      <label
        {...label}
        htmlFor="checkboxID"
        className={classNames(labelClasses)}
        onClick={onClick}
      >
        {text !== null && <>{labelTextElement}</>}
      </label>
    </>
  );
}
