import SpotSocialComment from "./SpotSocialComment";
import SpotSocialForm from "./SpotSocialForm";
import styled from "styled-components";
import { nanoid } from "nanoid";
import { useState } from "react";

export default function SpotSocial({ spotData }) {
  function handleNewComment(comment) {
    let dbComments = spotData.comments.map((comment) => {
      return {
        text: comment.text,
        _id: comment._id,
        name: comment.name,
        date: comment.date,
        avatar: comment.avatar,
        picture: comment.picture,
      };
    });
    dbComments.push(comment);

    const updatedSpot = {
      ...spotData,
      comments: dbComments,
    };

    uploadChange(updatedSpot);
  }

  async function uploadChange(data) {
    const response = await fetch("/api/" + data._id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const json = await response.json();
    console.log(json);
    setCommentsArray(json.comments);
  }

  const [commentsArray, setCommentsArray] = useState(spotData.comments);
  const reverseComments = [...commentsArray].reverse();

  return (
    <>
      <StyledCommentsList>
        {reverseComments.map((comment) => {
          return (
            <SpotSocialComment
              text={comment.text}
              name={comment.name}
              date={comment.date}
              profilImage={comment.avatar}
              picture={comment.picture}
              key={nanoid()}
            />
          );
        })}
      </StyledCommentsList>

      <SpotSocialForm newComment={handleNewComment} spotData={spotData} />
    </>
  );
}

const StyledCommentsList = styled.section`
  margin-bottom: 85px;
`;
