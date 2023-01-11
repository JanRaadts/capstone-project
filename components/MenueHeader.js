import Image from "next/image";
import styled from "styled-components";
import usedMenue from "../public/images/UsedMenue.svg";

export default function MenueHeader({ onMapShown }) {
  return (
    <>
      <StyledHeader>
        <Image
          onClick={onMapShown}
          src={usedMenue}
          alt="Button um das Menü zu öffnen"
          width={111}
          height={49}
        ></Image>
      </StyledHeader>
    </>
  );
}

const StyledHeader = styled.section`
  background-color: white;
  height: 80px;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 1;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: end;
`;
