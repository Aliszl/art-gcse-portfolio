import React, { useState, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import { Layout } from "antd";
import Art from "./components/Art"
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

  const getAllArt = () => {
   axios
      .get("http://localhost:5000/api/artwork/")
      .then(response => {
        console.log(response.data);
        setArt(response.data);
      })
      .catch(error => {
     console.log(error)
      });
  };


  const deleteArt = (evt, id) => {
    axios
      .delete(`https://localhost:5000/api/artwork/${id}`)
      .then(response => {
        setArt(response.data);
        getAllArt();
      })
      .catch(error => {
        console.error(error);
      });
  };

  const getCurrentArtId = (evt, id) => {
    axios()
      .get(`https://localhost:5000/api/artwork/${id}`)
      .then(response => {
        setArt(response.data);
        setCurrentArtId(response.data.data.id);
        jumpToArtId.push("/recipe");
      })
      .catch(error => {
        console.error(error);
      });
  };
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
          getCurrentArtId
        }}
      >
        <Layout>
          {/* <Header>
            <Navigation />
          </Header> */}
          <Content>
            <Route exact path="/" component={Art} />
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
