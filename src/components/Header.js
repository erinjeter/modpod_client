import React, { useState, useEffect } from "react";
import * as ReactBootStrap from "react-bootstrap";

import Podcasts from "../components/podcast/Podcasts";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

import Home from "./Home";
import Carousel from "./Carousel";
import { Route, Switch, Link } from "react-router-dom";
import Signup from "./Signup";
import Login from "./Login";
import FavoritesFetch from "./podcast/FavoritesFetch";

const Header = (props) => {
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

  const [signup, setSignup] = useState(false);
  const [login, setLogin] = useState(false);
  const [logout, setLogout] = useState(false);
  const toggle_signup = () => setSignup(!signup);
  const toggle_login = () => setLogin(!login);
  const toggle_logout = () => setLogout(!logout);

  function authButton() {
    return localStorage.getItem("token") != null ? (
      ""
    ) : (
      <>
        <li>
          <button
            style={{ color: "white" }}
            className="btn btn-primary-outline"
            id="signup"
            onClick={toggle_signup}
          >
            Signup
          </button>
        </li>
        <li>
          <button
            style={{ color: "white" }}
            className="btn btn-primary-outline"
            id="login"
            onClick={toggle_login}
          >
            Login
          </button>
        </li>
      </>
    );
  }

  function logoutButton() {
    return localStorage.getItem("token") === null ? (
      ""
    ) : (
      <>
        <li>
          <button
            style={{ color: "white" }}
            className="btn btn-primary-outline"
            id="logout"
            onClick={clearToken}
          >
            Logout
          </button>
        </li>
      </>
    );
  }

  return (
    <header>
      <ReactBootStrap.Navbar
        collapseOnSelect
        expand="md"
        bg="dark"
        variant="dark"
      >
        <ReactBootStrap.Navbar.Brand href="/">
          MODPOD
        </ReactBootStrap.Navbar.Brand>
        <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
          <ReactBootStrap.Nav className="mr-auto">
            <Link to="/favorites">
              <ReactBootStrap.Nav.Link
                href="/favorites"
                style={{ color: "white" }}
              >
                Favorites
              </ReactBootStrap.Nav.Link>
            </Link>
          </ReactBootStrap.Nav>

          <ReactBootStrap.Form inline></ReactBootStrap.Form>

          <ul className="nav navbar-nav navbar-right">
            {authButton()}

            {logoutButton()}
          </ul>
        </ReactBootStrap.Navbar.Collapse>
      </ReactBootStrap.Navbar>
      <Carousel />
      <div className="header-route">
        <Switch>
          <Route exact path="/">
            <Podcasts />
          </Route>
          <Route exact path="/favorites">
            <FavoritesFetch />
          </Route>
        </Switch>
      </div>
      {/* Sign up modal */}
      <Modal isOpen={signup} toggle={toggle_signup}>
        <div className="modal-body">
          <h2>
            Get Started Absolutely<span> Free!</span>
          </h2>
          <span className="subtitle">No credit card needed</span>

          <div className="form-group">
            <Signup
              updateToken={updateToken}
              setSignup={setSignup}
              type="password"
              name="pass"
              className="form-control"
              placeholder="Password"
              required=""
              autocomplete="off"
              aria-required="true"
            />
          </div>
        </div>
      </Modal>
      {/* <!-- signUp End -->
                  <!-- login --> */}
      <Modal isOpen={login} toggle={toggle_login}>
        <div className="modal-body">
          <h2>
            Login and Get <span>Started</span>
          </h2>
          {/* <span className="subtitle">Complete the form below!</span> */}

          <div className="form-group">
            <Login
              updateToken={updateToken}
              setLogin={setLogin}
              className="form-control"
              type="email"
              name="email"
              placeholder="E-mail"
              required=""
              autocomplete="off"
              aria-required="true"
            />
          </div>
        </div>
      </Modal>
    </header>
  );
};
export default Header;
