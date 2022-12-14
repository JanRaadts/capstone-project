import Image from "next/image";
import styled from "styled-components";
import menue from "../public/images/menü_btn.jpg";

export default function Header({ onMapShown }) {
  return (
    <>
      <StyledHeader>
        <StyledImage
          onClick={onMapShown}
          src={menue}
          alt="Menü_Btn"
          width={40}
          height={40}
        ></StyledImage>
      </StyledHeader>
    </>
  );
}

const StyledHeader = styled.section`
  background-color: white;
  height: 60px;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 1;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const StyledImage = styled(Image)`
  position: absolute;
  right: 20px;
  top: 10px;
`;
