import Navbar, { NavbarProps } from "@/components/Navbar";
import ContactTable, { ContactTableProps } from "@/components/ContactTable";
import createClient from "@/lib/cmsClient";
import { GetStaticProps } from "next";
import Head from "next/head";

export const getStaticProps: GetStaticProps<ArchivePageProps> = async () => {
  const client = createClient();
  const links = await client.getCollection("NavigationLink");
  const contactData = await client.getCollection("Contact");
  return {
    props: {
      navBar: {
        links,
      },
      contactTable: {
        contactData,
      },
    },
  };
};

type ArchivePageProps = {
  navBar: NavbarProps;
  contactTable: ContactTableProps;
};

export default function Archive({ navBar, contactTable }: ArchivePageProps) {
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
          <h1>Ota yhteyttä</h1>
          <p className="headerText">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem odit
            distinctio, ullam doloremque provident voluptas illo quaerat ex
            saepe voluptate reiciendis rerum fuga obcaecati esse sit cum maxime,
            dolorem facilis?
          </p>
        </div>
      </header>
      <main className="main">
        <ContactTable contactData={contactTable.contactData} />
      </main>
      <footer className="footer" />
    </>
  );
}
