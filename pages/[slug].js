import { useRouter } from "next/router.js";
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

  return (
    <>
      <Head>
        <title>MySurfspot: {currentSpot.name}</title>
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
        <StyledButton>Infos</StyledButton>
      </StyledButtonSection>
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
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
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
  justify-content: space-around;
  align-items: center;
`;

const StyledButton = styled.button`
  padding: 2px 20px;
  font-size: 20px;
  color: white;
  background: #fa9a94;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
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
