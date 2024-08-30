/* eslint-disable jsx-a11y/anchor-is-valid -- Disabled because of a lot of placeholder hrefs */
import Carousel from "@/components/Carousel";
import Navbar, { NavbarProps } from "@/components/Navbar";
import VerticalCard from "@/components/VerticalCard";
import WeekCalendar from "@/components/WeekCalendar";
import createClient from "@/lib/cmsClient";
import styles from "@/styles/Home.module.css";
import { readItems } from "@directus/sdk";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { EmblaOptionsType } from "embla-carousel";
import { GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import aino from "../public/aino.png";
import cAside from "../public/contact-aside.png";

const OPTIONS: EmblaOptionsType = { loop: true };
const SLIDE_COUNT = 10;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

export const getStaticProps: GetStaticProps<HomePageProps> = async () => {
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

type HomePageProps = {
  navBar: NavbarProps;
};

export default function Home({ navBar }: HomePageProps) {
  return (
    <>
      <Head>
        <title>Satakuntalainen Osakunta</title>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Navbar links={navBar.links} />
      <header className={styles.hero}>
        <h2 className={styles.h2}>Ystäviä, tapahtumia ja koti Kampissa</h2>
        <Button variant="contained" className="button darkBlue">
          Liity osakuntaan
        </Button>
      </header>
      <main className={styles.main}>
        {/* Hero */}

        {/* Cards */}
        <section className={styles.cards}>
          <VerticalCard
            variant="yellow"
            image="/Placeholder_1.png"
            title="Tietoa osakunnasta"
            altText="Placeholder image"
            href=""
          />
          <VerticalCard
            variant="yellow"
            image="/Placeholder_1.png"
            title="Liity jäseneksi"
            altText="Placeholder image"
            href=""
          />
          <VerticalCard
            variant="yellow"
            image="/Placeholder_1.png"
            title="Tapahtumat"
            altText="Placeholder image"
            href=""
          />
        </section>
        {/* Living Info */}
        <section className={styles.livingInfo}>
          <Image
            src={aino}
            alt="A photo of SatO's mascot"
            className={styles.aino}
          />

          <article className={styles.livingArticle}>
            <h2 className={styles.livingTitle}>
              Asuminen
              <br />
              satakintatalolla
            </h2>
            <br />

            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              natus dignissimos nobis, soluta repellendus ipsam ducimus omnis
              quis numquam accusantium, tempora veniam earum provident aut iure
              assumenda obcaecati nam quas. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Error distinctio repudiandae harum
              est recusandae id nam, debitis minus quod totam? Nostrum suscipit
              dolor accusamus minima eius libero similique voluptate natus?
            </p>
            <br />
            <br />

            <Button variant="contained" className="button lightBlue">
              Satalinnan säätiö{" "}
            </Button>
          </article>
        </section>
        {/* News */}
        <section className={styles.news}>
          <h2>Uutisia</h2>
          <span className={styles.cardContainer}>
            <Card className={styles.newsCard}>
              <CardActionArea>
                <CardMedia
                  height={250}
                  component="img"
                  image="https://lh5.googleusercontent.com/bDp4TqmugenBz4t8K9J4PfQkJbnEzwef49kbULsCaJ-7BY4VZ0Jg0I4V7SYcvb4lFISHnvjeYm1ARN4WVsoRUwdEcAwB9_ogpPV90CBlRMeAkFns7XDevbB3kKlTrwlvZQ=w1280"
                  alt="Satakuntalainen Osakunta"
                />
                <CardContent className={styles.newsCardContent}>
                  <Typography className={styles.cardTitle}>Title</Typography>
                  <Typography className={styles.cardDescription}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Itaque, numquam magnam, eum nihil adipisci tenetur quasi vel
                    minima nemo ratione molestiae in ab laborum perferendis
                    beatae impedit dolorem iusto sunt.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={styles.cardLink}>
                <Link href="" />
              </CardActions>
            </Card>
            <Card className={styles.newsCard}>
              <CardActionArea>
                <CardMedia
                  height={250}
                  component="img"
                  image="https://lh5.googleusercontent.com/bDp4TqmugenBz4t8K9J4PfQkJbnEzwef49kbULsCaJ-7BY4VZ0Jg0I4V7SYcvb4lFISHnvjeYm1ARN4WVsoRUwdEcAwB9_ogpPV90CBlRMeAkFns7XDevbB3kKlTrwlvZQ=w1280"
                  alt="Satakuntalainen Osakunta"
                />
                <CardContent className={styles.newsCardContent}>
                  <Typography className={styles.cardTitle}>Title</Typography>
                  <Typography className={styles.cardDescription}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Itaque, numquam magnam, eum nihil adipisci tenetur quasi vel
                    minima nemo ratione molestiae in ab laborum perferendis
                    beatae impedit dolorem iusto sunt.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={styles.cardLink}>
                <Link href="" />
              </CardActions>
            </Card>
            <Card className={styles.newsCard}>
              <CardActionArea>
                <CardMedia
                  height={250}
                  component="img"
                  image="https://lh5.googleusercontent.com/bDp4TqmugenBz4t8K9J4PfQkJbnEzwef49kbULsCaJ-7BY4VZ0Jg0I4V7SYcvb4lFISHnvjeYm1ARN4WVsoRUwdEcAwB9_ogpPV90CBlRMeAkFns7XDevbB3kKlTrwlvZQ=w1280"
                  alt="Satakuntalainen Osakunta"
                />
                <CardContent className={styles.newsCardContent}>
                  <Typography className={styles.cardTitle}>Title</Typography>
                  <Typography className={styles.cardDescription}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Itaque, numquam magnam, eum nihil adipisci tenetur quasi vel
                    minima nemo ratione molestiae in ab laborum perferendis
                    beatae impedit dolorem iusto sunt.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={styles.cardLink}>
                <Link href="" />
              </CardActions>
            </Card>
            <Card className={styles.newsCard}>
              <CardActionArea>
                <CardMedia
                  height={250}
                  component="img"
                  image="https://lh5.googleusercontent.com/bDp4TqmugenBz4t8K9J4PfQkJbnEzwef49kbULsCaJ-7BY4VZ0Jg0I4V7SYcvb4lFISHnvjeYm1ARN4WVsoRUwdEcAwB9_ogpPV90CBlRMeAkFns7XDevbB3kKlTrwlvZQ=w1280"
                  alt="Satakuntalainen Osakunta"
                />
                <CardContent className={styles.newsCardContent}>
                  <Typography className={styles.cardTitle}>Title</Typography>
                  <Typography className={styles.cardDescription}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Itaque, numquam magnam, eum nihil adipisci tenetur quasi vel
                    minima nemo ratione molestiae in ab laborum perferendis
                    beatae impedit dolorem iusto sunt.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={styles.cardLink}>
                <Link href="" />
              </CardActions>
            </Card>
          </span>
        </section>
        {/* Calendar */}
        <section className={styles.calendarSection}>
          <span className={styles.sectionContainer}>
            <h2>Kalenteri</h2>
            <WeekCalendar />
          </span>
        </section>
        {/* Carousel */}
        <section className={styles.karhunkierros}>
          <span className={styles.carouselContainer}>
            <h2>Osakuntalehti Karhunkierros</h2>
            <Carousel slides={SLIDES} options={OPTIONS} />
          </span>
        </section>
        {/* Contact */}
        <section className={styles.contact}>
          <div className={styles.contactSectionContainer}>
            <div className={styles.contactInfo}>
              <h2> Postia hallitikselle</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Asperiores facere at minus officiis nesciunt? Quos labore
                dolorem et mollitia quia. Recusandae dolores modi quaerat
                magnam! Autem distinctio ipsa a alias.
              </p>
              <Button variant="contained" className="button darkBlue">
                Siiry lomakkeelle
              </Button>
              <br />
              <br />
              <h2>Häirintälomake</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Asperiores facere at minus officiis nesciunt? Quos labore
                dolorem et mollitia quia. Recusandae dolores modi quaerat
                magnam! Autem distinctio ipsa a alias.
              </p>
              <Button variant="contained" className="button darkBlue">
                Ota yhteyttä
              </Button>
            </div>
            <Image
              src={cAside}
              alt="various messaging icons"
              className={styles.contactAside}
            />
          </div>
        </section>

        {/* Footer */}
        <section className="footer" />
        <section />
      </main>
    </>
  );
}
