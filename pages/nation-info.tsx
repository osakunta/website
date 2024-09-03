import Navbar, { NavbarProps } from "@/components/Navbar";
import createClient from "@/lib/cmsClient";
import styles from "@/styles/nation-info.module.css";
import { readItems } from "@directus/sdk";
import { Button } from "@mui/material";
import { GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import arrowWhite from "../public/arrow_forward_white.svg";

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
          <h1>Tietoa Osakunnosta</h1>
          <p className="headerText">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem odit
            distinctio, ullam doloremque provident voluptas illo quaerat ex
            saepe voluptate reiciendis rerum fuga obcaecati esse sit cum maxime,
            dolorem facilis?
          </p>
        </div>
      </header>
      <main className="main">
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
            <Button variant="contained" className="button darkBlue">
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
        <footer className="footer" />
      </main>
    </>
  );
}
