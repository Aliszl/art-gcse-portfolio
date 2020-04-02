import React, { useContext, useEffect } from "react";
import ArtCard from "./ArtCard";
import styled from "styled-components";
import { Context } from "../context/Context";
import SearchBar from "./SearchBar";

export default function Art() {
  const { art, getAllArt } = useContext(Context);

  useEffect(() => {
    getAllArt();
  }, []);

  // const filteredArt = art.filter(char =>
  //   char.title.toLowerCase().includes(searchValue.toLowerCase())
  // );

  return (
    <StyledCards className="artPiece">
      <h1>Art</h1>
      <div className="searchBar">
        <SearchBar />
      </div>
      <StyledCard>
        {art.map(artPiece => {
          return <ArtCard key={artPiece.id} artPiece={artPiece} />;
        })}
      </StyledCard>
    </StyledCards>
  );
}
const StyledCards = styled.div`
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  .searchBar {
    display: flex;
    justify-content: center;
  }
`;
const StyledCard = styled.div`
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (min-width: 768px) {
    margin: 0 auto;
  }

  img {
    height: 400px;
    width: 30%;
  }
`;
