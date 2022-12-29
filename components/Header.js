import Image from "next/image";
import styled from "styled-components";
import menue from "../public/images/Menue.svg";
import UmMichHerum from "../public/images/UmMichHerum.svg";
import UsedLocateMe from "../public/images/UsedLocateMe.svg";
import usedMenue from "../public/images/UsedMenue.svg";

export default function Header({
  onMapShown,
  onLocateMe,
  usedLocateMe,
  usedMapShown,
}) {
  function onLocate() {
    console.log("usedLocateMe");
    onLocateMe();
  }

  return (
    <>
      <StyledHeader>
        {usedLocateMe ? (
          <Image
            onClick={onLocate}
            src={UsedLocateMe}
            alt="UmMichHerum"
            width={91}
            height={51}
          ></Image>
        ) : (
          <Image
            onClick={onLocate}
            src={UmMichHerum}
            alt="UmMichHerum"
            width={91}
            height={51}
          ></Image>
        )}
        {usedMapShown ? (
          <Image
            onClick={onMapShown}
            src={menue}
            alt="Menü_Btn"
            width={39}
            height={53}
          ></Image>
        ) : (
          <Image
            onClick={onMapShown}
            src={usedMenue}
            alt="Menü_Btn"
            width={39}
            height={53}
          ></Image>
        )}
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
  justify-content: space-between;
  padding-left: 10px;
  padding-right: 20px;
`;
