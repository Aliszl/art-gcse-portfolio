import React, { useContext } from "react";
import { Context } from "../context/Context";
import ArtCard from "./ArtCard";
import { Button } from "antd";
import { Link } from "react-router-dom";
import { StyledCard } from "../styles/styled-components";

export default function SingleArtPiece(props) {
  const { currentArtId } = useContext(Context);
  const { title, description, source_image } = currentArtId;
  console.log(currentArtId);
  return (
    <>
      {currentArtId && (
        <StyledCard className="card text-left">
          <div className="frame">
            <img src={source_image} alt="" />
          </div>
          <h1>{title}</h1>
          <h2>{description}</h2>
          <h3>url:{source_image}</h3>
        </StyledCard>
      )}
    </>
  );
}
