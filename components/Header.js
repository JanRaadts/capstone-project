import { useState } from "react";
import Image from "next/image";
import styled from "styled-components";
import menue from "../public/images/Menue.svg";
import aroundMe from "../public/images/aroundMe.svg";
import usedAroundMe from "../public/images/usedAroundMe.svg";
import map from "../public/images/map.svg";
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
    let searchInput = event.target.elements.place.value;
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
                alt="zurück button"
                width={30}
                height={30}
                priority
              />
            </StyledButton>
            <StyledInputText
              autoFocus
              type="text"
              name="place"
              placeholder="Gib einen Ort ein"
              priority
            ></StyledInputText>
            <StyledButton type="submit">
              <Image
                src={lupe}
                alt="button zum abfragen der eingegebenen suche"
                width={30}
                height={30}
                priority
              />
            </StyledButton>
          </StyledForm>
        </StyledHeader>
      ) : (
        <StyledHeader>
          {usedLocateMe ? (
            <Image
              onClick={onLocate}
              src={usedAroundMe}
              alt="UmMichHerum"
              width={111}
              height={54}
              priority
            ></Image>
          ) : (
            <Image
              onClick={onLocate}
              src={aroundMe}
              alt="UmMichHerum"
              width={111}
              height={54}
              priority
            ></Image>
          )}
          {usedSearchAround ? (
            <Image
              onClick={onInput}
              src={usedSearchAroundIcon}
              alt="Im Bereich eines Ortes suchen"
              width={111}
              height={54}
              priority
            ></Image>
          ) : (
            <Image
              onClick={onInput}
              src={searchAround}
              alt="Im Bereich eines Ortes suchen"
              width={111}
              height={54}
              priority
            ></Image>
          )}
          {usedMapShown ? (
            <Image
              onClick={onMapShown}
              src={menue}
              alt="Button um das Menü zu öffnen"
              width={111}
              height={54}
              priority
            ></Image>
          ) : (
            <Image
              onClick={onMapShown}
              src={map}
              alt="Button um das Menü zu öffnen"
              width={111}
              height={54}
              priority
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
  &:focus {
    outline: none;
  }
`;

const StyledButton = styled.button`
  background: rgba(255, 255, 255, 0);
  border: none;
  margin-top: 5px;
`;
