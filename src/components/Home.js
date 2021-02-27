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




import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='main'>
      <div className='mainDiv'>
        <h1>Welcome To ModPod - The Greatest Podcast Ever!</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec ac odio tempor orci dapibus ultrices in iaculis. Integer malesuada nunc vel risus commodo viverra. Cras tincidunt lobortis feugiat vivamus at augue. Dolor magna eget est lorem ipsum dolor sit amet consectetur. Rhoncus mattis rhoncus urna neque. At auctor urna nunc id cursus metus aliquam eleifend mi. Sed viverra ipsum nunc aliquet bibendum enim facilisis. Scelerisque varius morbi enim nunc faucibus a pellentesque sit. Felis imperdiet proin fermentum leo vel orci porta non.
            </p>
        <hr />
        <h4>Rhoncus Mattis Urna</h4>
        <ul>
          <li>Sed viverra ipsum nunc aliquet bibendum <Link to='/resources'>here</Link></li>
          <li>Donec ac odio tempor orci dapibus ultrices in iaculis</li>
          <li><Link to='/resources'>Lorem Ipsum</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Home;