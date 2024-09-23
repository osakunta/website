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
              <a href="" className={styles.documentLink}>
                {t("officialDocuments:rules")}2011
              </a>
            </ListItem>
            <ListSubheader className={styles.listSubheading}>
              {t("officialDocuments:oldRules")}
            </ListSubheader>
            <ListItem>
              <a href="" className={styles.documentLink}>
                {t("officialDocuments:rules")} 2007
              </a>
            </ListItem>
            <ListItem>
              <a href="" className={styles.documentLink}>
                {t("officialDocuments:rules")} 2004
              </a>
            </ListItem>
            <ListItem>
              <a href="" className={styles.documentLink}>
                {t("officialDocuments:foundingRules")}
              </a>
            </ListItem>
          </List>
          <List className={styles.documentList}>
            <ListSubheader className={styles.listSubheading}>
              {t("officialDocuments:regulations")}
            </ListSubheader>
            <ListItem>
              <a href="" className={styles.documentLink}>
                {t("officialDocuments:regulations")} 2020
              </a>
            </ListItem>
            <ListSubheader className={styles.listSubheading}>
              {t("officialDocuments:oldRegulations")}
            </ListSubheader>
            <ListItem>
              <a href="" className={styles.documentLink}>
                {t("officialDocuments:regulations")} 2019
              </a>
            </ListItem>
            <ListItem>
              <a href="" className={styles.documentLink}>
                {t("officialDocuments:regulations")} 2017
              </a>
            </ListItem>
            <ListItem>
              <a href="" className={styles.documentLink}>
                {t("officialDocuments:regulations")} 2016
              </a>
            </ListItem>
            <ListItem>
              <a href="" className={styles.documentLink}>
                {t("officialDocuments:regulations")} 2011
              </a>
            </ListItem>
          </List>
          <List className={styles.documentList}>
            <ListSubheader className={styles.listSubheading}>
              {t("officialDocuments:otherDocuments")}
            </ListSubheader>
            <ListItem>
              <a href="" className={styles.documentLink}>
                {t("officialDocuments:equalityPlan")}
              </a>
            </ListItem>
            <ListItem>
              <a href="" className={styles.documentLink}>
                {t("officialDocuments:safeSpace")}
              </a>
            </ListItem>
            <ListItem>
              <a href="" className={styles.documentLink}>
                {t("officialDocuments:environment")}
              </a>
            </ListItem>
            <ListSubheader className={styles.listSubheading}>
              {t("officialDocuments:dormitoryTitle")}
            </ListSubheader>
            <ListItem>
              <a href="" className={styles.documentLink}>
                {t("officialDocuments:dormitoryText")}
              </a>
            </ListItem>
          </List>
        </section>
        <section className={styles.externalRef}>
          <p className={styles.archiveRedirect}>
            Looking for the Satakunta series or Maila Talvio&apos;s collected
            works? You can now find them on the
            <Link href="/archive" className={styles.documentLink}>
              Archive
            </Link>
            page!
          </p>
        </section>
        <footer className="footer" />
      </main>
    </>
  );
}
