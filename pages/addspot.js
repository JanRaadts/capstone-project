import { nanoid } from "nanoid";
import Link from "next/link";
import styled from "styled-components";
import backButton from "../public/images/back_button.svg";
import arrow from "../public/images/arrow.svg";
import Image from "next/image";
import pictureUpload from "../public/images/pictureUpload.svg";
import { useState } from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import ImagePreview from "../components/PreviewImage";

export default function Addspot({ changeCenter, loadSurfspots }) {
  const { data: session } = useSession();

  const router = useRouter();
  const [formSteps, setFormSteps] = useState(true);
  const [firstStepData, setFirstStepData] = useState();
  const [images, setImages] = useState([]);
  const [image, setImage] = useState(null);
  const [imageValue, setImageValue] = useState("");
  const [imageUrl, setImageUrl] = useState(null);

  async function handleNewSpotFirstStep(event) {
    event.preventDefault();
    const createSlug = event.target.elements.name.value.toLowerCase();
    const slugWithoutSpace = createSlug.replaceAll(" ", "");
    setFirstStepData({
      ID: nanoid(),
      slug: slugWithoutSpace.toLowerCase(),
      name: event.target.elements.name.value,
      description: event.target.elements.description.value,
      winddirection: event.target.elements.winddirection.value,
      surfcenter: event.target.elements.surfcenter.value,
      parking: event.target.elements.parking.value,
      camping: event.target.elements.camping.value,
      comments: [],
    });

    const formData = new FormData(event.target);

    formData.append("file", image);
    formData.append("upload_preset", process.env.NEXT_PUBLIC_UPLOAD_PRESET);

    const url = `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDNAME}/upload`;
    const response = await fetch(url, {
      method: "POST",
      body: formData,
    });
    const json = await response.json();
    setImageUrl(json.url);
    setImage(null);

    const formValues = Object.fromEntries(formData);

    setFormSteps(false);
    event.target.reset();
  }

  function handleNewSpotSecondStep(event) {
    event.preventDefault();
    const secondStepData = {
      ...firstStepData,
      image: imageUrl,
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
    changeCenter([geodata.results[0].lat, geodata.results[0].lon]);
    setTimeout(function () {
      loadSurfspots();
      router.push(`/`);
    }, 50);
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
        <StyledBackBtn onClick={() => router.back()}>
          <Image src={backButton} alt="backButton" width={35} height={35} />
        </StyledBackBtn>
      </StyledSection>

      {session ? (
        <>
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
                <section>
                  <StyledPictureUploadContainer>
                    <StyledLabelPicture htmlFor="avatar">
                      {!image && (
                        <StyledLabelSection>
                          <Image
                            src={pictureUpload}
                            width={32}
                            height={32}
                            alt="bild hochladen"
                          />
                          Bild hochladen
                        </StyledLabelSection>
                      )}
                      {image && (
                        <StyledLabelSection>
                          <Image
                            src={pictureUpload}
                            width={32}
                            height={32}
                            alt="bild hochladen"
                          />
                          Bild ändern
                        </StyledLabelSection>
                      )}
                    </StyledLabelPicture>
                    <StyledPictureInput
                      required
                      type="file"
                      name="avatar"
                      id="avatar"
                      accept="image/png, image/gif, image/jpeg"
                      value={imageValue}
                      onChange={(event) => {
                        setImageValue(event.target.value);
                        console.log(imageValue);
                        setImage(event.target.files[0]);
                      }}
                    />
                    {image && <ImagePreview file={image} />}
                  </StyledPictureUploadContainer>
                </section>
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
                <StyledSubmitButton type="submit">
                  Hinzufügen
                </StyledSubmitButton>
              </StyledForm>
            )}
          </StyledSection>
        </>
      ) : (
        <>
          <StyledSection>
            <StyledLoginText>
              Bitte logge dich ein um einen Spot hinzuzufügen.
            </StyledLoginText>
          </StyledSection>
          <StyledSection>
            <StyledToUser href={"/user"}>Zur Login Seite</StyledToUser>
          </StyledSection>
        </>
      )}
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

const StyledBackBtn = styled.button`
  border: none;
  background-color: white;
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
  background: white;
  border: none;
  border-bottom: 2px solid #699bf7;
  border-radius: 0px;
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
  background: white;
  border: none;
  border-bottom: 2px solid #699bf7;
  border-radius: 0px;
  margin-bottom: 2rem;
  margin-top: 0.2rem;
  font-size: 1.3rem;
  &:focus {
    outline: none;
  }
`;

const StyledLoginText = styled.p`
  font-size: 1.5rem;
  color: #4371c5;
  width: 90vw;
  text-align: center;
`;

const StyledToUser = styled(Link)`
  text-decoration: none;
  background: #699bf7;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.25);
  border: none;
  border-radius: 0.5rem;
  color: white;
  font-size: 1.5rem;
  padding: 1rem 2rem;
  margin: 1.5rem 0px;
`;

const StyledPictureInput = styled.input`
  display: none;
`;

const StyledPictureUploadContainer = styled.div`
  width: 100%;
  min-height: 2.5rem;
  background: white;
  border: none;
  border-bottom: 2px solid #699bf7;
  border-radius: 0px;
  margin-bottom: 2rem;
`;
const StyledLabelPicture = styled.label`
  font-size: 1.3rem;
`;

const StyledLabelSection = styled.div`
  display: flex;
  align-items: center;
  color: #757575;
`;
