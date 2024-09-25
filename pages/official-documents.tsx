/* eslint-disable jsx-a11y/anchor-is-valid -- Disable because of a lot of placeholder hrefs */
import Navbar, { NavbarProps } from "@/components/Navbar";
import useTranslate from "@/hooks/useTranslate";
import createClient from "@/lib/cmsClient";
import styles from "@/styles/official-documents.module.css";
import { readItems } from "@directus/sdk";
import { List, ListItem, ListSubheader } from "@mui/material";
import { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";

export const getStaticProps: GetStaticProps<
  OfficialDocumentsPageProps
> = async () => {
  const client = createClient();
  const links = await client.request(readItems("NavigationLink"));
  return {
    props: {
      navBar: {
        links,
      },
    },
  };
};

type OfficialDocumentsPageProps = {
  navBar: NavbarProps;
};

export default function OfficialDocuments({
  navBar,
}: OfficialDocumentsPageProps) {
  const t = useTranslate();

  return (
    <>
      <Head>
        <title>Satakuntalainen Osakunta</title>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Navbar links={navBar.links} />
      <header className="header">
        <div className="headerContainer">
          <h1>{t("nav:officialDocuments")}</h1>
          <p className="headerText">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor
            doloribus impedit sapiente ipsum rerum neque consequatur tempore,
            sit repellat unde, enim veniam accusantium minima molestias?
            Obcaecati quis doloribus quae nesciunt?
          </p>
        </div>
      </header>
      <main className="main">
        <section className={styles.documentSection}>
          <List className={styles.documentList}>
            <ListSubheader className={styles.listSubheading}>
              {t("officialDocuments:rules")}
            </ListSubheader>
            <ListItem>
              <Link
                href="https://julkaisut.satakuntalainenosakunta.fi/saannot/osakunta/saannot-2011.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.documentLink}
              >
                {t("officialDocuments:rules")}2011
              </Link>
            </ListItem>
            <ListSubheader className={styles.listSubheading}>
              {t("officialDocuments:oldRules")}
            </ListSubheader>
            <ListItem>
              <Link
                href="https://julkaisut.satakuntalainenosakunta.fi/saannot/osakunta/saannot-2007.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.documentLink}
              >
                {t("officialDocuments:rules")} 2007
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://julkaisut.satakuntalainenosakunta.fi/saannot/osakunta/saannot-2004.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.documentLink}
              >
                {t("officialDocuments:rules")} 2004
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://julkaisut.satakuntalainenosakunta.fi/saannot/osakunta/osakuntatalon-aikaiset-saannot.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.documentLink}
              >
                {t("officialDocuments:foundingRules")}
              </Link>
            </ListItem>
          </List>
          <List className={styles.documentList}>
            <ListSubheader className={styles.listSubheading}>
              {t("officialDocuments:regulations")}
            </ListSubheader>
            <ListItem>
              <Link
                href="https://julkaisut.satakuntalainenosakunta.fi/saannot/osakunta/ohjesaannot-2020.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.documentLink}
              >
                {t("officialDocuments:regulations")} 2020
              </Link>
            </ListItem>
            <ListSubheader className={styles.listSubheading}>
              {t("officialDocuments:oldRegulations")}
            </ListSubheader>
            <ListItem>
              <Link
                href="https://julkaisut.satakuntalainenosakunta.fi/saannot/osakunta/ohjesaannot-2019.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.documentLink}
              >
                {t("officialDocuments:regulations")} 2019
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://julkaisut.satakuntalainenosakunta.fi/saannot/osakunta/ohjesaannot-2017.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.documentLink}
              >
                {t("officialDocuments:regulations")} 2017
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://julkaisut.satakuntalainenosakunta.fi/saannot/osakunta/ohjesaannot-2016.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.documentLink}
              >
                {t("officialDocuments:regulations")} 2016
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://julkaisut.satakuntalainenosakunta.fi/saannot/osakunta/ohjesaannot-2011.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.documentLink}
              >
                {t("officialDocuments:regulations")} 2011
              </Link>
            </ListItem>
          </List>
          <List className={styles.documentList}>
            <ListSubheader className={styles.listSubheading}>
              {t("officialDocuments:otherDocuments")}
            </ListSubheader>
            <ListItem>
              <Link
                href="https://docs.google.com/document/d/1D94Hq5XUv9kuaMXqhn_thZ9vZ7pAF-pdJbfBQY-1MU4/view"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.documentLink}
              >
                {t("officialDocuments:equalityPlan")}
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://drive.google.com/file/d/1v5dg71ixbbA42C_50K9QkhX_6uJrEuKb/view"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.documentLink}
              >
                {t("officialDocuments:safeSpace")}
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://drive.google.com/file/d/1rFmPPeN6MXN4wLsD9hNqloqrIrybk7FE/view"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.documentLink}
              >
                {t("officialDocuments:environment")}
              </Link>
            </ListItem>
            <ListSubheader className={styles.listSubheading}>
              {t("officialDocuments:dormitoryTitle")}
            </ListSubheader>
            <ListItem>
              <Link
                href="https://julkaisut.satakuntalainenosakunta.fi/saannot/saatio/asuntoloiden-ohjesaanto.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.documentLink}
              >
                {t("officialDocuments:dormitoryText")}
              </Link>
            </ListItem>
          </List>
        </section>
        <section className={styles.externalRef}>
          <p className={styles.archiveRedirect}>
            Looking for the Satakunta series or Maila Talvio&apos;s collected
            works? You can now find them on the{" "}
            <Link href="/archive" className={styles.documentLink}>
              Archive
            </Link>{" "}
            page!
          </p>
        </section>
        <footer className="footer" />
      </main>
    </>
  );
}
