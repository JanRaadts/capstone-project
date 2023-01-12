import SpotSocialComment from "./SpotSocialComment";
import SpotSocialForm from "./SpotSocialForm";
import styled from "styled-components";
import { nanoid } from "nanoid";

export default function SpotSocial({ spotData, loadAgain }) {
  function handleNewComment(comment) {
    let dbComments = spotData.comments.map((comment) => {
      return {
        text: comment.text,
        _id: comment._id,
        name: comment.name,
        date: comment.date,
        avatar: comment.avatar,
      };
    });
    dbComments.push(comment);

    const updatedSpot = {
      ...spotData,
      comments: dbComments,
    };

    uploadChange(updatedSpot);
    setTimeout(function () {
      loadAgain();
    }, 150);
  }

  async function uploadChange(data) {
    await fetch("/api/" + data._id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  }

  const commentsArray = spotData.comments;
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
