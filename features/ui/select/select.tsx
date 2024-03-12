import classNames from "classnames";
import styles from "./select.module.scss";
import { useState } from "react";

// icon, label, hint, error
export type SelectPropsType = {
  options: string[];
  emptySelectionText: string;
  icon: string | null;
  label: string | null;
  hint: string | null;
  error: string | null;
};

export function Select(props: SelectPropsType) {
  const { options, emptySelectionText, icon, label, hint, error } = props;

  const [isShowingOptions, setIsShowingOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState(emptySelectionText);

  const handleShowOptionsClick = () => {
    setIsShowingOptions(!isShowingOptions);
  };

  const handleSelectOptionClick = (index: number) => {
    const clickedOption: string = options[index];
    if (selectedOption === clickedOption) {
      setSelectedOption(emptySelectionText);
    } else {
      setSelectedOption(clickedOption);
    }
  };

  const selectElement = (
    <select className={styles.select} id="selectID">
      <>
        {options.map((opt, index) => (
          <option key={index} value={opt}>
            {opt}
          </option>
        ))}
      </>
    </select>
  );

  const iconElement = (
    // eslint-disable-next-line @next/next/no-img-element
    <img alt="icon" src={icon ? icon : ""}></img>
  );

  const labelElement = (
    <label className={styles.label} htmlFor="selectID">
      {label}
    </label>
  );

  const hintElement = error ? (
    <span className={classNames(styles.hint, styles.error)}>{error}</span>
  ) : (
    <span className={styles.hint}>{hint}</span>
  );

  const selectContentClasses = {
    [styles.selectContent]: true,
    [styles.error]: error ? true : false,
  };

  const selectContentElement = (
    <div
      className={classNames(selectContentClasses)}
      onClick={handleShowOptionsClick}
    >
      {icon !== null && iconElement}
      <span
        className={classNames(
          styles.selectText,
          selectedOption === emptySelectionText && styles.empty,
        )}
      >
        {selectedOption}
      </span>
      {/*eslint-disable-next-line @next/next/no-img-element*/}
      <img
        alt="drop-down button"
        src={
          isShowingOptions ? "/icons/chevron-up.svg" : "/icons/chevron-down.svg"
        }
      />
    </div>
  );

  const optionsContainer = (
    <div className={styles.optionsContainer}>
      {options.map((opt, index) => (
        <div
          key={index}
          className={
            selectedOption === opt
              ? classNames(styles.optionsContent, styles.optionSelected)
              : styles.optionsContent
          }
          onClick={() => {
            handleSelectOptionClick(index);
          }}
        >
          {icon !== null && iconElement}
          <span key={index} className={styles.option}>
            {opt}
          </span>
          {selectedOption === opt && (
            // eslint-disable-next-line @next/next/no-img-element
            <img alt="option selected" src="/icons/check-thin.svg"></img>
          )}
        </div>
      ))}
    </div>
  );

  return (
    <div className={styles.selectContainer}>
      {label !== null && labelElement}
      {selectElement}
      {selectContentElement}
      {isShowingOptions && optionsContainer}

      {/* If a hint || error exists, will display the hint element */}
      {/* UNLESS the select-options are showing */}
      {(hint !== null || error !== null) && !isShowingOptions && hintElement}
    </div>
  );
}
