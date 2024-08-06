import Navbar from "@/components/Navbar";
import { fetchNavData } from "@/lib/fetchNavData";
import { GetStaticProps } from "next";

type Props = {
  navData: CMSData;
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const navData = await fetchNavData();
  return {
    props: {
      navData,
    },
  };
};

export default function NationInfo({ navData }: Props) {
  return (
    <>
      <Navbar navData={navData} />
    </>
  );
}
