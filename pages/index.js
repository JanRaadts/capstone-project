import React from "react";
import dynamic from "next/dynamic";
import Head from "next/head";
import { useState } from "react";
import surfspots from "../lib/surfspots";
import ListSurfspots from "../components/ListSurfspots";
import ListSurfspotsItems from "../components/ListSurfspotsItems";
import Header from "../components/Header";
const Map = dynamic(() => import("../components/Map"), { ssr: false });

export default function Home() {
  const [mapShown, setMapShown] = useState(true);
  function handleMapShown() {
    setMapShown(!mapShown);
  }

  return (
    <>
      <Head>
        <title>MySurfSpot</title>
      </Head>
      <Header onMapShown={handleMapShown} />
      {mapShown ? (
        <Map surfspots={surfspots}></Map>
      ) : (
        <ListSurfspots>
          {surfspots.map((surfspot) => {
            return (
              <ListSurfspotsItems name={surfspot.name} key={surfspot.ID} />
            );
          })}
        </ListSurfspots>
      )}
    </>
  );
}
