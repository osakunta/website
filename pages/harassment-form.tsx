import HarassmentForm from "@/components/HarassmentForm";
import Navbar, { NavbarProps } from "@/components/Navbar";
import createClient from "@/lib/cmsClient";
import withTranslations from "@/lib/withTranslations";
import styles from "@/styles/harassmentForm.module.css";
import Head from "next/head";

export const getStaticProps = async () => {
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

type HarassmentFormPageProps = {
  navBar: NavbarProps;
};

function HarassmentFormPage({ navBar }: HarassmentFormPageProps) {
  return (
    <>
      <Head>
        <title>Satakuntalainen Osakunta</title>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Navbar links={navBar.links} />
      <header className="header">
        <div className="headerContainer">
          <h1>Häirintälomake</h1>
          <p className="headerText">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem odit
            distinctio, ullam doloremque provident voluptas illo quaerat ex
            saepe voluptate reiciendis rerum fuga obcaecati esse sit cum maxime,
            dolorem facilis?
          </p>
        </div>
      </header>
      <main className="main">
        <div className={styles.formContainer}>
          <HarassmentForm />
        </div>
      </main>
      <footer className="footer" />
    </>
  );
}

export default withTranslations(HarassmentFormPage);
