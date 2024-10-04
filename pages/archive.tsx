import HorizontalCard from "@/components/HorizontalCard";
import Navbar, { NavbarProps } from "@/components/Navbar";
import createClient from "@/lib/cmsClient";
import styles from "@/styles/archive.module.css";
import { GetStaticProps } from "next";
import Head from "next/head";

export const getStaticProps: GetStaticProps<ArchivePageProps> = async () => {
  const client = createClient();
  const links = await client.getCollection("NavigationLink");
  return {
    props: {
      navBar: {
        links,
      },
    },
  };
};

type ArchivePageProps = {
  navBar: NavbarProps;
};

export default function Archive({ navBar }: ArchivePageProps) {
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
          <h1>Arkisto</h1>
          <p className="headerText">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem odit
            distinctio, ullam doloremque provident voluptas illo quaerat ex
            saepe voluptate reiciendis rerum fuga obcaecati esse sit cum maxime,
            dolorem facilis?
          </p>
        </div>
      </header>
      <main className="main">
        <div className={styles.cardContainer}>
          <HorizontalCard
            variant="pink"
            image="/Placeholder_5.png"
            altText="Placeholder image"
            title="Maila Talvo's collected works"
            description="Fusce lacinia nisl ac sapien condimentum faucibus. Suspendisse non metus iaculis, lobortis augue vel, placerat odio. Mauris fermentum laoreet aliquam. "
            btnText="Lue lisää"
            href=""
          />

          <HorizontalCard
            variant="pink"
            image="/Placeholder_5.png"
            altText="Placeholder image"
            title="Satakunta Series"
            description="Fusce lacinia nisl ac sapien condimentum faucibus. Suspendisse non metus iaculis, lobortis augue vel, placerat odio. Mauris fermentum laoreet aliquam. "
            btnText="Lue lisää"
            href=""
          />

          <HorizontalCard
            variant="pink"
            image="/Placeholder_5.png"
            altText="Placeholder image"
            title="Proceedings"
            description="Minutes of official SatO meetings. Organization login required"
            btnText="Go to proceedings"
            href=""
          />
        </div>
      </main>
      <footer className="footer" />
    </>
  );
}
