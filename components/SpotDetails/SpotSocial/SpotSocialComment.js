import styled from "styled-components";
import Image from "next/image";

export default function SpotSocialComment({
  text,
  name,
  date,
  profilImage,
  picture,
}) {
  let pictureOrNot = false;
  if (picture == "null") {
    pictureOrNot = false;
  } else {
    pictureOrNot = true;
  }

  return (
    <StyledEntry>
      <StyledSection>
        <StyledImage
          src={profilImage}
          alt="Profilbild"
          width={40}
          height={40}
        />
        <StyledInnerSection>
          <StyledName>{name}</StyledName>
          <StyledDate>{date}</StyledDate>
        </StyledInnerSection>
      </StyledSection>
      <StyledText>{text}</StyledText>
      {pictureOrNot ? (
        <StyledCommentImage
          src={picture}
          width={1200}
          height={1000}
          alt="kommentar bild"
          priority
        />
      ) : null}
    </StyledEntry>
  );
}

const StyledEntry = styled.section`
  margin: 10px 30px;
  padding: 10px;
  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
  border-radius: 21px;
`;

const StyledText = styled.p`
  font-size: 20px;
  color: black;
`;

const StyledSection = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
`;

const StyledInnerSection = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: flex-start;
`;

const StyledImage = styled(Image)`
  border-radius: 100px;
`;

const StyledName = styled.p`
  margin: 0;
  padding: 0;
  margin-left: 10px;
  font-size: 14px;
`;

const StyledDate = styled.p`
  margin: 0;
  padding: 0;
  margin-left: 10px;
  font-size: 10px;
  color: #495f73;
`;

const StyledCommentImage = styled(Image)`
  width: 100%;
  max-width: 500px;
  height: auto;
  border-radius: 10px;
`;
