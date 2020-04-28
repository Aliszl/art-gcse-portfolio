import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";

const Navigation = () => {
  return (
    <>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["1"]}
        style={{ lineHeight: "64px" }}
      >
        <Menu.Item key="1">
          <Link to="/">Gallery</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/MyGallery">My Gallery</Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to="/login">Login</Link>
        </Menu.Item>
        <Menu.Item key="4">
          <Link to="/registration">Registration</Link>
        </Menu.Item>
        <Menu.Item key="5">
          <Link to="/AddArt">Add Art Piece</Link>
        </Menu.Item>
      </Menu>
    </>
  );
};

export default Navigation;
