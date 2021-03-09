// A component import
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css"; //tara
import "./App.css";
import Header from "./components/Header"; //tara
import Podcasts from "./components/podcast/Podcasts";
import Footer from "./components/Footer"; //tara
import FavoritesFetch from "./components/podcast/FavoritesFetch";
import FavoritesDisplay from "./components/podcast/FavoritesDisplay";
// import ReviewIndex from "./components/podcast/reviews/ReviewIndex";
import RandomPod from "./components/podcast/RandomPod";

import {
  //tara
  BrowserRouter as Router,
} from "react-router-dom";

function App() {
  const [sessionToken, setSessionToken] = useState("");

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setSessionToken(localStorage.getItem("token"));
    }
  }, []);

  const updateToken = (newToken) => {
    localStorage.setItem("token", newToken);
    setSessionToken(newToken);
    console.log(sessionToken);
  };

  const clearToken = () => {
    localStorage.clear();
    setSessionToken("");
  };

  return (
    <div className="page-container">
      <div className="content-wrap">
        <Router>
        <Header />
        </Router>
        <Podcasts />
        {/* <RandomPod /> */}
        {/* <FavoritesFetch />  //Lesley*/} 
        {/* <FavoritesDisplay />  //Lesley*/}
        <Footer />
      </div>
    </div>
  );
}

export default App;
