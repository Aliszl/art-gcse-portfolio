import React, { useContext } from "react";
import { Context } from "../context/Context";
import { Button } from "antd";
import { StyledCard } from "../styles/styled-components";

// const { Meta } = Card;
export default function ArtCard(props) {
  const { deleteArt, getArtById } = useContext(Context);

  const {
    id,
    title,
    source_image,
    // description,
    // artist_id,
    // theme_id
  } = props.artPiece;
  return (
    <StyledCard className="card text-left">
      <div className="outer">
      <h1>{title}</h1>
        <div className="frame">
          <img src={source_image} alt="" />
        </div>
        
        <Button onClick={e => getArtById(e, id)}>View details</Button>
        &nbsp;&nbsp;
        <Button type="primary" onClick={e => deleteArt(e, id)}>
          Delete
        </Button>
      </div>
    </StyledCard>
  );
}
