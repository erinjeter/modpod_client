// A component import
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css"; //tara
import "./App.css";

import Header from "./components/Header"; //tara
import History from "./components/History"; //tara

import Podcasts from "./components/podcast/Podcasts";
import Auth from "./auth/Auth";
import Home from "./components/Home"; //tara
import Footer from "./components/Footer"; //tara
import FavoritesFetch from "./components/podcast/FavoritesFetch";
// import Genre from "./components/podcast/Genre"
// import RandomPod from "./components/podcast/RandomPod"
// import Cards from './components/Cards';//tara
// import Carousel from './components/Carousel';//tara
// import Navbar from './components/Navbar'; //tara
// import Navigation from "./components/Navigation";//tara

import {
  //tara
  BrowserRouter as Router,
} from "react-router-dom";
import FavoritesDisplay from "./components/podcast/FavoritesDisplay";

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

  // const protectedViews = () => {
  //   return sessionToken === localStorage.getItem("token") ? (
  //     <Podcasts token={sessionToken} />
  //   ) : (
  //     <Auth updateToken={updateToken} />
  //   );
  // };

  return (
    <div className="page-container">
      <div className="content-wrap">
        {/* {protectedViews()} */}
        <Router>
          <Header />
          {/* <Navbar /> */}
          {/* <Home /> */}
          {/* <History /> */}
          {/* <IdFetch /> */}
        </Router>
        {/* <RandomPod /> */}
        {/* <Genre /> */}
        <Podcasts />
        <FavoritesFetch />
        <FavoritesDisplay />
        <Footer />
      </div>
    </div>
  );
}

export default App;
