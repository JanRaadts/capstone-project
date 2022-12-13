import styled from "styled-components";

export default function ListSurfspots({ children }) {
  return <StyledListSection>{children}</StyledListSection>;
}

const StyledListSection = styled.section`
  margin: none;
  margin-right: 20px;
  margin-left: 20px;
`;
