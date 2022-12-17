import { useRouter } from "next/router.js";
import { useState } from "react";
import Image from "next/image";
import surfspots from "../lib/surfspots";
import styled from "styled-components";
import Link from "next/link";
import back_button from "../public/images/back_button.png";
import Head from "next/head";

export default function SpotDetails() {
  const router = useRouter();
  const { slug } = router.query;
  const currentSpot = surfspots.find((spot) => spot.slug === slug);
  if (!currentSpot) {
    return <p>Not found</p>;
  }

  const [infoOrSocial, setInfoOrSocial] = useState(true);

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
      <StyledImage>
        <Image
          src={currentSpot.image}
          alt={`cover image of ${currentSpot.name}`}
          width={800}
          height={600}
        />
        <StyledTitle>{currentSpot.name}</StyledTitle>
      </StyledImage>
      <Link href="/">
        <StyledImageBack
          src={back_button}
          alt="Back_Btn"
          width={30}
          height={30}
        />
      </Link>
      <StyledButtonSection>
        <StyledButton onClick={handleInfo}>Info</StyledButton>
        <StyledButton onClick={handleSocial}>Social</StyledButton>
      </StyledButtonSection>
      {infoOrSocial ? (
        <section>
          <StyledDescriptionSection>
            <p>{currentSpot.description}</p>
          </StyledDescriptionSection>
          <StyledSpecsSection>
            <p>
              <StyledSpan>Surfbare Windrichtungen: </StyledSpan>
              {currentSpot.winddirection}
            </p>
            <p>
              <StyledSpan>Center/Schule: </StyledSpan>
              {currentSpot.surfcenter}
            </p>
            <p>
              <StyledSpan>Parken: </StyledSpan>
              {currentSpot.parking}
            </p>
            <p>
              <StyledSpan>Übernachten: </StyledSpan>
              {currentSpot.camping}
            </p>
          </StyledSpecsSection>
        </section>
      ) : (
        <p>Test</p>
      )}
    </>
  );
}

const StyledImage = styled.div`
  img {
    width: 100vw;
    height: auto;
  }
  position: relative;
`;

const StyledTitle = styled.h1`
  background-color: white;
  padding: 10px;
  margin: 0;
  text-align: center;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  font-weight: normal;
  position: absolute;
  bottom: -25px;
  left: 50%;
  transform: translate(-50%);
`;

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

const StyledDescriptionSection = styled.section`
  margin: 0 20px;
  border-bottom: 2px solid #d4d4d4;
  border-top: 2px solid #d4d4d4;
`;

const StyledSpecsSection = styled.section`
  margin: 0 20px;
  border-bottom: 2px solid #d4d4d4;
`;

const StyledSpan = styled.span`
  color: #495f73;
`;

const StyledImageBack = styled(Image)`
  position: absolute;
  left: 20px;
  top: 10px;
`;
