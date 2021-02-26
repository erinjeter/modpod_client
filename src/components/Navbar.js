import React, { useState } from "react";
import {
  Button,
  NavbarToggler,
  NavItem,
  NavbarBrand,
  Collapse,
  Navbar,
  Nav,
} from "reactstrap";

// Function name matches file name
const SiteBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    let newIsOpen = !isOpen;
    setIsOpen(newIsOpen);
  };

  return (
    <Navbar>
      <NavbarBrand href="/">ModPod</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav navbar>
          <NavItem>
            <Button onClick={props.clickLogout}>Logout</Button>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

// Makes it available for import
export default SiteBar;
