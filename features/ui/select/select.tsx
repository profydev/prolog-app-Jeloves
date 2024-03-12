import styles from "./select.module.scss";

// icon, label, hint, error
export type SelectPropsType = {
  icon: string | null;
};

export function Select(props: SelectPropsType) {
  const { icon } = props;

  // eslint-disable-next-line @next/next/no-img-element
  const iconElement = (
    <img className={styles.icon} alt="icon" src={icon ? icon : ""}></img>
  );

  const handleOnClick = () => {
    alert("hello");
  };
  return (
    <div className={styles.container}>
      <label className={styles.label} htmlFor="selectID">
        Team member
      </label>
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
      <span className={styles.hint}>This is a hint text to help user.</span>
      <select className={styles.select} id="selectID">
        <option value="blue"></option>
        <option value="red"></option>
        <option value="green"></option>
      </select>
    </div>
  );
}
