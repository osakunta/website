import Navbar, { NavbarProps } from "@/components/Navbar";
import { GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/official-documents.module.css";
import { Button, List, ListItem, ListSubheader } from "@mui/material";
import arrowWhite from "../public/arrow_forward_white.svg";
import Link from "next/link";
import createClient from "@/lib/cmsClient";
import { readItems } from "@directus/sdk";

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
        <Navbar links={navBar.links} />
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
          <List className={styles.documentList}>
            <ListSubheader className={styles.h3}>Rules</ListSubheader>
            <ListItem>
              <a href="" className={styles.documentLink}>
                Rules 2011
              </a>
            </ListItem>
            <ListSubheader className={styles.h3}>Old Rules</ListSubheader>
            <ListItem>
              <a href="" className={styles.documentLink}>
                Rules 2007
              </a>
            </ListItem>
            <ListItem>
              <a href="" className={styles.documentLink}>
                Rules 2004
              </a>
            </ListItem>
            <ListItem>
              <a href="" className={styles.documentLink}>
                Rules at the time of <br /> the cooperative building
              </a>
            </ListItem>
          </List>
          <List className={styles.documentList}>
            <ListSubheader className={styles.h3}>Regulations</ListSubheader>
            <ListItem>
              <a href="" className={styles.documentLink}>
                Guidelines 2020
              </a>
            </ListItem>
            <ListSubheader className={styles.h3}>Old Regulations</ListSubheader>
            <ListItem>
              <a href="" className={styles.documentLink}>
                Guidelines 2019
              </a>
            </ListItem>
            <ListItem>
              <a href="" className={styles.documentLink}>
                Guidelines 2017
              </a>
            </ListItem>
            <ListItem>
              <a href="" className={styles.documentLink}>
                Guidelines 2016
              </a>
            </ListItem>
            <ListItem>
              <a href="" className={styles.documentLink}>
                Guidelines 2011
              </a>
            </ListItem>
          </List>
          <List className={styles.documentList}>
            <ListSubheader className={styles.h3}>Other Documents</ListSubheader>
            <ListItem>
              <a href="" className={styles.documentLink}>
                Equality Plan
              </a>
            </ListItem>
            <ListItem>
              <a href="" className={styles.documentLink}>
                SatO Safe Space
              </a>
            </ListItem>
            <ListItem>
              <a href="" className={styles.documentLink}>
                Environmental plan
              </a>
            </ListItem>
            <ListSubheader className={styles.h3}>Dormitory</ListSubheader>
            <ListItem>
              <a href="" className={styles.documentLink}>
                Dormitory Regulations
              </a>
            </ListItem>
          </List>
        </section>
        <section className={styles.externalRef}>
          <div className={styles.proceedingsContainer}>
            <h3 className={styles.h3}>Proceedings</h3>
            <Button variant="contained" className={styles.proceedingsBtn}>
              See proceedings <br /> (SatO login required)
              <Image src={arrowWhite} alt="arrow forward" />
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
        <footer className={styles.footer} />
      </main>
    </>
  );
}
