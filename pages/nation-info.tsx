import Navbar, { NavbarProps } from "@/components/Navbar";
import styles from "@/styles/nation-info.module.css";
import { Button } from "@mui/material";
import { GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { TranslationProvider, useTranslate } from "@/hooks/TranslationContext";
import createClient, { Translation } from "@/lib/cmsClient";
import Placeholder from "../public/Placeholder_1.png";

export const getStaticProps: GetStaticProps<NationInfoPageProps> = async () => {
  const client = createClient();
  const links = await client.getCollection("NavigationLink");
  const translations = await client.getCollection("Translation");
  return {
    props: {
      navBar: {
        links,
      },
      translations,
    },
  };
};

type NationInfoContentProps = {
  navBar: NavbarProps;
};

const NationInfoContent = ({ navBar }: NationInfoContentProps) => {
  const t = useTranslate();

  return (
    <>
      <Head>
        <title>Satakuntalainen Osakunta</title>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Navbar links={navBar.links} />
      {/* Image Header */}
      <header className="header">
        <div className="headerContainer">
          <h1>{t("nationInfo:headerTitle")}</h1>
          <p className="headerText">{t("nationInfo:headerDescription")}</p>
        </div>
      </header>
      <main className="main">
        <section className={styles.infoSection}>
          <div className={styles.subSection}>
            <span className={styles.infoContainer}>
              <h2 className={styles.h2}>{t("nationInfo:whatIsSatoTitle")}</h2>
              <p>{t("nationInfo:whatIsSatoDescription")}</p>

              <br />
              <h2 className={styles.h2}>{t("nationInfo:whatWeDoTitle")}</h2>
              <p>{t("nationInfo:whatWeDoDescription")}</p>
              <br />
              <Link href="/calendar">
                <Button variant="contained" className="button darkBlue">
                  Tapahtumakalenteri
                </Button>
              </Link>
            </span>
            <div className={styles.imageContainer}>
              <Image
                src={Placeholder}
                alt="placeholder"
                width={100}
                height={100}
                className={styles.sectionImage}
              />
            </div>
          </div>
          <div className={styles.subSection}>
            <div className={styles.imageContainer}>
              <Image
                src={Placeholder}
                alt="placeholder"
                width={100}
                height={100}
                className={styles.sectionImage}
              />
            </div>
            <span className={styles.infoContainer}>
              <h2 className={styles.h2}>{t("nationInfo:howToJoinTitle")}</h2>
              <p>{t("nationInfo:howToJoinDescription")}</p>
            </span>
          </div>
        </section>

        <footer className="footer" />
      </main>
    </>
  );
};

type NationInfoPageProps = {
  navBar: NavbarProps;
  translations: Translation[];
};

export default function NationInfo({
  navBar,
  translations,
}: NationInfoPageProps) {
  return (
    <TranslationProvider translations={translations}>
      <NationInfoContent navBar={navBar} />
    </TranslationProvider>
  );
}
