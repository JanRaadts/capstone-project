import Image from "next/image";
import styled from "styled-components";
import menue from "../public/images/menü_btn.png";
import logo from "../public/images/logoSpotifinder.png";
import UmMichHerum from "../public/images/UmMichHerum.png";

export default function Header({ onMapShown, onLocateMe }) {
  return (
    <>
      <StyledHeader>
        <Image
          onClick={onLocateMe}
          src={UmMichHerum}
          alt="UmMichHerum"
          width={111}
          height={50}
        ></Image>
        <Image
          onClick={onMapShown}
          src={logo}
          alt="Menü_Btn"
          width={180}
          height={40}
        ></Image>
        <Image
          onClick={onMapShown}
          src={menue}
          alt="Menü_Btn"
          width={111}
          height={52}
        ></Image>
      </StyledHeader>
    </>
  );
}

const StyledLogo = styled.div`
  img {
    width: 220px;
    height: auto;
  }
  position: relative;
`;

const StyledHeader = styled.section`
  background-color: white;
  height: 60px;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 1;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 30px;
  padding-right: 30px;
`;

const StyledImage = styled(Image)`
  position: absolute;
  right: 20px;
  top: 10px;
`;
