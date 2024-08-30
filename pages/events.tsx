/* eslint-disable jsx-a11y/anchor-is-valid -- Disabled because of a lot of placeholder hrefs */
import Navbar, { NavbarProps } from "@/components/Navbar";
import createClient from "@/lib/cmsClient";
import styles from "@/styles/events.module.css";
import { readItems } from "@directus/sdk";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { GetStaticProps } from "next";
import Head from "next/head";

export const getStaticProps: GetStaticProps<EventsPageProps> = async () => {
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

type EventsPageProps = {
  navBar: NavbarProps;
};

export default function Events({ navBar }: EventsPageProps) {
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
            <Card className={styles.hCard}>
              <CardContent className={styles.cardContent}>
                <span className={styles.cardContentText}>
                  <Typography className={styles.cardTitle}>
                    Rapujuhlat
                  </Typography>
                  <Typography className={styles.cardDescription}>
                    <p>
                      <b>Aika:</b> Lauantaina 11.1.2024
                    </p>
                    <p>
                      <b>Paika:</b> Osakuntahuoneisto viisi
                    </p>
                  </Typography>
                </span>
                <Button variant="contained" className={styles.buttonPink}>
                  Lisätiedot
                </Button>
              </CardContent>
              <CardMedia
                component="img"
                image="/Placeholder_5.png"
                alt="A placeholder image"
                className={styles.cardMedia}
              />
            </Card>
            <Card className={styles.hCard}>
              <CardContent className={styles.cardContent}>
                <span className={styles.cardContentText}>
                  <Typography className={styles.cardTitle}>
                    Rapujuhlat
                  </Typography>
                  <Typography className={styles.cardDescription}>
                    <p>
                      <b>Aika:</b> Lauantaina 11.1.2024
                    </p>
                    <p>
                      <b>Paika:</b> Osakuntahuoneisto viisi
                    </p>
                  </Typography>
                </span>
                <Button variant="contained" className={styles.buttonPink}>
                  Lisätiedot
                </Button>
              </CardContent>
              <CardMedia
                component="img"
                image="/Placeholder_1.png"
                alt="A placeholder image"
                className={styles.cardMedia}
              />
            </Card>
          </div>
        </section>
        <section className={styles.meetingsSection}>
          <div className={styles.eventsContainer}>
            <h2>Kerhojen Kokoontumiset</h2>
            <Card className={styles.hCard}>
              <CardContent className={styles.cardContent}>
                <span className={styles.cardContentText}>
                  <Typography className={styles.cardTitle}>
                    Rapujuhlat
                  </Typography>
                  <Typography className={styles.cardDescription}>
                    <p>
                      <b>Aika:</b> Lauantaina 11.1.2024
                    </p>
                    <p>
                      <b>Paika:</b> Osakuntahuoneisto viisi
                    </p>
                  </Typography>
                </span>
                <Button variant="contained" className={styles.buttonPink}>
                  Lisätiedot
                </Button>
              </CardContent>
              <CardMedia
                component="img"
                image="/Placeholder_5.png"
                alt="A placeholder image"
                className={styles.cardMedia}
              />
            </Card>
            <Card className={styles.hCard}>
              <CardContent className={styles.cardContent}>
                <span className={styles.cardContentText}>
                  <Typography className={styles.cardTitle}>
                    Rapujuhlat
                  </Typography>
                  <Typography className={styles.cardDescription}>
                    <p>
                      <b>Aika:</b> Lauantaina 11.1.2024
                    </p>
                    <p>
                      <b>Paika:</b> Osakuntahuoneisto viisi
                    </p>
                  </Typography>
                </span>
                <Button variant="contained" className={styles.buttonPink}>
                  Lisätiedot
                </Button>
              </CardContent>
              <CardMedia
                component="img"
                image="/Placeholder_1.png"
                alt="A placeholder image"
                className={styles.cardMedia}
              />
            </Card>
          </div>
        </section>
      </main>
      <footer className={styles.footer}>blah</footer>
    </>
  );
}
