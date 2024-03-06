import classNames from "classnames";
import { ButtonHTMLAttributes } from "react";
import styles from "./button.module.scss";

export type ButtonPropsType = {
  button: ButtonHTMLAttributes<HTMLButtonElement>;
  size: string;
  color: string;
  text: string | null;
  iconPosition: string | null;
  iconSrc: string | null;
};

export function Button2(props: ButtonPropsType) {
  const { button, size, color, text, iconPosition, iconSrc } = props;

  const classes = {
    [styles.btn]: true,
    [styles[size]]: size,
    [styles[color]]: color,
  };

  if (iconPosition === "only") {
    classes[styles.iconOnly] = true;
  }

  const buttonTextElement = <span>{text}</span>;
  const iconElement = iconSrc ? (
    // eslint-disable-next-line @next/next/no-img-element
    <img className={styles.icon} src={iconSrc} alt="button icon" />
  ) : null;

  return (
    <button {...button} className={classNames(classes)}>
      {iconPosition === "leading" && (
        <>
          {iconElement}
          {buttonTextElement}
        </>
      )}
      {iconPosition === "trailing" && (
        <>
          {buttonTextElement}
          {iconElement}
        </>
      )}
      {iconPosition === "only" && <>{iconElement}</>}
      {iconPosition === null && <>{buttonTextElement}</>}
    </button>
  );
}
