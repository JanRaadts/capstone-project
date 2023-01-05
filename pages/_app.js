import GlobalStyles from "../components/GlobalStyles";
import { useState } from "react";
import useFetch from "../lib/fetch";

function MyApp({ Component, pageProps }) {
  const [center, setCenter] = useState([54.434051, 10.318242]);
  const [zoom, changeZoom] = useState(11);
  const [favoriteSpots, setFavoriteSpots] = useState([]);
  const surfspots = useFetch("/api");
  const listFavSpots = favoriteSpots.map((spot) => {
    return surfspots.find((surfspot) => surfspot._id == spot);
  });
  return (
    <>
      <GlobalStyles />
      <Component
        {...pageProps}
        center={center}
        changeCenter={setCenter}
        zoom={zoom}
        changeZoom={changeZoom}
        favoriteSpots={favoriteSpots}
        setFavoriteSpots={setFavoriteSpots}
        listFavSpots={listFavSpots}
        surfspots={surfspots}
      />
    </>
  );
}

export default MyApp;
