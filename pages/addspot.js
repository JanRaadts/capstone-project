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
    event.target.reset();
  }

  function handleNewSpotSecondStep(event) {
    event.preventDefault();
    const secondStepData = {
      ...firstStepData,
      country: event.target.elements.country.value,
      city: event.target.elements.city.value,
      zip: event.target.elements.zip.value,
      street: event.target.elements.street.value,
    };

    getGeo(secondStepData);
  }

  async function getGeo(data) {
    const response = await fetch(
      `https://api.geoapify.com/v1/geocode/search?street=${data.street}&postcode=${data.zip}&city=${data.city}&country=${data.country}&format=json&apiKey=e9e1604216e7465488692640e2190af5`
    );
    const geodata = await response.json();

    const newSpot = {
      ...data,
      latitude: `${geodata.results[0].lat}`,
      longitude: `${geodata.results[0].lon}`,
      coordinates: `${geodata.results[0].lat}, ${geodata.results[0].lon}`,
    };
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
              type="text"
              aria-label="Eingabefeld Spotname"
              placeholder="Spot Name"
              name="name"
              required
            ></StyledInput>
            <StyledInput
              type="text"
              aria-label="Eingabefeld Spot Beschreibung"
              placeholder="Beschreibung"
              name="description"
              required
            ></StyledInput>
            <StyledInput
              type="text"
              aria-label="Eingabefeld gute windrichtungen am Spot"
              placeholder="Gute Windrichtungen"
              name="winddirection"
              required
            ></StyledInput>
            <StyledInput
              type="text"
              aria-label="Eingabefeld besonderheiten am surfspot"
              placeholder="Besonderheiten"
              name="particularities"
              required
            ></StyledInput>
            <StyledInput
              type="text"
              aria-label="Eingabefeld surfcenter in der nähe"
              placeholder="Surfcenter"
              name="surfcenter"
              required
            ></StyledInput>
            <StyledInput
              type="text"
              aria-label="Eingabefeld parken in der nähe"
              placeholder="Parken"
              name="parking"
              required
            ></StyledInput>
            <StyledInput
              type="text"
              aria-label="Eingabefeld übernachten in der nähe"
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
            <StyledDropDown name="country" id="chooseCountry">
              <option value="deutschland">Deutschland</option>
              <option value="spanien">Spanien</option>
              <option value="niederlande">Niederlande</option>
              <option value="dänemark">Dänemark</option>
              <option value="frankreich">Frankreich</option>
              <option value="italien">Italien</option>
            </StyledDropDown>
            <StyledInput
              type="text"
              aria-label="Eingabefeld Stadt"
              placeholder="Stadt"
              name="city"
              required
            ></StyledInput>
            <StyledInput
              type="text"
              aria-label="Eingabefeld Postleitzahl"
              placeholder="Postleitzahl"
              name="zip"
              required
            ></StyledInput>
            <StyledInput
              type="text"
              aria-label="Eingabefeld Straße und Hausnummer"
              placeholder="Straße und Hausnummer"
              name="street"
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
`;

const StyledTitle = styled.h1`
  text-align: center;
  font-weight: normal;
  border-bottom: 1.5px solid #d5d5d5;
  width: 90vw;
  padding-bottom: 1rem;
  font-size: 2.25rem;
  color: #0f3375;
`;

const StyledLink = styled(Link)`
  position: absolute;
  top: 2rem;
  left: 1rem;
`;

const StyledForm = styled.form`
  width: 90vw;
`;

const StyledInput = styled.input`
  width: 100%;
  height: 2.5rem;
  background: #f8f6f4;
  border: none;
  border-bottom: 2px solid #699bf7;
  margin-bottom: 2rem;
  margin-top: 0.2rem;
  font-size: 1.3rem;
  &:focus {
    outline: none;
  }
`;

const StyledSubmitButton = styled.button`
  background: #0f3375;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
  border: none;
  border-radius: 0.5rem;
  color: white;
  font-size: 1.5rem;
  padding: 1rem 2rem;
  margin: 1.5rem 0px;
`;

const StyledNextBtn = styled.button`
  border: none;
  background: none;
`;

const StyledText = styled.p`
  font-size: 1.5rem;
  color: #4371c5;
`;

const StyledDropDown = styled.select`
  width: 100%;
  height: 2.5rem;
  background: #f8f6f4;
  border: none;
  border-bottom: 2px solid #699bf7;
  margin-bottom: 2rem;
  margin-top: 0.2rem;
  font-size: 1.3rem;
  &:focus {
    outline: none;
  }
`;
