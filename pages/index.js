import React from "react";
import dynamic from "next/dynamic";
import { useState } from "react";
import { nanoid } from "nanoid";
import ListSurfspots from "../components/ListSurfspots";
import ListSurfspotsItems from "../components/ListSurfspotsItems";
import Header from "../components/Header";
const Map = dynamic(() => import("../components/Map"), { ssr: false });

export default function Home() {
  const [surfspots, setSurfspots] = useState([
    {
      ID: nanoid(),
      name: "Wackerballig",
      image: null,
      country: "Germany",
      city: "Gelting",
      zip: "24395",
      street: "Strandweg 1",
      coordinates: null,
      description:
        "Beliebter Kite und Windsurf-Spot der Flensburger Surfer. Für Wing-Surfen durch das Flache Wasser eher weniger geeignet.",
      winddirection: "NW, SW, SE",
      surfcenter: "Wackerbay",
      parking: "many opportunities",
      camping: "directly at the spot",
    },
    {
      ID: nanoid(),
      name: "Heidkate",
      image: null,
      country: "Germany",
      city: "Wisch",
      zip: "24217",
      street: null,
      coordinates: null,
      description:
        "Der Surfspot hat einen feinen Sandstrand, davor einen schmalen Dünengürtel.",
      winddirection: "NW, SW, SE",
      surfcenter: "Surfschule Heidkate",
      parking: "many opportunities",
      camping: "directly at the spot",
    },
    {
      ID: nanoid(),
      name: "Gollendorf",
      image: null,
      country: "Germany",
      city: "Fehmarn",
      zip: "23769",
      street: "Gollendorf 90",
      coordinates: null,
      description:
        "Gollendorf auf Fehmarn in der Orther Reede liefert ideale Surfbedingungen mit einem überdurchschnittlich großen Stehrevier, glattem Wasser und sandigem Untergrund.",
      winddirection: "W, SW, S, SO",
      surfcenter: "Layline",
      parking: "bezahltes Parken",
      camping: null,
    },
  ]);

  const [mapShown, setMapShown] = useState(true);

  function handleMapShown() {
    setMapShown(!mapShown);
  }

  return (
    <>
      <Header onMapShown={handleMapShown} />
      {mapShown ? (
        <Map></Map>
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
