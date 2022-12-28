import { nanoid } from "nanoid";
import Link from "next/link";
import styled from "styled-components";
import backButton from "../public/images/back_button.svg";
import arrow from "../public/images/arrow.svg";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Addspot() {
  const router = useRouter();
  const [formSteps, setFormSteps] = useState(true);
  const [firstStepData, setFirstStepData] = useState();

  function handleNewSpotFirstStep(event) {
    event.preventDefault();
    setFirstStepData({
      ID: nanoid(),
      slug: event.target.elements.name.value.toLowerCase(),
      name: event.target.elements.name.value,
      image:
        "https://res.cloudinary.com/dac3s5ere/image/upload/v1671110554/mysurfspot/DSCF2772_uchd0r.jpg",
      description: event.target.elements.description.value,
      winddirection: event.target.elements.winddirection.value,
      surfcenter: event.target.elements.surfcenter.value,
      parking: event.target.elements.parking.value,
      camping: event.target.elements.camping.value,
      comments: [],
    });
    setFormSteps(false);
  }

  function handleNewSpotSecondStep(event) {
    event.preventDefault();
    const newSpot = {
      ...firstStepData,
      country: event.target.elements.country.value,
      city: event.target.elements.city.value,
      zip: event.target.elements.zip.value,
      street: event.target.elements.street.value,
      coordinates: "54.41557003297096, 10.41170060728538",
      latitude: event.target.elements.lat.value,
      longitude: event.target.elements.long.value,
    };
    console.log(newSpot);
    handleNewSpotToDB(newSpot);
    router.push(`/`);
  }

  async function handleNewSpotToDB(data) {
    await fetch("/api/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  }

  return (
    <>
      <StyledSection>
        <StyledTitle>Neuer Spot</StyledTitle>
        <StyledLink href={"/"}>
          <Image src={backButton} alt="backButton" width={35} height={35} />
        </StyledLink>
      </StyledSection>
      <StyledSection>
        {formSteps ? (
          <StyledForm onSubmit={handleNewSpotFirstStep}>
            <StyledText>
              Erzähl uns die wichtigsten Dinge über den Spot...
            </StyledText>
            <StyledInput
              placeholder="Spot Name"
              name="name"
              required
            ></StyledInput>
            <StyledInput
              placeholder="Beschreibung"
              name="description"
              required
            ></StyledInput>
            <StyledInput
              placeholder="Gute Windrichtungen"
              name="winddirection"
              required
            ></StyledInput>
            <StyledInput
              placeholder="Besonderheiten"
              name="particularities"
              required
            ></StyledInput>
            <StyledInput
              placeholder="Surfcenter"
              name="surfcenter"
              required
            ></StyledInput>
            <StyledInput
              placeholder="Parken"
              name="parking"
              required
            ></StyledInput>
            <StyledInput
              placeholder="Camping"
              name="camping"
              required
            ></StyledInput>
            <StyledSection>
              <StyledNextBtn type="submit">
                <Image
                  src={arrow}
                  alt="next site of the form"
                  width={50}
                  height={50}
                />
              </StyledNextBtn>
            </StyledSection>
          </StyledForm>
        ) : (
          <StyledForm onSubmit={handleNewSpotSecondStep}>
            <StyledText>Wo befindet sich der Spot?</StyledText>
            <StyledInput
              placeholder="Land"
              name="country"
              required
            ></StyledInput>
            <StyledInput placeholder="Stadt" name="city" required></StyledInput>
            <StyledInput
              placeholder="Postleitzahl"
              name="zip"
              required
            ></StyledInput>
            <StyledInput
              placeholder="Straße und Hausnummer"
              name="street"
              required
            ></StyledInput>
            <StyledInput
              placeholder="Longitude"
              name="long"
              required
            ></StyledInput>
            <StyledInput
              placeholder="Latitude"
              name="lat"
              required
            ></StyledInput>
            <StyledSubmitButton type="submit">Hinzufügen</StyledSubmitButton>
          </StyledForm>
        )}
      </StyledSection>
    </>
  );
}

const StyledSection = styled.section`
  display: flex;
  justify-content: center;
  /* background-color: white; */
`;

const StyledTitle = styled.h1`
  text-align: center;
  font-weight: normal;
  border-bottom: 1.5px solid #d5d5d5;
  width: 90vw;
  padding-bottom: 10px;
  font-size: 36px;
  color: #0f3375;
`;

const StyledLink = styled(Link)`
  position: absolute;
  top: 30px;
  left: 15px;
`;

const StyledForm = styled.form`
  width: 90vw;
`;

const StyledInput = styled.input`
  width: 100%;
  height: 35px;
  background: #f8f6f4;
  border: none;
  border-bottom: 2px solid #699bf7;
  margin-bottom: 30px;
  margin-top: 2px;
  font-size: 18px;
  &:focus {
    outline: none;
  }
`;

const StyledSubmitButton = styled.button`
  background: #0f3375;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
  border: none;
  border-radius: 9px;
  color: white;
  font-size: 20px;
  padding: 10px 30px;
  margin: 20px 0px;
`;

const StyledNextBtn = styled.button`
  border: none;
  background: none;
`;

const StyledText = styled.p`
  font-size: 24px;
  color: #4371c5;
`;
