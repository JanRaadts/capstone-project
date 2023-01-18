import { useSession } from "next-auth/react";
import { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import addMessage from "../../../public/images/addMessage.svg";
import pictureUpload from "../../../public/images/pictureUpload.svg";
import ImagePreview from "../../PreviewImage";

export default function SpotSocialForm({ newComment, spotData }) {
  const { data: session } = useSession();
  const today = new Date();
  const now = today.toLocaleString();
  const [image, setImage] = useState(null);

  const user = session ? session.user.name : "Gast";
  const avatar = session
    ? session.user.image
    : "https://res.cloudinary.com/dac3s5ere/image/upload/v1673470866/mysurfspot/guestUser_ezwpvs.jpg";

  async function handleNewEntry(event) {
    if (image == null) {
      event.preventDefault();

      let inputData = {
        text: event.target.elements.varText.value,
        _id: spotData._id,
        name: user,
        date: now,
        avatar: avatar,
        picture: "null",
      };
      event.target.reset();
      event.target.elements.varText.focus();
      newComment(inputData);
    } else {
      event.preventDefault();

      // Picture upload
      const formData = new FormData(event.target);
      formData.append("file", image);
      formData.append("upload_preset", process.env.NEXT_PUBLIC_UPLOAD_PRESET);

      const url = `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDNAME}/upload`;
      const response = await fetch(url, {
        method: "POST",
        body: formData,
      });
      const json = await response.json();
      setImage(null);

      let pictureOrNull = "";

      if (image === null) {
        pictureOrNull = "null";
      } else {
        pictureOrNull = json.url;
      }

      const formValues = Object.fromEntries(formData);

      //picture upload ende

      let inputData = {
        text: event.target.elements.varText.value,
        _id: spotData._id,
        name: user,
        date: now,
        avatar: avatar,
        picture: pictureOrNull,
      };
      event.target.reset();
      event.target.elements.varText.focus();
      newComment(inputData);
    }
  }

  return (
    <StyledForm onSubmit={handleNewEntry}>
      <StyledPreviewSection>
        {image && <ImagePreview file={image} />}
      </StyledPreviewSection>

      <StyledInputText
        type="text"
        name="varText"
        placeholder="Write here.."
        required
      ></StyledInputText>
      <section>
        <StyledPictureUploadContainer>
          <StyledLabelPicture htmlFor="avatar">
            <div>
              <Image
                src={pictureUpload}
                width={40}
                height={40}
                alt="bild hochladen"
              />
            </div>
          </StyledLabelPicture>
          <StyledPictureInput
            type="file"
            name="avatar"
            id="avatar"
            onChange={(event) => {
              setImage(event.target.files[0]);
            }}
          />
        </StyledPictureUploadContainer>
      </section>
      <StyledButton type="submit">
        <Image src={addMessage} alt="addMessageButton" width={40} height={40} />
      </StyledButton>
    </StyledForm>
  );
}

const StyledForm = styled.form`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  box-shadow: 4px 0px 20px rgba(0, 0, 0, 0.25);
`;

const StyledInputText = styled.input`
  padding-left: 5%;
  width: 60vw;
  height: 70%;
  border: none;
  background: #ffffff;
  border: 2px solid #787777;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
  border-radius: 33.5px;
  font-size: 18px;
  ::placeholder {
  }
  &:focus {
    outline: none;
  }
`;

const StyledButton = styled.button`
  background: rgba(255, 255, 255, 0);
  border: none;
  margin-top: 5px;
`;

const StyledPictureInput = styled.input`
  display: none;
`;

const StyledPictureUploadContainer = styled.div`
  padding: 0 10px;
`;
const StyledLabelPicture = styled.label`
  font-size: 1.3rem;
`;

const StyledPreviewSection = styled.section`
  position: absolute;
  bottom: 80%;
  height: auto;
`;
