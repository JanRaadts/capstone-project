import { useSession } from "next-auth/react";
import styled from "styled-components";
import Image from "next/image";
import addMessage from "../../../public/images/addMessage.svg";

export default function SpotSocialForm({ newComment, spotData }) {
  const { data: session } = useSession();
  const today = new Date();
  const now = today.toLocaleString();

  const user = session ? session.user.name : "Gast";
  const avatar = session
    ? session.user.image
    : "https://res.cloudinary.com/dac3s5ere/image/upload/v1673470866/mysurfspot/guestUser_ezwpvs.jpg";

  function handleNewEntry(event) {
    event.preventDefault();
    let inputData = {
      text: event.target.elements.varText.value,
      _id: spotData._id,
      name: user,
      date: now,
      avatar: avatar,
    };
    event.target.reset();
    event.target.elements.varText.focus();
    newComment(inputData);
  }

  return (
    <StyledForm onSubmit={handleNewEntry}>
      <StyledInputText
        type="text"
        name="varText"
        placeholder="Tell us more about the Spot..."
        required
      ></StyledInputText>
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
  width: 80vw;
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
