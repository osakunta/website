import Navbar, { NavbarProps } from "@/components/Navbar";
import useTranslate from "@/hooks/useTranslate";
import createClient from "@/lib/cmsClient";
import styles from "@/styles/nation-info.module.css";
import { readItems } from "@directus/sdk";
import { Button } from "@mui/material";
import { GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Placeholder from "../public/Placeholder_1.png";

export const getStaticProps: GetStaticProps<NationInfoPageProps> = async () => {
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

type NationInfoPageProps = {
  navBar: NavbarProps;
};

export default function NationInfo({ navBar }: NationInfoPageProps) {
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
}
