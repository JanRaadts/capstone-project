import styled from "styled-components";

export default function SpotInfo({
  description,
  winddirection,
  surfcenter,
  parking,
  camping,
}) {
  return (
    <>
      <StyledDescriptionSection>
        <p>{description}</p>
      </StyledDescriptionSection>
      <StyledSpecsSection>
        <p>
          <StyledSpan>Surfbare Windrichtungen: </StyledSpan>
          {winddirection}
        </p>
        <p>
          <StyledSpan>Center/Schule: </StyledSpan>
          {surfcenter}
        </p>
        <p>
          <StyledSpan>Parken: </StyledSpan>
          {parking}
        </p>
        <p>
          <StyledSpan>Übernachten: </StyledSpan>
          {camping}
        </p>
      </StyledSpecsSection>
    </>
  );
}

const StyledDescriptionSection = styled.section`
  margin: 0 20px;
  border-bottom: 2px solid #d4d4d4;
  border-top: 2px solid #d4d4d4;
`;

const StyledSpecsSection = styled.section`
  margin: 0 20px;
  border-bottom: 2px solid #d4d4d4;
`;

const StyledSpan = styled.span`
  color: #495f73;
`;
