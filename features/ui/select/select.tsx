import styles from "./select.module.scss";

// icon, label, hint, error
export type SelectPropsType = {
  icon: string | null;
};

export function Select(props: SelectPropsType) {
  const { icon } = props;

  const iconElement = icon ? (
    // eslint-disable-next-line @next/next/no-img-element
    <img className={styles.icon} alt="icon" src={icon}></img>
  ) : null;

  const handleOnClick = () => {
    alert("hello");
  };
  return (
    <div>
      <label htmlFor="selectID">Team member</label>
      <div className={styles.content} onClick={handleOnClick}>
        {iconElement}
        <span className={styles.text}>Select team member</span>
        {/*eslint-disable-next-line @next/next/no-img-element*/}
        <img
          className={styles.dropdownButton}
          alt="drop-down button"
          src="/icons/chevron-down.svg"
        ></img>
      </div>
      <span className={styles.hint}>This is a hint text to help user.</span>
    </div>
  );
}
