import styled from "styled-components";
import Image from "next/image";
import toFavorite from "../../public/images/toFavorite.svg";
import onFavorite from "../../public/images/onFavorite.svg";
import share from "../../public/images/share.svg";
import navigateTo from "../../public/images/navigateTo.svg";
import Link from "next/link";

export default function SpotInfo({
  description,
  winddirection,
  surfcenter,
  parking,
  camping,
  lat,
  lon,
  id,
  favoriteSpots,
  setFavoriteSpots,
}) {
  const link = `https://www.google.com/maps/search/?api=1&query=${lat}%2C${lon}`;

  function addFavorite() {
    setFavoriteSpots([...favoriteSpots, id]);
  }

  function deleteFavorite() {
    setFavoriteSpots(favoriteSpots.filter((spot) => spot !== id));
  }

  const isFavOrNot = favoriteSpots.includes(id);

  async function handleShare() {
    if (navigator.share) {
      try {
        const shareData = {
          title: "Spotifinder",
          text: "Entdecke diesen Surfspot",
          url: location.href,
        };
        return await navigator.share(shareData);
      } catch {
        console.error("failed");
      }
    } else {
      navigator.clipboard.writeText(location.href);
      alert("In zwischenablage kopiert");
    }
  }

  return (
    <>
      <StyledButtonSection>
        <Link href={link} target="_blank">
          <Image
            src={navigateTo}
            alt="open Spot in map app"
            width={87}
            height={52}
          />
        </Link>

        <Image
          src={share}
          alt="share this link"
          width={87}
          height={52}
          onClick={handleShare}
        />
        {isFavOrNot ? (
          <Image
            src={onFavorite}
            alt="delete favorite spots"
            width={87}
            height={52}
            onClick={deleteFavorite}
          />
        ) : (
          <Image
            src={toFavorite}
            alt="add fo favorite spots"
            width={87}
            height={52}
            onClick={addFavorite}
          />
        )}
      </StyledButtonSection>
      <StyledDescriptionSection>
        <p>{description}</p>
      </StyledDescriptionSection>

      <StyledSpecsSection>
        <p>
          <StyledSpan>Surfbare Windrichtungen: </StyledSpan>
          {winddirection}
        </p>
        <p>
          <StyledSpan>Center/Schule: </StyledSpan>
          {surfcenter}
        </p>
        <p>
          <StyledSpan>Parken: </StyledSpan>
          {parking}
        </p>
        <p>
          <StyledSpan>??bernachten: </StyledSpan>
          {camping}
        </p>
      </StyledSpecsSection>
    </>
  );
}

const StyledButtonSection = styled.section`
  margin: 0 20px;
  margin-top: 10px;
  padding: 10px 0;
  border-bottom: 2px solid #d4d4d4;
  border-top: 2px solid #d4d4d4;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const StyledDescriptionSection = styled.section`
  margin: 0 20px;
  border-bottom: 2px solid #d4d4d4;
`;

const StyledSpecsSection = styled.section`
  margin: 0 20px;
  border-bottom: 2px solid #d4d4d4;
`;

const StyledSpan = styled.span`
  color: #495f73;
`;
