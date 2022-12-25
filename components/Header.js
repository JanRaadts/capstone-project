import Image from "next/image";
import styled from "styled-components";
import menue from "../public/images/menü.png";
import UmMichHerum from "../public/images/UmMichHerum.png";

export default function Header({ onMapShown, onLocateMe }) {
  return (
    <>
      <StyledHeader>
        <Image
          onClick={onLocateMe}
          src={UmMichHerum}
          alt="UmMichHerum"
          width={91}
          height={51}
        ></Image>
        <Image
          onClick={onMapShown}
          src={menue}
          alt="Menü_Btn"
          width={39}
          height={53}
        ></Image>
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
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 10px;
  padding-right: 20px;
`;
