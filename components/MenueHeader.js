import Image from "next/image";
import styled from "styled-components";
import map from "../public/images/map.svg";
import userIcon from "../public/images/userIcon.svg";
import usedUserIcon from "../public/images/usedUserIcon.svg";
import list from "../public/images/list.svg";
import usedList from "../public/images/usedList.svg";

export default function MenueHeader({
  onMapShown,
  onUserShown,
  setUserIcon,
  onListShown,
  setListIcon,
}) {
  return (
    <>
      <StyledHeader>
        {setListIcon ? (
          <Image
            onClick={onListShown}
            src={usedList}
            alt="Button um auf die List seite zu kommen"
            width={111}
            height={54}
          ></Image>
        ) : (
          <Image
            onClick={onListShown}
            src={list}
            alt="Button um auf die List seite zu kommen"
            width={111}
            height={54}
          ></Image>
        )}
        {setUserIcon ? (
          <Image
            onClick={onUserShown}
            src={usedUserIcon}
            alt="Button um auf die Profilseite zu gelangen"
            width={111}
            height={54}
          ></Image>
        ) : (
          <Image
            onClick={onUserShown}
            src={userIcon}
            alt="Button um auf die Profilseite zu gelangen"
            width={111}
            height={54}
          ></Image>
        )}
        <Image
          onClick={onMapShown}
          src={map}
          alt="Button um die Map zu öffnen"
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
  justify-content: space-between;
`;
