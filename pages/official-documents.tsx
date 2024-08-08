import Navbar from "@/components/Navbar";
import { fetchNavData } from "@/lib/fetchNavData";
import { GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/official-documents.module.css";
import { Button } from "@mui/material";
import arrowWhite from "../public/arrow_forward_white.svg";
import Link from "next/link";

export const getStaticProps: GetStaticProps<NavProps> = async () => {
  const navData = await fetchNavData();
  return {
    props: {
      navData,
    },
  };
};

export default function OfficialDocuments({ navData }: NavProps) {
  return (
    <>
      <Head>
        <title>Satakuntalainen Osakunta</title>
        <link
          rel="icon"
          href="/new-sato-website/public/favicon.ico"
          type="image/x-icon"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <main className={styles.main}>
        <Navbar navData={navData} />
        <header className={styles.header}>
          <div className={styles.headerContainer}>
            <h1>Viralliset Documentit</h1>
            <p className={styles.headerText}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor
              doloribus impedit sapiente ipsum rerum neque consequatur tempore,
              sit repellat unde, enim veniam accusantium minima molestias?
              Obcaecati quis doloribus quae nesciunt?
            </p>
          </div>
        </header>
        <section className={styles.documentSection}>
          <dl className={styles.documentList}>
            <dt className={styles.h3}>Rules</dt>
            <dd>
              <a href="" className={styles.documentLink}>
                Rules 2011
              </a>
            </dd>
            <dt className={styles.h3}>Old Rules</dt>
            <dd>
              <a href="" className={styles.documentLink}>
                Rules 2007
              </a>
            </dd>
            <dd>
              <a href="" className={styles.documentLink}>
                Rules 2004
              </a>
            </dd>
            <dd>
              <a href="" className={styles.documentLink}>
                Rules at the time of <br /> the cooperative building
              </a>
            </dd>
          </dl>
          <dl className={styles.documentList}>
            <dt className={styles.h3}>Regulations</dt>
            <dd>
              <a href="" className={styles.documentLink}>
                Guidelines 2020
              </a>
            </dd>
            <dt className={styles.h3}>Old Regulations</dt>
            <dd>
              <a href="" className={styles.documentLink}>
                Guidelines 2019
              </a>
            </dd>
            <dd>
              <a href="" className={styles.documentLink}>
                Guidelines 2017
              </a>
            </dd>
            <dd>
              <a href="" className={styles.documentLink}>
                Guidelines 2016
              </a>
            </dd>
            <dd>
              <a href="" className={styles.documentLink}>
                Guidelines 2011
              </a>
            </dd>
          </dl>
          <dl className={styles.documentList}>
            <dt className={styles.h3}>Other Documents</dt>
            <dd>
              <a href="" className={styles.documentLink}>
                Equality Plan
              </a>
            </dd>
            <dd>
              <a href="" className={styles.documentLink}>
                SatO Safe Space
              </a>
            </dd>
            <dd>
              <a href="" className={styles.documentLink}>
                Environmental plan
              </a>
            </dd>
            <dt className={styles.h3}>Dormitory</dt>
            <dd>
              <a href="" className={styles.documentLink}>
                Dormitory Regulations
              </a>
            </dd>
          </dl>
        </section>
        <section className={styles.externalRef}>
          <div className={styles.proceedingsContainer}>
            <h3 className={styles.h3}>Proceedings</h3>
            <Button variant="contained" className={styles.proceedingsBtn}>
              See proceedings <br /> (SatO login required)
              <Image src={arrowWhite} alt="arrow forward"></Image>
            </Button>
          </div>
          <p className={styles.archiveRedirect}>
            Looking for the Satakunta series or Maila Talvio&apos;s collected
            works? You can now find them on the
            <Link href="archive" className={styles.documentLink}>
              {" "}
              Archive
            </Link>{" "}
            page!
          </p>
        </section>
        <footer className={styles.footer}></footer>
      </main>
    </>
  );
}
