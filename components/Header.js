import { useState } from "react";
import Image from "next/image";
import styled from "styled-components";
import menue from "../public/images/Menue.svg";
import UmMichHerum from "../public/images/UmMichHerum.svg";
import UsedLocateMe from "../public/images/UsedLocateMe.svg";
import usedMenue from "../public/images/UsedMenue.svg";
import searchAround from "../public/images/searchAround.svg";
import usedSearchAroundIcon from "../public/images/usedSearchAround.svg";
import backIcon from "../public/images/back_button.svg";
import lupe from "../public/images/lupe.svg";

export default function Header({
  onMapShown,
  onLocateMe,
  usedLocateMe,
  usedMapShown,
  usedSearchAround,
  onSearchAround,
}) {
  const [showInput, setShowInput] = useState(false);

  function onLocate() {
    onLocateMe();
  }

  function onInput() {
    setShowInput(true);
  }

  function handleSearchAroundData(event) {
    event.preventDefault();
    let searchInput = event.target.elements.ort.value;
    setShowInput(false);
    onSearchAround(searchInput);
  }

  function back() {
    setShowInput(false);
  }

  return (
    <>
      {showInput ? (
        <StyledHeader>
          <StyledForm onSubmit={handleSearchAroundData}>
            <StyledButton type="button" onClick={back}>
              <Image
                src={backIcon}
                alt="addMessageButton"
                width={30}
                height={30}
              />
            </StyledButton>
            <StyledInputText
              type="text"
              name="ort"
              placeholder="Gib einen Ort ein"
            ></StyledInputText>
            <StyledButton type="submit">
              <Image src={lupe} alt="addMessageButton" width={30} height={30} />
            </StyledButton>
          </StyledForm>
        </StyledHeader>
      ) : (
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
          {usedSearchAround ? (
            <Image
              onClick={onInput}
              src={usedSearchAroundIcon}
              alt="Menü_Btn"
              width={76}
              height={51}
            ></Image>
          ) : (
            <Image
              onClick={onInput}
              src={searchAround}
              alt="Menü_Btn"
              width={76}
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
      )}
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

const StyledForm = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledInputText = styled.input`
  padding-left: 5%;
  width: 80vw;
  height: 3rem;
  border: none;
  background: #ffffff;
  border: 2px solid #787777;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.25);
  border-radius: 33.5px;
  font-size: 18px;
  ::placeholder {
  }
  &:focus {
    outline: none;
  }
`;

const StyledButton = styled.button`
  background: rgba(255, 255, 255, 0);
  border: none;
  margin-top: 5px;
`;
