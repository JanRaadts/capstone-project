import SpotSocialComment from "./SpotSocialComment";
import SpotSocialForm from "./SpotSocialForm";
import { useState } from "react";
import styled from "styled-components";

export default function SpotSocial({ ID }) {
  const [comments, setComments] = useState([]);
  console.log(comments);

  function handleNewComment(comment) {
    setComments([...comments, comment]);
  }

  return (
    <>
      <StyledCommentsList>
        {comments.map((comment) => {
          return <SpotSocialComment text={comment.text} key={comment.id} />;
        })}
      </StyledCommentsList>

      <SpotSocialForm ID={ID} newComment={handleNewComment} />
    </>
  );
}

const StyledCommentsList = styled.section`
  margin-bottom: 85px;
`;
