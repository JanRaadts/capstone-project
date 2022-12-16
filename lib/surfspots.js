import { nanoid } from "nanoid";

const surfspots = [
  {
    ID: nanoid(),
    slug: "wackerballig",
    name: "Wackerballig",
    image:
      "https://res.cloudinary.com/dac3s5ere/image/upload/v1671110554/mysurfspot/DSCF2772_uchd0r.jpg",
    country: "Germany",
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
    parking: "many opportunities",
    camping: "directly at the spot",
  },
  {
    ID: nanoid(),
    slug: "heidkate",
    name: "Heidkate",
    image:
      "https://res.cloudinary.com/dac3s5ere/image/upload/v1671117510/mysurfspot/kitesurfboard-holz-heidkate-kiel_jlc4qs.jpg",
    country: "Germany",
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
    parking: "many opportunities",
    camping: "directly at the spot",
  },
  {
    ID: nanoid(),
    slug: "gollendorf",
    name: "Gollendorf",
    image:
      "https://res.cloudinary.com/dac3s5ere/image/upload/v1671119907/mysurfspot/Gollendorf_Fehmarn-120_ymyfd4.jpg",
    country: "Germany",
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
];

export default surfspots;
