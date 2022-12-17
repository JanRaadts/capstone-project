import React from "react";
import dynamic from "next/dynamic";
import Head from "next/head";
import surfspots from "../lib/surfspots";
import Header from "../components/Header";
import { useRouter } from "next/router";
const Map = dynamic(() => import("../components/Map"), { ssr: false });

export default function Home() {
  function handleMapShown() {
    router.push(`/countries`);
  }

  const router = useRouter();

  return (
    <>
      <Head>
        <title>SpotiFinder</title>
      </Head>
      <Header onMapShown={handleMapShown} />
      <Map surfspots={surfspots}></Map>
    </>
  );
}
