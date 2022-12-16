import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import arrow from "../public/images/arrow.png";

styled;
export default function ListSurfspotsItems({ name, link }) {
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
  font-size: 30px;
  width: 100%;
`;

const StyledLi = styled.li`
  margin: 0;
  margin-top: 10px;
  margin-bottom: 10px;
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
