import Navbar, { NavbarProps } from "@/components/Navbar";
import NewsCard from "@/components/NewsCard";
import createClient from "@/lib/cmsClient";
import styles from "@/styles/news.module.css";
import { readItems } from "@directus/sdk";
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
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Navbar links={navBar.links} />
      <header className="header">
        <div className="headerContainer">
          <h1>Uutiset</h1>
          <p className="headerText">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem odit
            distinctio, ullam doloremque provident voluptas illo quaerat ex
            saepe voluptate reiciendis rerum fuga obcaecati esse sit cum maxime,
            dolorem facilis?
          </p>
        </div>
      </header>
      <main className="main">
        <div className={styles.newsContainer}>
          <NewsCard
            title="Title"
            date="01.08.2024"
            description="test"
            href=""
          />
          <NewsCard
            title="Title"
            date="01.08.2024"
            description="test"
            href=""
          />
          <NewsCard
            title="Title"
            date="01.08.2024"
            description="test"
            href=""
          />
          <NewsCard
            title="Title"
            date="01.08.2024"
            description="test"
            href=""
          />
        </div>
      </main>
      <footer className="footer" />
    </>
  );
}
