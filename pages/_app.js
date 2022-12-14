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
  const [favoriteSpots, setFavoriteSpots] = useLocalStorageState(
    "favoriteSpots",
    {
      defaultValue: [],
    }
  );

  const [surfspots, setSurfspots] = useState();

  async function getSurfspots() {
    const response = await fetch("/api");
    const surfspotList = await response.json();

    setSurfspots(surfspotList);
  }

  useEffect(() => {
    setTimeout(function () {
      getSurfspots();
    }, 2000);
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
        />
      )}
    </SessionProvider>
  );
}

const StyledSplashScreen = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default MyApp;
