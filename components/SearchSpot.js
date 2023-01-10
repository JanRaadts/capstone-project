import styled from "styled-components";
import Image from "next/image";
import lupe from "../public/images/lupe.svg";

export default function SearchSpot({ onChange }) {
  return (
    <StyledLi>
      <StyledForm>
        <StyledInputText
          autoFocus
          type="text"
          name="place"
          placeholder="Spot suchen"
          onChange={onChange}
        ></StyledInputText>
        <StyledButton type="submit">
          <Image
            src={lupe}
            alt="button zum abfragen der eingegebenen suche"
            width={30}
            height={30}
          />
        </StyledButton>
      </StyledForm>
    </StyledLi>
  );
}

const StyledLi = styled.li`
  margin: 10px 0px;
  padding: 10px;
  font-weight: normal;
  border-bottom: 2px solid #699bf7;
  display: flex;
  align-items: center;
`;

const StyledForm = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledInputText = styled.input`
  width: 100%;
  height: 2rem;
  border: none;
  font-size: 1.4rem;
  &:focus {
    outline: none;
  }
  background-color: #f8f6f4;
`;

const StyledButton = styled.button`
  background: rgba(255, 255, 255, 0);
  border: none;
  position: absolute;
  right: 55px;
  transform: rotate(-45deg);
`;
