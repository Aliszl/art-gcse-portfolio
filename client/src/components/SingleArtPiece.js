import React, { useContext } from "react";
import { Context } from "../context/Context";
// import styled from "styled-components";
import { Button } from "antd";
import { Link } from "react-router-dom";

export default function SingleArtPiece(props) {
  const { artPiece, currentArtId } = useContext(Context);
  return (
    <h1>Single <div class="card text-left">
      <img class="card-img-top" src="holder.js/100px180/" alt="">
      <div class="card-body">
        <h4 class="card-title">Title</h4>
        <p class="card-text">Body</p>
      </div>
    </div></h1>
    // <StyledDiv>
    //   <h1>{artPiece}</h1>
    //   {/* <h1>{artPiece.title}</h1>
    //   <Link to={`/${currentArtId}`}>
    //     <Button>Edit piece</Button>
    //   </Link>
    //   <h1>Title</h1>
    //   <h1> {artPiece.title}</h1>
    //   <h2>Directions</h2>
    //   <h2>{artPiece.directions}</h2>
    //   <img src={artPiece.source_image} alt="food" /> */}
  
    //  </StyledDiv>
  );
}
// styling
// const StyledDiv = styled.div`
//   margin: 20px auto;
//   width: 80%;
//   border: #a1b5c9 2px solid;
//   height: auto;
//   border-radius: 4px;
//   box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
//   overflow: hidden;
//   h1 {
//     font-size: 3rem;
//   }
//   h2 {
//     font-size: 2rem;
//   }
//   h3 {
//     font-size: 1rem;
//   }
// `;
