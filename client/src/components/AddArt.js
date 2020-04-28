import React, { useContext, useEffect } from "react";
import { Button } from "antd";
import { StyledCard } from "../styles/styled-components";
import axios from "axios";
import { Context } from "../context/Context";



export default function AddArt(props) {
    const { handleUpload } = useContext(Context);

   
    useEffect(() => {
        handleUpload();
      }, []);

  return (
       <div>

           Select an Image
          <img
            src="https://art-gcse-portfolio.s3.eu-west-2.amazonaws.com/darkwood.jpg"
            id="img-preview"
            width="300px"
          />

          <label className="file-upload-container" for="file-upload">
            <input id="file-upload" type="file" />
           
          </label>
       </div>
 
      
      
    
  );
}


{/* <StyledCard>
Add an art piece
    <img src="https://art-gcse-portfolio.s3.eu-west-2.amazonaws.com/darkwood.jpg" id="img-preview" width="300px"/>
    <div class="file-upload-container" for="file-upload">
  <input id="file-upload" type="file" />
 </div>

</StyledCard> */}