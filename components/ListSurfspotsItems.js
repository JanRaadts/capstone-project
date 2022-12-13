import styled from "styled-components";

styled;
export default function ListSurfspotsItems({ name }) {
  return (
    <>
      <StyledH2>{name}</StyledH2>
    </>
  );
}

const StyledH2 = styled.h2`
  margin: 0;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 10px;
  font-weight: normal;
  border-bottom: 2px solid #699bf7;
`;
