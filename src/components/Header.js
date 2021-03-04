import React from "react";
import * as ReactBootStrap from "react-bootstrap";
// import Switch from 'react-bootstrap/esm/Switch';
// import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap'; //tara commented out

import Home from "./Home";
import History from "./History";
import Test from "./Test";
import Carousel from "./Carousel";
// import Signup from "./auth/Signup";
// import Login from "./auth/Login";

import { Route, Link, Text, Nav, Navbar, Switch } from "react-router-dom";

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
        <ReactBootStrap.Navbar.Brand href="/home">
          MODPOD
        </ReactBootStrap.Navbar.Brand>
        <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
          <ReactBootStrap.Nav className="mr-auto">
            <ReactBootStrap.Nav.Link href="/favorites">
              Favorites
            </ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link href="/history">
              History
            </ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link href="/test">Test</ReactBootStrap.Nav.Link>

            {/* <ReactBootStrap.Navbar.Text><a href="/favorites">Favorites</a></ReactBootStrap.Navbar.Text>
                        <ReactBootStrap.Navbar.Text><a href="/history">History</a></ReactBootStrap.Navbar.Text>
                        <ReactBootStrap.Navbar.Text><a href="/test">Test</a></ReactBootStrap.Navbar.Text> */}

            {/* <ReactBootStrap.NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
                            <ReactBootStrap.NavDropdown.Item href="#action/3.1">Action</ReactBootStrap.NavDropdown.Item>
                            <ReactBootStrap.NavDropdown.Item href="#action/3.2">Another action</ReactBootStrap.NavDropdown.Item>
                            <ReactBootStrap.NavDropdown.Item href="#action/3.3">Something</ReactBootStrap.NavDropdown.Item>
                            <ReactBootStrap.NavDropdown.Divider />
                            <ReactBootStrap.NavDropdown.Item href="#action/3.4">Separated link</ReactBootStrap.NavDropdown.Item>
                        </ReactBootStrap.NavDropdown> */}
          </ReactBootStrap.Nav>

          <ReactBootStrap.Form inline>
            <ReactBootStrap.FormControl
              type="text"
              placeholder="Search"
              className="mr-sm-2"
            />
            <ReactBootStrap.Button variant="primary">
              Search
            </ReactBootStrap.Button>
          </ReactBootStrap.Form>

          <ReactBootStrap.Nav.Link href="/auth/signup">
            Sign Up
          </ReactBootStrap.Nav.Link>
          <ReactBootStrap.Nav.Link href="/auth/login">
            Login
          </ReactBootStrap.Nav.Link>
          {/* <ReactBootStrap.Nav>
                        <ReactBootStrap.Nav.Link href="#deets">More deets</ReactBootStrap.Nav.Link>
                        <ReactBootStrap.Nav.Link eventKey={2} href="#memes">Dank memes</ReactBootStrap.Nav.Link>
                    </ReactBootStrap.Nav> */}
        </ReactBootStrap.Navbar.Collapse>
      </ReactBootStrap.Navbar>

      <Carousel />
      <div className="header-route">
        <Switch>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/history">
            <History />
          </Route>
          <Route exact path="/test">
            <Test />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>

          {/* <Route exact path='/signup'><Signup /></Route> */}
          {/* <Route exact path='/auth/login'><Login /></Route> */}
        </Switch>
      </div>
    </header>
  );
};

export default Header;
