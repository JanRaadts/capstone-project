import styled from "styled-components";
import back_button from "../../public/images/back_button.png";
import Image from "next/image";
import { useRouter } from "next/router";

export default function SpotDetailsHead({ image, name }) {
  const router = useRouter();
  return (
    <>
      <StyledImage>
        <Image
          src={image}
          alt={`cover image of ${name}`}
          width={800}
          height={600}
        />
        <StyledTitle>{name}</StyledTitle>
      </StyledImage>
      <StyledBackButton onClick={() => router.back()}>
        <Image src={back_button} alt="Back_Btn" width={30} height={30} />{" "}
      </StyledBackButton>
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

const StyledBackButton = styled.button`
  position: absolute;
  left: 10px;
  top: 10px;
  border: none;
  background: rgba(255, 255, 255, 0);
`;
