import GlobalStyles from "../components/GlobalStyles";
import { useState } from "react";
import { useEffect } from "react";
import useLocalStorageState from "use-local-storage-state";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const [center, setCenter] = useState([54.434051, 10.318242]);
  const [zoom, changeZoom] = useState(11);
  const [favoriteSpots, setFavoriteSpots] = useLocalStorageState(
    "favoriteSpots",
    {
      defaultValue: [],
    }
  );

  const [surfspots, setSurfspots] = useState([]);

  async function getSurfspots() {
    const response = await fetch("/api");
    const surfspotList = await response.json();

    setSurfspots(surfspotList);
  }

  useEffect(() => {
    getSurfspots();
  }, []);

  const listFavSpots = favoriteSpots.map((spot) => {
    return surfspots.find((surfspot) => surfspot._id == spot);
  });
  return (
    <SessionProvider session={session}>
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
        loadSurfspots={getSurfspots}
      />
    </SessionProvider>
  );
}

export default MyApp;
