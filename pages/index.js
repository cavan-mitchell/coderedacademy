import Head from "next/head";
import Body from "../components/Body";
import HeroSection from "../components/HeroSection";

export default function Home() {
  return (
    <>
      <Head>
        <title>Code Red Academy</title>
      </Head>

      <HeroSection />
      <Body />
    </>
  );
}
