import Navbar from "@/components/Navbar";
import { fetchNavData } from "@/lib/fetchNavData";
import { GetStaticProps } from "next";
import styles from "@/styles/nation-info.module.css";

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
      <main className={styles.main}>
        <Navbar navData={navData} />
        <p>hi!</p>
      </main>
    </>
  );
}
