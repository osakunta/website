import Navbar, { NavbarProps } from "@/components/Navbar";
import createClient from "@/lib/cmsClient";
import styles from "@/styles/news.module.css";
import { readItems } from "@directus/sdk";
import {
  List,
  ListItemButton,
  Pagination,
  Paper,
  Tooltip,
} from "@mui/material";
import { GetStaticProps } from "next";
import Head from "next/head";

export const getStaticProps: GetStaticProps<NewsPageProps> = async () => {
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

type NewsPageProps = {
  navBar: NavbarProps;
};

export default function News({ navBar }: NewsPageProps) {
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
      <Navbar links={navBar.links} />
      <header className={styles.header}>
        <div className={styles.headerContainer}>
          <h1 className={styles.h1}>Uutiset</h1>
          <p className={styles.headerText}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem odit
            distinctio, ullam doloremque provident voluptas illo quaerat ex
            saepe voluptate reiciendis rerum fuga obcaecati esse sit cum maxime,
            dolorem facilis?
          </p>
        </div>
      </header>
      <main className={styles.main}>
        <Paper elevation={0} className={styles.newsContainer}>
          <div className={styles.listContainer}>
            <List className={styles.articleList}>
              <Tooltip
                title="Osakunnan viikko 34&35 / Nations week 34&45"
                arrow
              >
                <ListItemButton className={styles.articleListItem}>
                  Osakunnan viikko 34&35 / Nations week 34&45
                </ListItemButton>
              </Tooltip>
              <ListItemButton className={styles.articleListItem}>
                SatOn viikko 15 / week 15
              </ListItemButton>
              <ListItemButton className={styles.articleListItem}>
                SatOn viikko 14 / week 14
              </ListItemButton>
              <ListItemButton className={styles.articleListItem}>
                SatOn viikko 13 / week 13
              </ListItemButton>
              <ListItemButton className={styles.articleListItem}>
                Kutsu Satakuntalaisen Osakunnan maaliskuun juhlakokoukseen
                20.3.2024 klo 19:15
              </ListItemButton>
              <ListItemButton className={styles.articleListItem}>
                Kutsu Satakuntalaisen Osakunnan maaliskuun juhlakokoukseen
                20.3.2024 klo 19:15
              </ListItemButton>
              <ListItemButton className={styles.articleListItem}>
                SatOn viikko 12 / week 12
              </ListItemButton>
              <ListItemButton className={styles.articleListItem}>
                SatOn viikko 11 / week 11
              </ListItemButton>
              <ListItemButton className={styles.articleListItem}>
                SatOn viikko 10 / week 10
              </ListItemButton>
              <ListItemButton className={styles.articleListItem}>
                SatOn viikko 9 / week 9
              </ListItemButton>
              <ListItemButton className={styles.articleListItem}>
                Kutsu Satakuntalaisen Osakunnan helmikuun kokoukseen ke
                21.2.2024 klo 19.15
              </ListItemButton>
            </List>
            <Pagination count={3} />
          </div>
          <Paper elevation={0} className={styles.articleWindow}>
            <h2>Title</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi
              dolore hic minus quaerat, fugit, veniam inventore recusandae esse
              impedit ratione unde eius ipsa necessitatibus odit beatae, modi
              aut blanditiis exercitationem?
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi
              dolore hic minus quaerat, fugit, veniam inventore recusandae esse
              impedit ratione unde eius ipsa necessitatibus odit beatae, modi
              aut blanditiis exercitationem?
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi
              dolore hic minus quaerat, fugit, veniam inventore recusandae esse
              impedit ratione unde eius ipsa necessitatibus odit beatae, modi
              aut blanditiis exercitationem?
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi
              dolore hic minus quaerat, fugit, veniam inventore recusandae esse
              impedit ratione unde eius ipsa necessitatibus odit beatae, modi
              aut blanditiis exercitationem?
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi
              dolore hic minus quaerat, fugit, veniam inventore recusandae esse
              impedit ratione unde eius ipsa necessitatibus odit beatae, modi
              aut blanditiis exercitationem?
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi
              dolore hic minus quaerat, fugit, veniam inventore recusandae esse
              impedit ratione unde eius ipsa necessitatibus odit beatae, modi
              aut blanditiis exercitationem?
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi
              dolore hic minus quaerat, fugit, veniam inventore recusandae esse
              impedit ratione unde eius ipsa necessitatibus odit beatae, modi
              aut blanditiis exercitationem?
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi
              dolore hic minus quaerat, fugit, veniam inventore recusandae esse
              impedit ratione unde eius ipsa necessitatibus odit beatae, modi
              aut blanditiis exercitationem?
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi
              dolore hic minus quaerat, fugit, veniam inventore recusandae esse
              impedit ratione unde eius ipsa necessitatibus odit beatae, modi
              aut blanditiis exercitationem?
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi
              dolore hic minus quaerat, fugit, veniam inventore recusandae esse
              impedit ratione unde eius ipsa necessitatibus odit beatae, modi
              aut blanditiis exercitationem?
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi
              dolore hic minus quaerat, fugit, veniam inventore recusandae esse
              impedit ratione unde eius ipsa necessitatibus odit beatae, modi
              aut blanditiis exercitationem?
            </p>
          </Paper>
        </Paper>
      </main>
      <footer className={styles.footer} />
    </>
  );
}
