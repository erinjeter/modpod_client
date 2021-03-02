// A component import
import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.css'; //tara
import "./App.css";
// import SiteBar from "./components/Navbar"; //tara removed
import Header from './components/Header'; //tara
// import Cards from './components/Cards';//tara
// import Carousel from './components/Carousel';//tara
// import Navbar from './components/Navbar'; //tara
// import History from "./components/History"; //tara 
import Podcasts from "./components/podcast/Podcasts";
import Auth from "./auth/Auth";
// import Home from "./components/Home";//tara
// import Navigation from "./components/Navigation";//tara
import Footer from "./components/Footer"; //tara
// import Pagination from './components/Pagination';//tara
import { //tara
  BrowserRouter as Router,
} from 'react-router-dom';
// import Sidebar from "./components/Navigation";

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
    <div className="page-container">
      <div className='content-wrap'>
        {/* <Header /> */}
        {/* <SiteBar clearToken={clearToken} /> */} {/* tara commented out*/}
        <Router>
          <Header />
          {/* <Cards /> */}
        </Router>
        {protectedViews()}

        {/* <Header /> */}
        {/* <Carousel /> */}

        <Footer />
        {/* <Pagination /> */}
      </div>
    </div>
  );
}

export default App;


