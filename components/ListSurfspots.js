import styled from "styled-components";

export default function ListSurfspots({ children }) {
  return <StyledListSection>{children}</StyledListSection>;
}

const StyledListSection = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  margin-right: 20px;
  margin-left: 20px;
`;
