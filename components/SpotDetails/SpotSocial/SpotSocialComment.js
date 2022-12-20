import styled from "styled-components";

export default function SpotSocialComment({ text }) {
  return (
    <StyledEntry>
      <StyledText>{text}</StyledText>
    </StyledEntry>
  );
}

const StyledEntry = styled.section`
  margin: 10px 30px;
  padding: 10px;
  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
  border-radius: 21px;
`;

const StyledText = styled.p`
  font-size: 20px;
  color: black;
`;
