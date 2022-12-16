import styled from "styled-components";
import Link from "next/link";

styled;
export default function ListSurfspotsItems({ name, link }) {
  return (
    <StyledLi>
      <StyledLink href={link}>{name}</StyledLink>
    </StyledLi>
  );
}

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #343436;
  font-size: 20px;
`;

const StyledLi = styled.li`
  margin: 0;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 10px;
  font-weight: normal;
  border-bottom: 2px solid #699bf7;
`;
