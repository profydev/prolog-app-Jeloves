import styles from "./select.module.scss";

// icon, label, hint, error
export type SelectPropsType = {
  icon: string | null;
  label: string | null;
  hint: string | null;
};

export function Select(props: SelectPropsType) {
  const { icon, label, hint } = props;

  const iconElement = (
    // eslint-disable-next-line @next/next/no-img-element
    <img className={styles.icon} alt="icon" src={icon ? icon : ""}></img>
  );

  const labelElement = (
    <label className={styles.label} htmlFor="selectID">
      {label}
    </label>
  );

  const hintElement = <span className={styles.hint}>{hint}</span>;

  const handleOnClick = () => {
    alert("hello");
  };
  return (
    <div className={styles.container}>
      {label !== null && labelElement}
      <div className={styles.content} onClick={handleOnClick}>
        {icon !== null && iconElement}
        <span className={styles.text}>Select team member</span>
        {/*eslint-disable-next-line @next/next/no-img-element*/}
        <img
          className={styles.dropdownButton}
          alt="drop-down button"
          src="/icons/chevron-down.svg"
        ></img>
      </div>
      {icon !== null && hintElement}
      <select className={styles.select} id="selectID">
        <option value="blue"></option>
        <option value="red"></option>
        <option value="green"></option>
      </select>
    </div>
  );
}
