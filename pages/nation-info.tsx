import Navbar from "@/components/Navbar";
import { fetchNavData } from "@/lib/fetchNavData";
import { GetStaticProps } from "next";
import styles from "@/styles/nation-info.module.css";
import Head from "next/head";
import Image from "next/image";
import { Button } from "@mui/material";
import arrowWhite from "../public/arrow_forward_white.svg";

export const getStaticProps: GetStaticProps<NavProps> = async () => {
  const navData = await fetchNavData();
  return {
    props: {
      navData,
    },
  };
};

export default function NationInfo({ navData }: NavProps) {
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
        <Navbar navData={navData} />
        {/* Image Header */}
        <header className={styles.infoHeader}>
          <div className={styles.headerContainer}>
            <h1 className={styles.h1}>Tietoa Osakunnosta</h1>
            <p className={styles.headerText}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              odit distinctio, ullam doloremque provident voluptas illo quaerat
              ex saepe voluptate reiciendis rerum fuga obcaecati esse sit cum
              maxime, dolorem facilis?
            </p>
            <Image
              src="https://scontent-hel3-1.xx.fbcdn.net/v/t39.30808-6/327171926_575978767373053_5152094067402815471_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=eAMfu1-_YcgQ7kNvgH3C_nE&_nc_ht=scontent-hel3-1.xx&oh=00_AYDTfxBnpbvvmIng2wEwR6CLu35S7gjGnoujSlYQQmp5nw&oe=66B9427E"
              alt="Nation members holding a flag"
              width={800}
              height={300}
              className={styles.headerImage}
            />
          </div>
        </header>
        <section className={styles.infoSection}>
          <aside className={styles.infoContainer}>
            <h2 className={styles.h2}>Mikä on Satakuntalainen osakunta?</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Veritatis possimus tempore deleniti est quam? Reiciendis,
              pariatur. Cupiditate, dolore. Quidem, repellendus nostrum! Officia
              nulla et vitae nesciunt id quod autem hic.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
              velit ea perferendis ex labore odit alias debitis minima, delectus
              quas est. Ad possimus neque rem veniam aliquid quasi eligendi
              debitis!
            </p>
            <br />
            <h2 className={styles.h2}>Mitä osakunnalla tehdään?</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
              eveniet tempore rem consequuntur, ea eos fugit architecto
              reprehenderit aliquam enim porro, nihil soluta cum. Quibusdam
              aperiam labore earum sint ducimus! Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Quas ducimus id quod eaque, voluptas
              consectetur ab ex nemo esse repellendus nulla, vel delectus dolore
              similique qui in voluptatum corrupti illo?
            </p>
            <br />
            <Button variant="contained" className={styles.infoBtn}>
              Tapahtumakalenteri
              <Image src={arrowWhite} alt="arrow forward" />
            </Button>
          </aside>
          <aside className={styles.imageContainer}>
            <Image
              src="https://scontent-hel3-1.xx.fbcdn.net/v/t1.6435-9/107354119_3037696582946348_7547856174935966713_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=13d280&_nc_ohc=Q6CiSe2OORwQ7kNvgH1ZGW9&_nc_ht=scontent-hel3-1.xx&oh=00_AYDFDI4vGpKGjt1izA_zDjyngQIBTXqGVnwTp8ICEtuqLA&oe=66DAF42B"
              alt="some placeholder image"
              width={1}
              height={1}
              className={styles.sectionImage}
            />
          </aside>
        </section>
        <footer className={styles.footer}></footer>
      </main>
    </>
  );
}
