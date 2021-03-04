//THIS IS THE HOMEPAGE

// import React from "react"; // The import needed to build a react app, needed for the React.StrictMode> component
// import { } from "react-router-dom";
// import SiteBar from "./Navbar";

// const Home = () => {
//   return (
//     <div>
//       <SiteBar />
//     </div>
//   );
// };

// export default Home;

import React from "react";
import { Link } from "react-router-dom";
import Cards from "./Cards";

const Home = () => {
  return (
    <div className="main">
      <div className="mainDiv">
        <hr />
        <Cards />
        <hr />
      </div>
    </div>
  );
};

export default Home;
