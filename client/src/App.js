import React, { useState, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import { Layout } from "antd";
import Art from "./components/Art";
import SingleArtPiece from "./components/SingleArtPiece";
import axios from "axios";
import { Context } from "./context/Context";
// import { useLocalStorage, withAuth, useForm } from "./hooks/CustomHooks";
import { useHistory } from "react-router-dom";
import "./App.css";
import "antd/dist/antd.css";

const { Header, Content } = Layout;

const App = () => {
  const jumpToArtId = useHistory();
  const [art, setArt] = useState([]);
  const [currentArtId, setCurrentArtId] = useState(null);
  const initialArtFormValues = {
    source_image: "	https://art-gcse-portfolio.s3.eu-west-2.amazonaws.com/darkwood.jpg",
    title: "",
    description: "",
   
   
  };

  const [artPiece, setArtPiece] = useState(initialArtFormValues);

  const getAllArt = () => {
   axios
      .get("http://localhost:5000/api/artwork/")
      .then(response => {
        console.log(response.data);
        setArt(response.data);
        console.log(art);
      })
      .catch(error => {
     console.log(error)
      });
  };
  
  const getArtById = (evt, id) => {
    axios
      .get(`http://localhost:5000/api/artwork/${id}`)
      .then(response => {
        console.log("hi from inside axios");
        console.log(id);    
        console.log(response.data);
            setCurrentArtId(response.data);
                 jumpToArtId.push(`/${id}`);
  
    console.log(currentArtId);
    // console.log(response.id)
      })
      .catch(error => {
        console.error(error);
      });
    
  };

    const deleteArt = (id) => {
    axios
      .delete(`http://localhost:5000/api/artwork/${id}`)
      .then(response => {
        setArt(response.data);
        getAllArt();
      })
      .catch(error => {
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
          artPiece, 
          setArtPiece,
          initialArtFormValues
        }}
      >
        <Layout>
          {/* <Header>
            <Navigation />
          </Header> */}
          <Content>
            <Route exact path="/" component={Art} />
            <Route exact path="/:id" component={SingleArtPiece} />
            {/* <Route exact path="/art">
              <Home />
            </Route> */}
          </Content>
        </Layout>
      </Context.Provider>
    </div>
  );
};

export default App;


// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
