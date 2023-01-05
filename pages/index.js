import React from "react";
import dynamic from "next/dynamic";
import Head from "next/head";
const Map = dynamic(() => import("../components/Map"), { ssr: false });

export default function Home({ center, changeCenter, zoom, changeZoom }) {
  return (
    <>
      <Head>
        <title>SpotiFinder</title>
      </Head>
      <Map
        center={center}
        changeCenter={changeCenter}
        zoom={zoom}
        changeZoom={changeZoom}
      ></Map>
    </>
  );
}
