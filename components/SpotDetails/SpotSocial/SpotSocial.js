import SpotSocialComment from "./SpotSocialComment";
import SpotSocialForm from "./SpotSocialForm";
import styled from "styled-components";

export default function SpotSocial({ spotData }) {
  function handleNewComment(comment) {
    let dbComments = spotData.comments.map((comment) => {
      return { text: comment.text, _id: comment._id };
    });
    dbComments.push(comment);

    const updatedSpot = {
      ...spotData,
      comments: dbComments,
    };

    uploadChange(updatedSpot);
    window.location.reload(false);
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

  return (
    <>
      <StyledCommentsList>
        {spotData.comments.map((comment) => {
          return <SpotSocialComment text={comment.text} key={comment.text} />;
        })}
      </StyledCommentsList>

      <SpotSocialForm newComment={handleNewComment} spotData={spotData} />
    </>
  );
}

const StyledCommentsList = styled.section`
  margin-bottom: 85px;
`;
