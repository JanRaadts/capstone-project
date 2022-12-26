import React from "react";
import dynamic from "next/dynamic";
import Head from "next/head";
const Map = dynamic(() => import("../components/Map"), { ssr: false });

export default function Home() {
  return (
    <>
      <Head>
        <title>SpotiFinder</title>
      </Head>
      <Map></Map>
    </>
  );
}
