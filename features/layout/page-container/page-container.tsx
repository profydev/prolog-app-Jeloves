import Head from "next/head";
import { SidebarNavigation } from "../sidebar-navigation";
import styles from "./page-container.module.scss";
import Link from "next/link";

type PageContainerProps = {
  children: React.ReactNode;
  title: string;
  info: string;
};

export function PageContainer({ children, title, info }: PageContainerProps) {
  const documentTitle = `ProLog - ${title}`;

  return (
    <div className={styles.container}>
      <Head>
        <title>{documentTitle}</title>
        <meta name="description" content="Error monitoring" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SidebarNavigation />
      <main className={styles.main}>
        <div className={styles.contentContainer}>
          <h1 className={styles.title}>{title}</h1>
          <div className={styles.info}>{info}</div>
          {children}
        </div>
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
      </main>
    </div>
  );
}
