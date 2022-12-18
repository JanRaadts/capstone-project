import styled from "styled-components";

export default function SpotSocial() {
  function handleNewEntry(event) {
    event.preventDefault();
    let inputData = {
      id: nanoid(),
      text: event.target.elements.varText.value,
      name: event.target.elements.author.value,
    };
    event.target.reset();
    event.target.elements.varText.focus();
    entryData(inputData);
  }

  return (
    <>
      <StyledForm onSubmit={handleNewEntry}>
        <StyledInputText
          type="text"
          name="varText"
          placeholder="Type your thoughts..."
          required
        ></StyledInputText>
        <StyledInputAuthor
          type="text"
          name="author"
          placeholder="Your Name"
          required
        ></StyledInputAuthor>
        <StyledButton type="submit">test</StyledButton>
      </StyledForm>
    </>
  );
}

const StyledForm = styled.form`
  position: fixed;
  bottom: 0;
  background-color: white;
  width: 100%;
  display: flex;
  justify-content: center;
  border-top: 4px #0084b2 solid;
`;

const StyledInputText = styled.input`
  padding: 5px;
  width: 250px;
  height: 60px;
  border: none;
  border-bottom: 2px #0084b2 solid;
  margin-right: 10px;
  margin-left: 10px;
  font-size: 15px;
  caret-color: white;
  &:focus {
    outline: none;
    border-bottom: 2px blue solid;
  }
`;

const StyledInputAuthor = styled.input`
  padding: 5px;
  height: 60px;
  border: none;
  border-bottom: 2px #0084b2 solid;
  font-size: 15px;
  margin-bottom: 10px;
`;

const StyledButton = styled.button`
  border: none;
  background-color: white;
  font-size: 30px;
  text-align: center;
  margin-left: 10px;
`;
