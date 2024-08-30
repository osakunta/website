import Navbar, { NavbarProps } from "@/components/Navbar";
import createClient from "@/lib/cmsClient";
import styles from "@/styles/calendar.module.css";
import { readItems } from "@directus/sdk";
import { GetStaticProps } from "next";
import Head from "next/head";
import MonthCalendar from "@/components/MonthCalendar";

export const getStaticProps: GetStaticProps<CalendarPageProps> = async () => {
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

type CalendarPageProps = {
  navBar: NavbarProps;
};

export default function News({ navBar }: CalendarPageProps) {
  return (
    <>
      <Head>
        <title>Satakuntalainen Osakunta</title>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Navbar links={navBar.links} />
      <header className={styles.header}>
        <div className={styles.headerContainer}>
          <h1 className={styles.h1}>Kalenteri</h1>
          <p className={styles.headerText}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem odit
            distinctio, ullam doloremque provident voluptas illo quaerat ex
            saepe voluptate reiciendis rerum fuga obcaecati esse sit cum maxime,
            dolorem facilis?
          </p>
        </div>
      </header>
      <main className={styles.main}>
        <MonthCalendar />
      </main>
      <footer className={styles.footer} />
    </>
  );
}
