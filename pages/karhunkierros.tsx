/* eslint-disable jsx-a11y/anchor-is-valid -- Disabled because of a lot of placeholder hrefs */
import Navbar, { NavbarProps } from "@/components/Navbar";
import VerticalCard from "@/components/VerticalCard";
import createClient from "@/lib/cmsClient";
import styles from "@/styles/karhunkierros.module.css";
import { GetStaticProps } from "next";
import Head from "next/head";

export const getStaticProps: GetStaticProps<
  KarhunkierrosPageProps
> = async () => {
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

type KarhunkierrosPageProps = {
  navBar: NavbarProps;
};

export default function Karhunkierros({ navBar }: KarhunkierrosPageProps) {
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
          <h1>Karhunkierros lehti</h1>
          <p className="headerText">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor
            doloribus impedit sapiente ipsum rerum neque consequatur tempore,
            sit repellat unde, enim veniam accusantium minima molestias?
            Obcaecati quis doloribus quae nesciunt?
          </p>
        </div>
      </header>
      <main className="main">
        <section className={styles.magazines}>
          <VerticalCard
            variant="lightBlue"
            image="/Placeholder_1.png"
            title="1/24"
            altText="Placeholder image"
            href=""
          />
          <VerticalCard
            variant="lightBlue"
            image="/Placeholder_1.png"
            title="1/23"
            altText="Placeholder image"
            href=""
          />
          <VerticalCard
            variant="lightBlue"
            image="/Placeholder_1.png"
            title="2/22"
            altText="Placeholder image"
            href=""
          />
          <VerticalCard
            variant="lightBlue"
            image="/Placeholder_1.png"
            title="1/22"
            altText="Placeholder image"
            href=""
          />
          <VerticalCard
            variant="lightBlue"
            image="/Placeholder_1.png"
            title="2/21"
            altText="Placeholder image"
            href=""
          />
          <VerticalCard
            variant="lightBlue"
            image="/Placeholder_1.png"
            title="1/21"
            altText="Placeholder image"
            href=""
          />
        </section>
        <section className="footer" />
      </main>
    </>
  );
}
