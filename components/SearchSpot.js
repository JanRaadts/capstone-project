import styled from "styled-components";

export default function SearchSpot({ onChange }) {
  return (
    <StyledLi>
      <StyledInputText
        autoFocus
        type="text"
        name="place"
        placeholder="Spot suchen"
        onChange={onChange}
        onSubmit={onChange}
      ></StyledInputText>
    </StyledLi>
  );
}

const StyledLi = styled.li`
  margin: 10px 0px;
  padding: 10px;
  font-weight: normal;
  border-bottom: 2px solid #3965b7;
  display: flex;
  align-items: center;
  margin-bottom: 25px;
`;

const StyledInputText = styled.input`
  width: 100%;
  height: 2rem;
  border: none;
  font-size: 1.4rem;
  &:focus {
    outline: none;
  }
  background-color: white;
`;
