// A component import
import React, { useState, useEffect } from "react";
import "./App.css";
import SiteBar from "./components/Navbar";
import Podcasts from "./components/podcast/Podcasts";
import Auth from "./auth/Auth";
import Example from "./components/podcast/Card";
import Podcast from "./components/podcast/Podcast";
// import Home from "./components/Home";


function App() {
  const [sessionToken, setSessionToken] = useState("");

  const clearToken = () => {
    localStorage.clear();
    setSessionToken("");
  };

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

  const protectedViews = () => {
    return sessionToken === localStorage.getItem("token") ? (
      <Podcasts token={sessionToken} />
    ) : (
      <Auth updateToken={updateToken} />
    );
  };

  return (
    <div className="App">
      <SiteBar clearToken={clearToken} />
      {protectedViews()}
      
      <Podcasts />
    </div>
  );
}

export default App;
