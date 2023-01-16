import { useRouter } from "next/router";
import { useSession, signIn, signOut } from "next-auth/react";
import Head from "next/head";
import styled from "styled-components";
import MenueHeader from "../components/MenueHeader";
import Image from "next/image";

export default function user() {
  const router = useRouter();

  const { data: session } = useSession();

  function handleMapShown() {
    router.push("/");
  }

  function handleListShown() {
    router.push(`/countries`);
  }

  function handleAddSpot() {
    router.push(`/addspot`);
  }

  return (
    <>
      <Head>
        <title>SpotiFinder - Dein Profil</title>
      </Head>
      <MenueHeader
        onMapShown={handleMapShown}
        setUserIcon={true}
        onListShown={handleListShown}
      />
      <StyledSection>
        {session ? (
          <>
            <StyledText>Wilkommen zurück</StyledText>
            <StyledText>{session.user.name}</StyledText>
            <StyledImage
              src={session.user.image}
              alt="Profilbild"
              width={200}
              height={200}
            />
            <StyledAddSpot onClick={handleAddSpot}>
              Spot hinzufügen
            </StyledAddSpot>
          </>
        ) : (
          <StyledText>
            Bitte logge dich ein, um auf deine Profilseite zu gelangen..
          </StyledText>
        )}

        {session ? (
          <StyledLoginButton onClick={signOut}>Logout</StyledLoginButton>
        ) : (
          <StyledLoginButton
            onClick={() => {
              signIn("github");
            }}
          >
            Login mit GitHub
          </StyledLoginButton>
        )}
      </StyledSection>
    </>
  );
}

const StyledSection = styled.section`
  margin: 0 20px;
  margin-top: 100px;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledText = styled.p`
  font-size: 1.3rem;
`;

const StyledLoginButton = styled.button`
  margin-top: 20px;
  background: #699bf7;
  border: none;
  border-radius: 23px;
  padding: 20px;
  height: 40px;
  color: white;
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledAddSpot = styled.button`
  margin-top: 20px;
  background: pink;
  border: none;
  border-radius: 23px;
  padding: 10px;
  height: 40px;
  color: white;
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledImage = styled(Image)`
  border-radius: 100px;
`;
