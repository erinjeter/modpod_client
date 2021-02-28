import React from "react";
import * as ReactBootStrap from "react-bootstrap";
// import Switch from 'react-bootstrap/esm/Switch';
// import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap'; //tara commented out

import Home from "./Home";
import History from "./History";

import { Route, Link, Switch } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <ReactBootStrap.Navbar
        collapseOnSelect
        expand="md"
        bg="dark"
        variant="dark"
      >
        {" "}
        {/*tara - breakpts - expand={'sm' | 'md' | 'lg' | 'xl'}*/}
        <ReactBootStrap.Navbar.Brand href="#home">
          MODPOD
        </ReactBootStrap.Navbar.Brand>
        <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
          <ReactBootStrap.Nav className="mr-auto">
            <ReactBootStrap.Nav.Link href="#favorites">
              Favorites
            </ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link href="#history">
              History
            </ReactBootStrap.Nav.Link>

            <ReactBootStrap.NavDropdown
              title="Dropdown"
              id="collapsible-nav-dropdown"
            >
              <ReactBootStrap.NavDropdown.Item href="#action/3.1">
                Action
              </ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Item href="#action/3.2">
                Another action
              </ReactBootStrap.NavDropdown.Item>
              {/* <ReactBootStrap.NavDropdown.Item href="#action/3.3">Something</ReactBootStrap.NavDropdown.Item>
                            <ReactBootStrap.NavDropdown.Divider />
                            <ReactBootStrap.NavDropdown.Item href="#action/3.4">Separated link</ReactBootStrap.NavDropdown.Item> */}
            </ReactBootStrap.NavDropdown>
          </ReactBootStrap.Nav>
          {/* <ReactBootStrap.Nav>
                        <ReactBootStrap.Nav.Link href="#deets">More deets</ReactBootStrap.Nav.Link>
                        <ReactBootStrap.Nav.Link eventKey={2} href="#memes">Dank memes</ReactBootStrap.Nav.Link>
                    </ReactBootStrap.Nav> */}
        </ReactBootStrap.Navbar.Collapse>
      </ReactBootStrap.Navbar>

      <div className="header-route">
        <Switch>
          <Route exact path="/home">
            <Home />
          </Route>
          {/* <Route exact path='/favorites'><Favorites /></Route> */}
          <Route exact path="/history">
            <History />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </header>
  );
};

export default Header;
