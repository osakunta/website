import Navbar from "@/components/Navbar";
import styles from "@/styles/Home.module.css";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import aino from "../public/aino.png";
import arrowBlue from "../public/arrow_forward_blue.svg";
import arrowWhite from "../public/arrow_forward_white.svg";

export default function Home() {
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
        <Navbar />
        {/* Hero */}
        <section className={styles.hero}>
          <h2 className={styles.h2}>Ystäviä, tapahtumia ja koti Kampissa</h2>
          <Button variant="contained" className={styles.heroBtn}>
            Liity osakuntaan
          </Button>
        </section>
        {/* Cards */}
        <section className={styles.cards}>
          <Card className={styles.colorCard1}>
            <CardActionArea>
              <CardMedia
                height={250}
                component="img"
                image="https://lh5.googleusercontent.com/bDp4TqmugenBz4t8K9J4PfQkJbnEzwef49kbULsCaJ-7BY4VZ0Jg0I4V7SYcvb4lFISHnvjeYm1ARN4WVsoRUwdEcAwB9_ogpPV90CBlRMeAkFns7XDevbB3kKlTrwlvZQ=w1280"
                alt="Satakuntalainen Osakunta"
              />
              <CardContent className={styles.cardContent}>
                <Typography>Tietoa osakunnasta</Typography>
                <Image src={arrowWhite} alt="arrow forward" />
              </CardContent>
            </CardActionArea>
            <CardActions className={styles.cardLink}>
              <Link href=""></Link>
            </CardActions>
          </Card>

          <Card className={styles.colorCard2}>
            <CardActionArea>
              <CardMedia
                height={250}
                component="img"
                image="https://lh5.googleusercontent.com/bDp4TqmugenBz4t8K9J4PfQkJbnEzwef49kbULsCaJ-7BY4VZ0Jg0I4V7SYcvb4lFISHnvjeYm1ARN4WVsoRUwdEcAwB9_ogpPV90CBlRMeAkFns7XDevbB3kKlTrwlvZQ=w1280"
                alt="Satakuntalainen Osakunta"
              />
              <CardContent className={styles.cardContent}>
                <Typography>Liity jäseneksi</Typography>
                <Image src={arrowWhite} alt="arrow forward" />
              </CardContent>
            </CardActionArea>
            <CardActions className={styles.cardLink}>
              <Link href=""></Link>
            </CardActions>
          </Card>

          <Card className={styles.colorCard3}>
            <CardActionArea>
              <CardMedia
                height={250}
                component="img"
                image="https://lh5.googleusercontent.com/bDp4TqmugenBz4t8K9J4PfQkJbnEzwef49kbULsCaJ-7BY4VZ0Jg0I4V7SYcvb4lFISHnvjeYm1ARN4WVsoRUwdEcAwB9_ogpPV90CBlRMeAkFns7XDevbB3kKlTrwlvZQ=w1280"
                alt="Satakuntalainen Osakunta"
              />
              <CardContent className={styles.cardContent}>
                <Typography>Tapahtumat</Typography>
                <Image src={arrowWhite} alt="arrow forward" />
              </CardContent>
            </CardActionArea>
            <CardActions className={styles.cardLink}>
              <Link href=""></Link>
            </CardActions>
          </Card>
        </section>
        {/* Living Info */}
        <section className={styles.livingInfo}>
          <Image src={aino} alt="A photo of SatO's mascot" />

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

            <Button variant="contained" className={styles.infoBtn}>
              Satalinnan säätiö <Image src={arrowBlue} alt="arrow forward" />
            </Button>
          </article>
        </section>
        {/* News */}
        <section></section>
      </main>
    </>
  );
}
