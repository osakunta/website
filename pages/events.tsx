/* eslint-disable jsx-a11y/anchor-is-valid -- Disabled because of a lot of placeholder hrefs */
import HorizontalCard from "@/components/HorizontalCard";
import Navbar, { NavbarProps } from "@/components/Navbar";
import createClient from "@/lib/cmsClient";
import styles from "@/styles/events.module.css";
import { GetStaticProps } from "next";
import Head from "next/head";

export const getStaticProps: GetStaticProps<EventsPageProps> = async () => {
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

type EventsPageProps = {
  navBar: NavbarProps;
};

export default function Events({ navBar }: EventsPageProps) {
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
          <h1>Tapahtumat</h1>
          <p className={styles.headerText}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor
            doloribus impedit sapiente ipsum rerum neque consequatur tempore,
            sit repellat unde, enim veniam accusantium minima molestias?
            Obcaecati quis doloribus quae nesciunt?
          </p>
        </div>
      </header>
      <main className={styles.main}>
        <section className={styles.eventsSection}>
          <div className={styles.eventsContainer}>
            <HorizontalCard
              variant="darkBlue"
              image="/Placeholder_1.png"
              altText="Placeholder image"
              title="Rapujuhlat"
              description="Aika: Lauantaina 11.1.2024 Paika:Osakuntahuoneisto viisi"
              btnText="Lisätiedot"
              href=""
            />
            <HorizontalCard
              variant="darkBlue"
              image="/Placeholder_1.png"
              altText="Placeholder image"
              title="Rapujuhlat"
              description="Aika: Lauantaina 11.1.2024 Paika:Osakuntahuoneisto viisi"
              btnText="Lisätiedot"
              href=""
            />
            <HorizontalCard
              variant="yellow"
              image="/Placeholder_1.png"
              altText="Placeholder image"
              title="Rapujuhlat"
              description="Aika: Lauantaina 11.1.2024 Paika:Osakuntahuoneisto viisi"
              btnText="Lisätiedot"
              href=""
            />
          </div>
        </section>
        <section className={styles.meetingsSection}>
          <div className={styles.meetingsContainer}>
            <h2>Kerhojen Kokoontumiset</h2>
            <HorizontalCard
              variant="lightBlue"
              image="/Placeholder_5.png"
              altText="Placeholder image"
              title="Rapujuhlat"
              description="Aika: Lauantaina 11.1.2024 Paika:Osakuntahuoneisto viisi"
              btnText="Lisätiedot"
              href=""
            />
            <HorizontalCard
              variant="pink"
              image="/Placeholder_5.png"
              altText="Placeholder image"
              title="Rapujuhlat"
              description="Aika: Lauantaina 11.1.2024 Paika:Osakuntahuoneisto viisi"
              btnText="Lisätiedot"
              href=""
            />
          </div>
        </section>
      </main>
      <footer className="footer" />
    </>
  );
}
