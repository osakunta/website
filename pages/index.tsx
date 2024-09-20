/* eslint-disable jsx-a11y/anchor-is-valid -- Disabled because of a lot of placeholder hrefs */
import Carousel from "@/components/Carousel";
import Navbar, { NavbarProps } from "@/components/Navbar";
import VerticalCard from "@/components/VerticalCard";
import WeekCalendar from "@/components/WeekCalendar";
import useTranslate from "@/hooks/useTranslate";
import createClient from "@/lib/cmsClient";
import { useLanguage } from "@/lib/LanguageContext";
import styles from "@/styles/Home.module.css";
import { readItems } from "@directus/sdk";
import { Button } from "@mui/material";
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
  const t = useTranslate();
  const { language } = useLanguage();
  return (
    <>
      <Head>
        <title>{t("general:nation")}</title>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Navbar links={navBar.links} />
      {/* Hero */}
      <header className={styles.hero}>
        <h2 className={styles.h2}>{t("homepage:heroSectionText")}</h2>
        <Link href="/nation-info" locale={language} passHref>
          <Button variant="contained" className="button darkBlue">
            {t("homepage:join")}
          </Button>
        </Link>
      </header>
      <main className={styles.main}>
        {/* Cards */}
        <section className={styles.cards}>
          <VerticalCard
            variant="yellow"
            image="/Placeholder_1.png"
            title={t("homepage:nationInfoCard")}
            altText="Placeholder image"
            href="/nation-info"
          />
          <VerticalCard
            variant="yellow"
            image="/Placeholder_1.png"
            title={t("homepage:memberCard")}
            altText="Placeholder image"
            href=""
          />
          <VerticalCard
            variant="yellow"
            image="/Placeholder_1.png"
            title={t("homepage:eventsCard")}
            altText="Placeholder image"
            href=""
          />
          <VerticalCard
            variant="yellow"
            image="/Placeholder_1.png"
            title={t("homepage:newsCard")}
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
              {t("homepage:livingInfoHeader")}
            </h2>
            <br />

            <p>{t("homepage:livingInfoDescription")}</p>
            <br />
            <br />
            <Link
              href="https://www.satalinnansaatio.fi/asunnot/"
              target="_blank"
              rel="noopener noreferrer"
              locale={language}
              passHref
            >
              <Button variant="contained" className="button lightBlue">
                {t("homepage:saatioLinkButtonText")}
              </Button>
            </Link>
          </article>
        </section>

        {/* Calendar */}
        <section className={styles.calendarSection}>
          <span className={styles.sectionContainer}>
            <h2>{t("nav:calendar")}</h2>
            <WeekCalendar />
            <div className={styles.calendarFooter}>
              <ul className={styles.calendarLegend}>
                <li className={styles.legendItem}>
                  <div className={styles.legendGreen} />
                  <p>{t("homepage:calendarLabelMeeting")}</p>
                </li>
                <li className={styles.legendItem}>
                  <div className={styles.legendBlue} />
                  <p>{t("homepage:calendarLabelEvents")}</p>
                </li>
                <li className={styles.legendItem}>
                  <div className={styles.legendOrange} />
                  <p>{t("homepage:calendarLabelSports")}</p>
                </li>
              </ul>
              <Link href="/calendar" locale={language} passHref>
                <Button variant="contained" className="button darkBlue">
                  {t("general:seeMore")}
                </Button>
              </Link>
            </div>
          </span>
        </section>
        {/* Carousel */}
        <section className={styles.karhunkierros}>
          <span className={styles.carouselContainer}>
            <h2>{t("homepage:karhunkierrosHeader")}</h2>
            <Carousel slides={SLIDES} options={OPTIONS} />
          </span>
        </section>
        {/* Contact */}
        <section className={styles.contact}>
          <div className={styles.contactSectionContainer}>
            <div className={styles.contactInfo}>
              <h2>{t("homepage:contactBoardHeader")}</h2>
              <p>{t("homepage:contactBoardDescription")}</p>
              <Button variant="contained" className="button darkBlue">
                {t("homepage:contactFormButton")}
              </Button>
              <br />
              <br />
              <h2>{t("homepage:harassmentFormHeader")}</h2>
              <p>{t("homepage:harassmentFormDescription")}</p>
              <Link href="/harassment-form" locale={language} passHref>
                <Button variant="contained" className="button darkBlue">
                  {t("homepage:contactFormButton")}
                </Button>
              </Link>
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
