import React from "react";
import Head from "next/head";
import NewMap from "../components/NewMap";

export default function Home({
  center,
  changeCenter,
  zoom,
  changeZoom,
  surfspots,
  selectedSpot,
  setSelectedSpot,
  setShowPopUp,
  showPopUp,
}) {
  return (
    <>
      <Head>
        <title>SpotiFinder</title>
      </Head>
      <NewMap
        center={center}
        changeCenter={changeCenter}
        zoom={zoom}
        changeZoom={changeZoom}
        surfspots={surfspots}
        selectedSpot={selectedSpot}
        setSelectedSpot={setSelectedSpot}
        showPopUp={showPopUp}
        setShowPopUp={setShowPopUp}
      />
    </>
  );
}
