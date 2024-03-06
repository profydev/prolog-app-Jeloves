import classNames from "classnames";
import { ButtonHTMLAttributes } from "react";
import styles from "./button.module.scss";

export type ButtonPropsType = {
  button: ButtonHTMLAttributes<HTMLButtonElement>;
  size: string;
  color: string;
  icon: string;
};

export function Button(props: ButtonPropsType) {
  const { size, color, icon } = props;

  const classes = {
    [styles.btn]: true,
    [styles[size]]: size,
    [styles[color]]: color,
    [styles[icon]]: icon,
  };

  return <button className={classNames(classes)}>Button CTA</button>;
}
