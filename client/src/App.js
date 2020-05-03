import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import { Layout } from "antd";
import MyGallery from "./components/GalleryByUser";
import AddArt from "./components/AddArt";
import SingleArtPiece from "./components/SingleArtPiece";
import axios from "axios";
import { Context } from "./context/Context";
// import { useLocalStorage, withAuth, useForm } from "./hooks/CustomHooks";
import { useHistory } from "react-router-dom";
import "./App.css";
import "antd/dist/antd.css";
import Home from "./components/Home";
import Navigation from "./components/Navigation";


const { Header, Content } = Layout;

const App = () => {
  const jumpToArtId = useHistory();
  const [art, setArt] = useState([]);
  const [currentArtId, setCurrentArtId] = useState(null);



  const getAllArt = () => {
    axios
      .get("http://localhost:5000/api/artwork/")
      .then((response) => {
        console.log(response.data);
        setArt(response.data);
        console.log(art);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getArtById = (evt, id) => {
    axios
      .get(`http://localhost:5000/api/artwork/${id}`)
      .then((response) => {
        console.log(id);
        console.log(response.data);
        setCurrentArtId(response.data[0]);
        jumpToArtId.push(`/${id}`);
        console.log(currentArtId);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const deleteArt = (e, id) => {
    e.preventDefault();
    axios
      .delete(`http://localhost:5000/api/artwork/${id}`)
      .then((response) => {
        setArt(art.filter((artPiece) => artPiece.id !== id));
      })
      .catch((error) => {
        console.error(error);
      });
  };
  console.log(art);
  console.log(currentArtId);

  return (
    <div className="App">
      <Context.Provider
        value={{
          art,
          setArt,
          getAllArt,
          deleteArt,
          setCurrentArtId,
          currentArtId,
          jumpToArtId,
          getArtById,
         
        }}
      >
        <Layout>
          <Header>
            <Navigation />
          </Header>
          <Content>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/MyGallery" component={MyGallery} />
              <Route exact path="/AddArt" component={AddArt} />
              <Route exact path="/:id" component={SingleArtPiece} />
              {/* <Route exact path="/art">
              <Home />
            </Route> */}
            </Switch>
          </Content>
        </Layout>
      </Context.Provider>
    </div>
  );
};

export default App;
