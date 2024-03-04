import styles from "./footer.module.scss";
import Link from "next/link";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.linksContainer}>
          <Link href="#" className={styles.link} data-testid="footer-link">
            Docs
          </Link>
          <Link href="#" className={styles.link} data-testid="footer-link">
            API
          </Link>
          <Link href="#" className={styles.link} data-testid="footer-link">
            Help
          </Link>
          <Link href="#" className={styles.link} data-testid="footer-link">
            Community
          </Link>
        </div>
        <div className={styles.logoWrap}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/icons/logo-small.svg"
            alt="logo"
            data-testid="footer-logo"
          ></img>
        </div>
        <p className={styles.version}>Version: {process.env.appVersion}</p>
      </div>
    </footer>
  );
}
