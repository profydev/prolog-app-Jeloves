import styles from "./error-screen.module.scss";
import { Button } from "@features/ui";

export type ErrorScreenProps = {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export function ErrorScreen({ onClick }: ErrorScreenProps) {
  return (
    <div className={styles.errorContainer}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/icons/alert-circle.svg"
        alt="alert icon"
        data-testid="alert-icon"
      />
      <div className={styles.errorContent}>
        <p className={styles.errorText}>
          There was a problem while loading the project data
        </p>
        <Button className={styles.retry} onClick={onClick}>
          <p>Try Again</p>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/icons/arrow-right.svg"
            alt="retry button icon"
            data-testid="retry-icon"
          />
        </Button>
      </div>
    </div>
  );
}
