import { useState } from "react";
import { useEffect } from "react";
import { SessionProvider } from "next-auth/react";
import GlobalStyles from "../components/GlobalStyles";
import useLocalStorageState from "use-local-storage-state";
import styled from "styled-components";
import Lottie from "lottie-react";
import windLottie from "../public/windLottie.json";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const [center, setCenter] = useState([54.434051, 10.318242]);
  const [zoom, changeZoom] = useState(11);
  const [selectedSpot, setSelectedSpot] = useState(null);
  const [showPopUp, setShowPopUp] = useState(false);
  const [surfspots, setSurfspots] = useState();
  const [favoriteSpots, setFavoriteSpots] = useLocalStorageState(
    "favoriteSpots",
    {
      defaultValue: [],
    }
  );

  // Function to fetch from the DB to get the Surfspots data
  async function getSurfspots() {
    const response = await fetch("/api");
    const surfspotList = await response.json();

    setSurfspots(surfspotList);
  }

  //Calling the Fetch with a timeout, to let the user see the loading spinner
  useEffect(() => {
    setTimeout(function () {
      getSurfspots();
    }, 1000);
  }, []);

  return (
    <SessionProvider session={session}>
      <GlobalStyles />

      {!surfspots ? (
        <StyledSplashScreen>
          <Lottie animationData={windLottie} loop={true} />
        </StyledSplashScreen>
      ) : (
        <Component
          {...pageProps}
          center={center}
          changeCenter={setCenter}
          zoom={zoom}
          changeZoom={changeZoom}
          favoriteSpots={favoriteSpots}
          setFavoriteSpots={setFavoriteSpots}
          surfspots={surfspots}
          setSurfspots={setSurfspots}
          loadSurfspots={getSurfspots}
          selectedSpot={selectedSpot}
          setSelectedSpot={setSelectedSpot}
          showPopUp={showPopUp}
          setShowPopUp={setShowPopUp}
        />
      )}
    </SessionProvider>
  );
}

export default MyApp;

const StyledSplashScreen = styled.div`
  width: 100vw;
  height: 100svh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
