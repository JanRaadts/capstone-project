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

  // function capitalizeFirstLetter(string) {
  //   return string.charAt(0).toUpperCase() + string.slice(1);
  // }

  // const title = slug.charAt(0).toUpperCase() + slug.slice(1);

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
          <StyledTitle>
            {slug.charAt(0).toUpperCase() + slug.slice(1)}
          </StyledTitle>
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
  font-size: 2.1rem;
`;
