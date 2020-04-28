import React from "react";
import styled from "styled-components";
import GalleryAllArt from "./GalleryAllArt";

const Home = () => {
  return (
    <MyDiv>
      <GalleryAllArt />
    </MyDiv>
  );
};

export default Home;

const MyDiv = styled.div`
  margin: 0 auto;
  border: 1px, solid, #0088dd;
  img {
    width: 600px;
  }

  h3 {
    text-align: center;
    font-size: 4vh;
  }

  h4 {
    font-weight: bolder;
    font-size: 4vw;
  }
  .text-container {
    margin: 0 auto;
    border: 5%;
  }
  .footer {
    margin: 0 auto;
  }
`;
