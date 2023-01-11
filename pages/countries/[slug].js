import { useRouter } from "next/router.js";
import styled from "styled-components";
import ListSurfspots from "../../components/ListSurfspots";
import ListSurfspotsItems from "../../components/ListSurfspotsItems";
import Header from "../../components/Header";
import Head from "next/head";
import Image from "next/image";
import backButton from "../../public/images/back_button.svg";
import Link from "next/link";

export default function SpotDetails({ surfspots }) {
  const router = useRouter();
  const { slug } = router.query;

  const spotsincountry = surfspots.filter(
    (surfspot) => surfspot.country === slug
  );

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
            <Image
              src={backButton}
              alt="zurück Button"
              width={25}
              height={25}
            />
          </StyledLink>
          <StyledTitle>{slug}</StyledTitle>
        </StyledSection>
        {spotsincountry.map((surfspot) => {
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
  font-size: 1.5rem;
  font-weight: 400;
`;
