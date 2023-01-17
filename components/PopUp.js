import closeButton from "../public/images/closeButton.svg";
import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";

export default function PopUp({
  slug,
  name,
  image,
  description,
  setShowPopUp,
}) {
  return (
    <StyledPopUpContainer>
      <StyledPopUp>
        <StyledLink href={slug}>
          <StyledPopUpImageSection>
            <StyledPopUpImage
              src="https://res.cloudinary.com/dac3s5ere/image/upload/v1673624821/mysurfspot/refresher-kitesurfing-lessons-advanced-kiteriders-hero_e5vvqq.jpg"
              alt={`cover image of ${name}`}
              width={800}
              height={600}
            />
          </StyledPopUpImageSection>
          <StyledTitle>{name}</StyledTitle>
          <StyledPopupContent>
            <p>{`${description.slice(0, 110)}...`}</p>
          </StyledPopupContent>
        </StyledLink>

        <StyledCloseButton
          onClick={() => {
            setShowPopUp(false);
          }}
        >
          <Image
            src={closeButton}
            alt="Button um das Pop-Up zu schließen"
            width={35}
            height={35}
          />
        </StyledCloseButton>
      </StyledPopUp>
    </StyledPopUpContainer>
  );
}

const StyledLink = styled(Link)`
  text-decoration: none;
  position: relative;
`;

const StyledPopUpContainer = styled.div`
  width: 100vw;
  height: calc(100svh - 57px);

  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledPopUp = styled.div`
  margin: 1rem;
  z-index: 4;
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  width: 80vw;
  max-width: 400px;
  height: 40vh;
  border-radius: 40px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const StyledPopupContent = styled.div`
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    text-align: center;
    font-weight: 400;
    color: black;
  }
  p {
    padding: 10px;
    color: #787777;
  }
  font-size: medium;
`;

const StyledCloseButton = styled.button`
  background: rgba(120, 119, 119, 0);
  border: none;
  position: absolute;
  right: 10px;
  top: 10px;
`;

const StyledPopUpImage = styled(Image)`
  border-radius: 40px 40px 0px 0px;
  object-fit: cover;
  object-position: bottom;
  height: auto;
  width: 80vw;
  max-width: 400px;
`;

const StyledPopUpImageSection = styled.section`
  position: relative;
  width: 100%;
  height: 20vh;
  overflow: hidden;
`;

const StyledTitle = styled.h1`
  color: black;
  background-color: white;
  padding: 10px;
  margin: 0;
  text-align: center;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  font-weight: normal;
  position: absolute;
  top: 38%;
  left: 50%;
  transform: translate(-50%);
  z-index: 400;
`;
