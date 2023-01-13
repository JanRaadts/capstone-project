import React from "react";
import dynamic from "next/dynamic";
import Head from "next/head";
import NewMap from "../components/NewMap";
const Map = dynamic(() => import("../components/Map"), { ssr: false });

export default function Home({
  center,
  changeCenter,
  zoom,
  changeZoom,
  surfspots,
}) {
  return (
    <>
      <Head>
        <title>SpotiFinder</title>
      </Head>
      {/* <Map
        center={center}
        changeCenter={changeCenter}
        zoom={zoom}
        changeZoom={changeZoom}
        surfspots={surfspots}
      ></Map> */}
      <NewMap
        center={center}
        changeCenter={changeCenter}
        zoom={zoom}
        changeZoom={changeZoom}
        surfspots={surfspots}
      />
    </>
  );
}
