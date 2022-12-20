import SpotSocialComment from "./SpotSocialComment";
import SpotSocialForm from "./SpotSocialForm";
import styled from "styled-components";

export default function SpotSocial({ SpotData }) {
  function handleNewComment(comment) {
    let dbComments = SpotData.comments.map((comment) => {
      return { text: comment.text, _id: comment._id };
    });
    dbComments.push(comment);

    const updatedSpot = {
      _id: SpotData._id,
      slug: SpotData.slug,
      name: SpotData.name,
      image: SpotData.image,
      country: SpotData.country,
      city: SpotData.city,
      zip: SpotData.zip,
      street: SpotData.street,
      coordinates: SpotData.coordinates,
      latitude: SpotData.latitude,
      longitude: SpotData.longitude,
      description: SpotData.description,
      winddirection: SpotData.winddirection,
      surfcenter: SpotData.surfcenter,
      parking: SpotData.parking,
      camping: SpotData.camping,
      comments: dbComments,
    };

    useChange(updatedSpot);
    window.location.reload(false);
  }

  async function useChange(data) {
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
        {SpotData.comments.map((comment) => {
          return <SpotSocialComment text={comment.text} key={comment.text} />;
        })}
      </StyledCommentsList>

      <SpotSocialForm newComment={handleNewComment} SpotData={SpotData} />
    </>
  );
}

const StyledCommentsList = styled.section`
  margin-bottom: 85px;
`;
