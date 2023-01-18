import Image from "next/image";
import { useMemo } from "react";
import styled from "styled-components";

export default function ImagePreview({ file }) {
  const src = useMemo(() => URL.createObjectURL(file), [file]);

  return (
    <StyledContainer>
      <StyledDiv>
        <StyledImage src={src} width="100" height="50" alt="Upload preview" />
      </StyledDiv>
    </StyledContainer>
  );
}

const StyledDiv = styled.div`
  padding: 15px 0;
  width: 100%;
`;

const StyledImage = styled(Image)`
  width: 100%;
  max-width: 600px;
  height: auto;
  border-radius: 5px;
`;

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
