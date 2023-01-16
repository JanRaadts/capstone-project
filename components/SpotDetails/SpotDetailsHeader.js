import Image from "next/image";
import styled from "styled-components";
import information from "../../public/images/information.svg";
import usedInformation from "../../public/images/usedInformation.svg";
import social from "../../public/images/social.svg";
import usedSocial from "../../public/images/usedSocial.svg";
import back_button from "../../public/images/back_button.svg";
import { useRouter } from "next/router";

export default function SpotDetailsHeader({
  usedInfoOrSocial,
  showInformation,
  showSocial,
}) {
  const router = useRouter();
  return (
    <>
      <StyledHeader>
        {usedInfoOrSocial ? (
          <Image
            onClick={showInformation}
            src={usedInformation}
            alt="Button um auf die Informationsseite zu kommen"
            width={111}
            height={46}
          ></Image>
        ) : (
          <Image
            src={information}
            onClick={showInformation}
            alt="Button um auf die Informationsseite zu kommen"
            width={111}
            height={46}
          ></Image>
        )}
        {usedInfoOrSocial ? (
          <Image
            onClick={showSocial}
            src={social}
            alt="Button um auf die Social-Seite zu kommen"
            width={111}
            height={46}
          ></Image>
        ) : (
          <Image
            onClick={showSocial}
            src={usedSocial}
            alt="Button um auf die Social-Seite zu kommen"
            width={111}
            height={46}
          ></Image>
        )}
        <StyledBackButton onClick={() => router.back()}>
          <Image src={back_button} alt="Back_Btn" width={30} height={30} />{" "}
        </StyledBackButton>
      </StyledHeader>
    </>
  );
}

const StyledHeader = styled.section`
  background-color: white;
  height: 80px;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 1;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const StyledBackButton = styled.button`
  position: absolute;
  left: 10px;
  top: 22px;
  border: none;
  background: rgba(255, 255, 255, 0);
`;
