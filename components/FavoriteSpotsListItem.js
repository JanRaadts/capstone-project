import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import arrow from "../public/images/arrow.svg";

export default function FavoriteSpotsListItem({ name, link }) {
  return (
    <StyledLi>
      <StyledLink href={link}>
        {name} <StyledImage src={arrow} alt="arrow" width={30} height={30} />
      </StyledLink>
    </StyledLi>
  );
}

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #343436;
  font-size: 1.5rem;
  font-weight: 600;
  width: 100%;
`;

const StyledLi = styled.li`
  margin: 10px 0px;
  padding: 10px;
  font-weight: normal;
  border-bottom: 2px solid #699bf7;
  display: flex;
  align-items: center;
`;

const StyledImage = styled(Image)`
  position: absolute;
  right: 60px;
`;
