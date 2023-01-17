import styled from "styled-components";
import Image from "next/image";

export default function SpotDetailsHead({ image, name }) {
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
