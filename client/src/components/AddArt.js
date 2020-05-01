import React, { useContext, useEffect, useState } from "react";
// import { Context } from '../context';
import { Button, Form, Input } from "antd";
import { useHistory } from "react-router-dom";
import {
  StyledCard,
  StyledForm,
  StyledContainer,
} from "../styles/styled-components";
// import axios from "axios";
import { Context } from "../context/Context";
import emptyFrame from "../img/emptyFrame.png";
// import { Formik, Form, Field, ErrorMessage } from "formik";
import { CameraOutlined, EditOutlined } from "@ant-design/icons";

const initialFormValues = {
  source_image:
    "https://art-gcse-portfolio.s3.eu-west-2.amazonaws.com/darkwood.jpg",
  title: "",
  description: "",
  artist_id: 1,
  theme_id: 1,
};

export default function AddArt(props) {
  const history = useHistory();
  const { getAllArt } = useContext(Context);
  const { handleUpload } = useContext(Context);

  const [newArt, setNewArt] = useState(initialFormValues);
  useEffect(() => {
    handleUpload();
  }, []);

  return (
    <StyledCard>
      <h1>Select Digital Art</h1>
      <img src={emptyFrame} id="img-preview" width="300px" alt="placeholder" />

      <label className="file-upload-container" htmlFor="file-upload">
        <input id="file-upload" type="file" />
      </label>
      <StyledContainer>
        <StyledForm
          //   {...layout}
          name="basic"
          initialValues={{ remember: true }}
          // onFinish={onFinish}
          // onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Image url"
            rules={[{ required: true, message: "source_image" }]}
          >
            <Input
              name="recipe_image"
              prefix={<CameraOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="url"
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
              // onChange={handleChange}
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
              // onChange={handleChange}
              prefix={<EditOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
            />
            <Button
              // onClick={e => handleSubmitRecipe(e, newRecipe)}
              type="primary"
              htmlType="submit"
            >
              Submit Recipe
            </Button>
          </Form.Item>
        </StyledForm>
      </StyledContainer>
    </StyledCard>
  );
}
