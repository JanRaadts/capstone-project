import Image from "next/image";
import styled from "styled-components";
import usedMenue from "../public/images/UsedMenue.svg";
import menue from "../public/images/menue.svg";
import userIcon from "../public/images/userIcon.svg";
import usedUserIcon from "../public/images/usedUserIcon.svg";

export default function MenueHeader({
  onMapShown,
  onUserShown,
  setUserIcon,
  setMenuIcon,
}) {
  return (
    <>
      <StyledHeader>
        {setUserIcon ? (
          <Image
            onClick={onUserShown}
            src={usedUserIcon}
            alt="Button um auf die Profilseite zu gelangen"
            width={111}
            height={49}
          ></Image>
        ) : (
          <Image
            onClick={onUserShown}
            src={userIcon}
            alt="Button um auf die Profilseite zu gelangen"
            width={111}
            height={49}
          ></Image>
        )}
        {setMenuIcon ? (
          <Image
            onClick={onMapShown}
            src={usedMenue}
            alt="Button um das Menü zu öffnen"
            width={111}
            height={49}
          ></Image>
        ) : (
          <Image
            onClick={onMapShown}
            src={menue}
            alt="Button um das Menü zu öffnen"
            width={111}
            height={49}
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
`;
