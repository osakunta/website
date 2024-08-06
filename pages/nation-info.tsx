import Navbar from "@/components/Navbar";
import { fetchNavData } from "@/lib/fetchNavData";
import { GetStaticProps } from "next";

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
      <Navbar navData={navData} />
    </>
  );
}
