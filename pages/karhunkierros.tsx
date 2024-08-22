/* eslint-disable jsx-a11y/anchor-is-valid -- Disabled because of a lot of placeholder hrefs */
import Navbar, { NavbarProps } from "@/components/Navbar";
import { GetStaticProps } from "next";
import createClient from "@/lib/cmsClient";
import { readItems } from "@directus/sdk";
import Head from "next/head";
import styles from "@/styles/karhunkierros.module.css";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import arrowBlue from "@/public/arrow_forward_blue.svg";

export const getStaticProps: GetStaticProps<
  KarhunkierrosPageProps
> = async () => {
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

type KarhunkierrosPageProps = {
  navBar: NavbarProps;
};

export default function Karhunkierros({ navBar }: KarhunkierrosPageProps) {
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
      <main className={styles.main}>
        <Navbar links={navBar.links} />
        <header className={styles.header}>
          <div className={styles.headerContainer}>
            <h1>Karhunkierros lehti</h1>
            <p className={styles.headerText}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor
              doloribus impedit sapiente ipsum rerum neque consequatur tempore,
              sit repellat unde, enim veniam accusantium minima molestias?
              Obcaecati quis doloribus quae nesciunt?
            </p>
          </div>
        </header>
        <section className={styles.magazines}>
          <Card className={styles.magazineCard}>
            <CardActionArea>
              <CardMedia
                height={250}
                component="img"
                image="https://lh5.googleusercontent.com/bDp4TqmugenBz4t8K9J4PfQkJbnEzwef49kbULsCaJ-7BY4VZ0Jg0I4V7SYcvb4lFISHnvjeYm1ARN4WVsoRUwdEcAwB9_ogpPV90CBlRMeAkFns7XDevbB3kKlTrwlvZQ=w1280"
                alt="Satakuntalainen Osakunta"
              />
              <CardContent className={styles.cardContent}>
                <Typography>1/24</Typography>
                <Image src={arrowBlue} alt="arrow forward" />
              </CardContent>
            </CardActionArea>
            <CardActions className={styles.cardLink}>
              <Link href="" />
            </CardActions>
          </Card>
          <Card className={styles.magazineCard}>
            <CardActionArea>
              <CardMedia
                height={250}
                component="img"
                image="https://lh5.googleusercontent.com/bDp4TqmugenBz4t8K9J4PfQkJbnEzwef49kbULsCaJ-7BY4VZ0Jg0I4V7SYcvb4lFISHnvjeYm1ARN4WVsoRUwdEcAwB9_ogpPV90CBlRMeAkFns7XDevbB3kKlTrwlvZQ=w1280"
                alt="Satakuntalainen Osakunta"
              />
              <CardContent className={styles.cardContent}>
                <Typography>1/23</Typography>
                <Image src={arrowBlue} alt="arrow forward" />
              </CardContent>
            </CardActionArea>
            <CardActions className={styles.cardLink}>
              <Link href="" />
            </CardActions>
          </Card>
          <Card className={styles.magazineCard}>
            <CardActionArea>
              <CardMedia
                height={250}
                component="img"
                image="https://lh5.googleusercontent.com/bDp4TqmugenBz4t8K9J4PfQkJbnEzwef49kbULsCaJ-7BY4VZ0Jg0I4V7SYcvb4lFISHnvjeYm1ARN4WVsoRUwdEcAwB9_ogpPV90CBlRMeAkFns7XDevbB3kKlTrwlvZQ=w1280"
                alt="Satakuntalainen Osakunta"
              />
              <CardContent className={styles.cardContent}>
                <Typography>2/22</Typography>
                <Image src={arrowBlue} alt="arrow forward" />
              </CardContent>
            </CardActionArea>
            <CardActions className={styles.cardLink}>
              <Link href="" />
            </CardActions>
          </Card>
          <Card className={styles.magazineCard}>
            <CardActionArea>
              <CardMedia
                height={250}
                component="img"
                image="https://lh5.googleusercontent.com/bDp4TqmugenBz4t8K9J4PfQkJbnEzwef49kbULsCaJ-7BY4VZ0Jg0I4V7SYcvb4lFISHnvjeYm1ARN4WVsoRUwdEcAwB9_ogpPV90CBlRMeAkFns7XDevbB3kKlTrwlvZQ=w1280"
                alt="Satakuntalainen Osakunta"
              />
              <CardContent className={styles.cardContent}>
                <Typography>1/22</Typography>
                <Image src={arrowBlue} alt="arrow forward" />
              </CardContent>
            </CardActionArea>
            <CardActions className={styles.cardLink}>
              <Link href="" />
            </CardActions>
          </Card>
          <Card className={styles.magazineCard}>
            <CardActionArea>
              <CardMedia
                height={250}
                component="img"
                image="https://lh5.googleusercontent.com/bDp4TqmugenBz4t8K9J4PfQkJbnEzwef49kbULsCaJ-7BY4VZ0Jg0I4V7SYcvb4lFISHnvjeYm1ARN4WVsoRUwdEcAwB9_ogpPV90CBlRMeAkFns7XDevbB3kKlTrwlvZQ=w1280"
                alt="Satakuntalainen Osakunta"
              />
              <CardContent className={styles.cardContent}>
                <Typography>2/21</Typography>
                <Image src={arrowBlue} alt="arrow forward" />
              </CardContent>
            </CardActionArea>
            <CardActions className={styles.cardLink}>
              <Link href="" />
            </CardActions>
          </Card>
          <Card className={styles.magazineCard}>
            <CardActionArea>
              <CardMedia
                height={250}
                component="img"
                image="https://lh5.googleusercontent.com/bDp4TqmugenBz4t8K9J4PfQkJbnEzwef49kbULsCaJ-7BY4VZ0Jg0I4V7SYcvb4lFISHnvjeYm1ARN4WVsoRUwdEcAwB9_ogpPV90CBlRMeAkFns7XDevbB3kKlTrwlvZQ=w1280"
                alt="Satakuntalainen Osakunta"
              />
              <CardContent className={styles.cardContent}>
                <Typography>1/21</Typography>
                <Image src={arrowBlue} alt="arrow forward" />
              </CardContent>
            </CardActionArea>
            <CardActions className={styles.cardLink}>
              <Link href="" />
            </CardActions>
          </Card>
        </section>
        <section className={styles.footer} />
      </main>
    </>
  );
}
