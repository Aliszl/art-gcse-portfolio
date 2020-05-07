import React, { useContext, useEffect, useState } from "react";
// import { Context } from '../context';
import { Button, Form, Input } from "antd";
import { useHistory } from "react-router-dom";
import {
   StyledForm,
  StyledContainer,
  Upload,
} from "../styles/styled-components";
import axios from "axios";
import { Context } from "../context/Context";
import emptyFrame from "../img/emptyFrame.png";
// import { Formik, Form, Field, ErrorMessage } from "formik";
import { CameraOutlined, EditOutlined } from "@ant-design/icons";



export default function AddArt(props) {
  const history = useHistory();
  const { getAllArt } = useContext(Context);
  // const { handleUpload } = useContext(Context);
 

  const handleUpload = () => {
    const CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/alicloud/upload";
    const CLOUDINARY_UPLOAD_PRESET = "fz3g2zoh";
    let imgPreview = document.getElementById("img-preview");
    let fileUpload = document.getElementById("file-upload");
    let srcDOMelement= document.getElementsByClassName("ant-input")[0];


    fileUpload.addEventListener("change", function (event) {
      console.log(event);
      let file = event.target.files[0];
      let formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);
      console.log(file);
   
      axios({
        url: CLOUDINARY_URL,
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        data: formData,
      })
        .then(function (res) {
          console.log(res);
          console.log(res.data.url);
          srcDOMelement.value = res.data.secure_url;
          console.log(srcDOMelement.value);

          console.log(initialFormValues);
          imgPreview.src = res.data.secure_url;
        })
        .catch(function (err) {
          console.error(err);
        });
    });
  };

  let initialFormValues = {
    source_image: null,
    title: "",
    description: "",
    artist_id: 1,
    theme_id: 1,
  };

  const [newArt, setNewArt] = useState(initialFormValues);
  console.log(initialFormValues);
  console.log(newArt);
  useEffect(() => {
    handleUpload();
  }, []);


  const handleChange = e => {
    setNewArt({
      ...newArt,
      [e.target.name]: e.target.value,
  
    });
     console.log(e.target.value)
};

const handleSubmitArt = (e, inputValues) => {
  console.log("submit")
  axios
    .post('http://localhost:5000/api/artwork', inputValues)
    .then(response => {
      console.log("submit")
      getAllArt();
      history.push('/');
    })
    .catch(e => {
      alert(e.message);
    });
};
  return (
    <div>
      <Upload>
        <h1>Select Digital Art</h1>
        <img
          src={emptyFrame}
          id="img-preview"
          width="300px"
          alt="placeholder"
        />

        <label className="file-upload-container" htmlFor="file-upload">
          <input id="file-upload" type="file" />
        </label>
      </Upload>
      <StyledContainer>
        <StyledForm
       
        >
          <Form.Item
            label="Image url"
            rules={[{ required: true, message: "source_image" }]}
          >
            <Input
              name="source_image"
              prefix={<CameraOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="URL"
              onChange={handleChange}
              // value={initialFormValues.source_image}
              //value ="URL"
            />
          </Form.Item>

          <Form.Item
            label="Title"
            rules={[{ required: true, message: "title" }]}
          >
            <Input
              name="title"
              placeholder="Title"
              // value={newRecipe.title}
              onChange={handleChange}
              prefix={<EditOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
            />
          </Form.Item>

          <Form.Item
            label="Description"
            rules={[{ required: true, message: "description" }]}
          >
            <Input
              name="description"
              placeholder="Description"
              // value={newRecipe.description}
              onChange={handleChange}
              prefix={<EditOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
            />

               <Form.Item
            label="artist_id"
           hidden={true}
            rules={[{ required: true, message: "Artist Id" }]}
          >
            <Input
              name="artist_id"
             
             
              onChange={handleChange}
              prefix={<EditOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
            />
              </Form.Item>

              <Form.Item
            label="theme_id"
            rules={[{ required: true, message: "Artist Id" }]}
            hidden={true}
          >
            <Input
              name="theme_id"
              
              onChange={handleChange}
              prefix={<EditOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
            />
              </Form.Item>
            <Button
             
              type="primary"
              htmlType="submit"
              onClick={e => handleSubmitArt(e, newArt)}
            >
              Submit Recipe
            </Button>
          </Form.Item>
        </StyledForm>
      </StyledContainer>
    </div>
  );
}
