import { useRouter } from "next/router.js";
import { useState, useEffect } from "react";
import styled from "styled-components";
import Head from "next/head";
import SpotSocial from "../components/SpotDetails/SpotSocial/SpotSocial";
import SpotInfo from "../components/SpotDetails/SpotInfo";
import SpotDetailsHead from "../components/SpotDetails/SpotDetailsHead";
import SpotDetailsHeader from "../components/SpotDetails/SpotDetailsHeader";

export default function SpotDetails({
  favoriteSpots,
  setFavoriteSpots,
  surfspots,
  setSurfspots,
}) {
  async function getSurfspots() {
    const response = await fetch("/api");
    const surfspotList = await response.json();

    setSurfspots(surfspotList);
  }

  useEffect(() => {
    getSurfspots();
  }, []);

  const [infoOrSocial, setInfoOrSocial] = useState(true);
  const [usedInfoOrSocial, setUsedInfoOrSocial] = useState(true);
  const router = useRouter();
  const { slug } = router.query;
  const currentSpot = surfspots.find((spot) => spot.slug === slug);
  if (!currentSpot) {
    return <p></p>;
  }

  function handleInfo() {
    setInfoOrSocial(true);
  }
  function handleSocial() {
    setInfoOrSocial(false);
  }

  function handleShowInformation() {
    setInfoOrSocial(true);
    setUsedInfoOrSocial(!usedInfoOrSocial);
  }

  function handleShowSocial() {
    setInfoOrSocial(false);
    setUsedInfoOrSocial(!usedInfoOrSocial);
  }

  return (
    <>
      <Head>
        <title>SpotiFinder: {currentSpot.name}</title>
      </Head>
      <SpotDetailsHeader
        usedInfoOrSocial={usedInfoOrSocial}
        showInformation={handleShowInformation}
        showSocial={handleShowSocial}
      />

      {infoOrSocial ? (
        <StyledInfoContainer>
          <SpotInfo
            image={currentSpot.image}
            name={currentSpot.name}
            description={currentSpot.description}
            winddirection={currentSpot.winddirection}
            surfcenter={currentSpot.surfcenter}
            parking={currentSpot.parking}
            camping={currentSpot.camping}
            lat={currentSpot.latitude}
            lon={currentSpot.longitude}
            id={currentSpot._id}
            favoriteSpots={favoriteSpots}
            setFavoriteSpots={setFavoriteSpots}
          />
        </StyledInfoContainer>
      ) : (
        <StyledSocialContainer>
          <SpotSocial spotData={currentSpot} loadAgain={getSurfspots} />
        </StyledSocialContainer>
      )}
    </>
  );
}

const StyledInfoContainer = styled.section`
  margin-top: 75px;
`;

const StyledSocialContainer = styled.section`
  margin-top: 95px;
`;
