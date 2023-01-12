import { useRouter } from "next/router.js";
import ListSurfspots from "../components/ListSurfspots";
import ListSurfspotsItems from "../components/ListSurfspotsItems";
import Header from "../components/Header";
import Head from "next/head";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import backButton from "../public/images/back_button.svg";

export default function favoritespots({ favoriteSpots, surfspots }) {
  const router = useRouter();

  const listFavSpots = favoriteSpots.map((spot) => {
    return surfspots.find((surfspot) => surfspot._id == spot);
  });

  function handleMapShown() {
    router.push(`/`);
  }

  return (
    <>
      <Head>
        <title>SpotiFinder</title>
      </Head>
      <Header onMapShown={handleMapShown} />
      <ListSurfspots>
        <StyledSection>
          <StyledLink href={"/countries"}>
            <Image src={backButton} alt="backButton" width={35} height={35} />
          </StyledLink>
          <StyledTitle>Favoriten</StyledTitle>
        </StyledSection>
        {listFavSpots.map((surfspot) => {
          return (
            <ListSurfspotsItems
              link={`/${surfspot.slug}`}
              name={surfspot.name}
              key={surfspot._id}
            />
          );
        })}
      </ListSurfspots>
    </>
  );
}

const StyledSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledLink = styled(Link)`
  position: absolute;

  left: 1rem;
`;

const StyledTitle = styled.h1`
  font-size: 2.1rem;
`;
