import { nanoid } from "nanoid";

const surfspots = [
  {
    ID: nanoid(),
    slug: "wackerballig",
    name: "Wackerballig",
    image:
      "https://res.cloudinary.com/dac3s5ere/image/upload/v1671110554/mysurfspot/DSCF2772_uchd0r.jpg",
    country: "germany",
    city: "Gelting",
    zip: "24395",
    street: "Strandweg 1",
    coordinates: "54.755147, 9.878069",
    latitude: "54.755147",
    longitude: "9.878069",
    description:
      "Beliebter Kite und Windsurf-Spot der Flensburger Surfer. Für Wing-Surfen durch das Flache Wasser eher weniger geeignet.",
    winddirection: "NW, SW, SE",
    surfcenter: "Wackerbay",
    parking: "Kostenloses Parken, jedoch nur wenige Plätze",
    camping: "Campingplatz in 800m entfernung",
  },
  {
    ID: nanoid(),
    slug: "heidkate",
    name: "Heidkate",
    image:
      "https://res.cloudinary.com/dac3s5ere/image/upload/v1671117510/mysurfspot/kitesurfboard-holz-heidkate-kiel_jlc4qs.jpg",
    country: "germany",
    city: "Wisch",
    zip: "24217",
    street: null,
    coordinates: "54.434051, 10.318242",
    latitude: "54.434051",
    longitude: "10.318242",
    description:
      "Der Surfspot hat einen feinen Sandstrand, davor einen schmalen Dünengürtel.",
    winddirection: "NW, SW, SE",
    surfcenter: "Surfschule Heidkate",
    parking: "Großer gebührenpflichtiger Parkplaz",
    camping: "Direkt am Spot",
  },
  {
    ID: nanoid(),
    slug: "gollendorf",
    name: "Gollendorf",
    image:
      "https://res.cloudinary.com/dac3s5ere/image/upload/v1671390274/mysurfspot/DJI_0104_oaunmk.jpg",
    country: "germany",
    city: "Fehmarn",
    zip: "23769",
    street: "Gollendorf 90",
    coordinates: "54.452217, 11.069011",
    latitude: "54.452217",
    longitude: "11.069011",
    description:
      "Gollendorf auf Fehmarn in der Orther Reede liefert ideale Surfbedingungen mit einem überdurchschnittlich großen Stehrevier, glattem Wasser und sandigem Untergrund.",
    winddirection: "W, SW, S, SO",
    surfcenter: "Layline",
    parking: "bezahltes Parken",
    camping: null,
  },
  {
    ID: nanoid(),
    slug: "broager",
    name: "Broager",
    image:
      "https://res.cloudinary.com/dac3s5ere/image/upload/v1671390274/mysurfspot/DJI_0104_oaunmk.jpg",
    country: "dänemark",
    city: "Broager",
    zip: "6310",
    street: "Broagervigvej 13",
    coordinates: "54.452217, 11.069011",
    latitude: "54.880956",
    longitude: "9.657168",
    description:
      "Der Kitespot Broager Bugt liegt in der Nähe von Broager, Dänemark. Je nach Windstärke und -richtung kann der Spotcharakter in der Regel mit Flachwasser beschrieben werden.",
    winddirection: "SSW, SW, WSW, W, WNW",
    surfcenter: "nicht vorhanden",
    parking: "kostenlos",
    camping: null,
  },
];

export default surfspots;
