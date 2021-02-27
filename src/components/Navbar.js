// import React, { useState } from "react";
// import {
//   Button,
//   NavbarToggler,
//   NavItem,
//   NavbarBrand,
//   Collapse,
//   Navbar,
//   Nav,
// } from "reactstrap";

// // Function name matches file name
// const SiteBar = (props) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const toggle = () => {
//     let newIsOpen = !isOpen;
//     setIsOpen(newIsOpen);
//   };

//   return (
//     <Navbar>
//       <NavbarBrand href="/">ModPod</NavbarBrand>
//       <NavbarToggler onClick={toggle} />
//       <Collapse isOpen={isOpen} navbar>
//         <Nav navbar>
//           <NavItem>
//             <Button onClick={props.clickLogout}>Logout</Button>
//           </NavItem>
//         </Nav>
//       </Collapse>
//     </Navbar>
//   );
// };

// // Makes it available for import
// export default SiteBar;


import React from 'react';
import * as ReactBootStrap from 'react-bootstrap';

<ReactBootStrap.Navbar className="bg-light justify-content-between">
  <ReactBootStrap.Form inline>
    <ReactBootStrap.InputGroup>
      <ReactBootStrap.InputGroup.Prepend>
        <ReactBootStrap.InputGroup.Text id="basic-addon1">@</ReactBootStrap.InputGroup.Text>
      </ReactBootStrap.InputGroup.Prepend>
      <ReactBootStrap.FormControl
        placeholder="Username"
        aria-label="Username"
        aria-describedby="basic-addon1"
      />
    </ReactBootStrap.InputGroup>
  </ReactBootStrap.Form>
  <ReactBootStrap.Form inline>
    <ReactBootStrap.FormControl type="text" placeholder="Search" className=" mr-sm-2" />
    <ReactBootStrap.Button type="submit">Submit</ReactBootStrap.Button>
  </ReactBootStrap.Form>
</ReactBootStrap.Navbar>


export default Navbar;