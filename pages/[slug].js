import { useRouter } from "next/router.js";
import { useState, useEffect } from "react";
import styled from "styled-components";
import Head from "next/head";
import SpotSocial from "../components/SpotDetails/SpotSocial/SpotSocial";
import SpotInfo from "../components/SpotDetails/SpotInfo";
import SpotDetailsHead from "../components/SpotDetails/SpotDetailsHead";

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

  return (
    <>
      <Head>
        <title>SpotiFinder: {currentSpot.name}</title>
      </Head>
      <SpotDetailsHead image={currentSpot.image} name={currentSpot.name} />
      <StyledButtonSection>
        <StyledButton onClick={handleInfo}>Info</StyledButton>
        <StyledButton onClick={handleSocial}>Social</StyledButton>
      </StyledButtonSection>
      {infoOrSocial ? (
        <SpotInfo
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
      ) : (
        <SpotSocial spotData={currentSpot} loadAgain={getSurfspots} />
      )}
    </>
  );
}

const StyledButtonSection = styled.section`
  margin-top: 30px;
  height: 60px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const StyledButton = styled.button`
  width: 100px;
  padding: 2px 20px;
  font-size: 20px;
  color: white;
  background: #fa9a94;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
  border-radius: 16.5px;
  border: none;
`;
