import styles from "./select.module.scss";

// icon, label, hint, error
export type SelectPropsType = {
  label: string | null;
  icon: string | null;
  hint: string | null;
  error: string | null;
};

export function Select() {
  const handleOnClick = () => {
    alert("hello");
  };
  return (
    <div>
      <label htmlFor="selectID">Team member</label>
      <div className={styles.content} onClick={handleOnClick}>
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
