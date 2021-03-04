import React, { useState } from "react";
import * as ReactBootStrap from "react-bootstrap";
// import Modal from "react-responsive-modal";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

// import Switch from 'react-bootstrap/esm/Switch';
// import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap'; //tara commented out


import Home from './Home';
import History from './History';
import Test from './Test';
import Carousel from './Carousel';
// import Auth from './auth/Auth.js';
// import Modal from './Modal';

// import Signup from "./auth/Signup";
// import Login from "./auth/Login";
// import Modal from 'react-responsive-modal';
// import Modal from 'react-bootstrap/Modal';
// import ModalDialog from 'react-bootstrap/ModalDialog';
// import ModalHeader from 'react-bootstrap/ModalHeader';
// import ModalTitle from 'react-bootstrap/ModalTitle';
// import ModalBody from 'react-bootstrap/ModalBody';
// import ModalFooter from 'react-bootstrap/ModalFooter';

import {
    Route,
    Link,
    Text,
    Nav,
    Navbar,
    Switch
} from 'react-router-dom';
import Signup from "./Signup";







const Header = () => {


    const [signup, setSignup] = useState(false);
    const [login, setLogin] = useState(false);


    const toggle_signup = () => setSignup(!signup);
    const toggle_login = () => setLogin(!login);



    // const onCloseModal = () => {
    //     setSignup({ signup: false });
    // };

    // const onCloseModalclose = () => {
    //     setLogin({ login: false });
    // };





    return (
        <header>
            <ReactBootStrap.Navbar collapseOnSelect expand="md" bg="dark" variant="dark"> {/*tara - breakpts - expand={'sm' | 'md' | 'lg' | 'xl'}*/}
                <ReactBootStrap.Navbar.Brand href="/home">MODPOD</ReactBootStrap.Navbar.Brand>
                <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
                    <ReactBootStrap.Nav className="mr-auto">

                        <ReactBootStrap.Nav.Link href="/favorites">Favorites</ReactBootStrap.Nav.Link>
                        <ReactBootStrap.Nav.Link href="/history">History</ReactBootStrap.Nav.Link>
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
                        <ReactBootStrap.FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <ReactBootStrap.Button variant="primary">Search</ReactBootStrap.Button>
                    </ReactBootStrap.Form>

                    {/* <ReactBootStrap.Nav.Link href="/signup">Sign Up</ReactBootStrap.Nav.Link>
                    <ReactBootStrap.Nav.Link href="/login">Login</ReactBootStrap.Nav.Link> */}
                    <ul className="nav navbar-nav navbar-right">
                        <li>
                            <button className="btn btn-primary-outline" id="signup" onClick={toggle_signup}>SignUp</button>
                        </li>
                        <li>
                            <button className="btn btn-primary-outline" id="login" onClick={toggle_login}>Login</button>
                        </li>
                    </ul>


                    {/* <ReactBootStrap.Nav>
                        <ReactBootStrap.Nav.Link href="#deets">More deets</ReactBootStrap.Nav.Link>
                        <ReactBootStrap.Nav.Link eventKey={2} href="#memes">Dank memes</ReactBootStrap.Nav.Link>
                    </ReactBootStrap.Nav> */}
                </ReactBootStrap.Navbar.Collapse>

            </ReactBootStrap.Navbar >

            <Carousel />
            <div className='header-route'>
                <Switch>
                    <Route exact path='/home'><Home /></Route>
                    <Route exact path='/history'><History /></Route>
                    <Route exact path='/test'><Test /></Route>
                    <Route exact path='/'><Home /></Route>
                    {/* <Route exact path='/signup'><Signup /></Route> */}
                    {/* <Route exact path='/auth/login'><Login /></Route> */}
                </Switch>


            </div>

            {/* Sign up model */}

            <Modal isOpen={signup} toggle={toggle_signup}>
                <div className="modal-body">
                    <h2>Get Started Absolutely<span> Free!</span></h2>
                    <span className="subtitle">No credit card needed</span>
                    <form className="contact-form form-validate3" novalidate="novalidate">
                        <div className="form-group">
                            <input className="form-control" type="text" name="name" id="name" placeholder="First & Last Name" required="" autocomplete="off" aria-required="true" />
                        </div>
                        <div className="form-group">
                            <input className="form-control" type="email" name="email" placeholder="E-mail" required="" autocomplete="off" aria-required="true" />
                        </div>
                        <div className="form-group">
                            <input type="password" name="pass" className="form-control" placeholder="Password" required="" autocomplete="off" aria-required="true" />
                        </div>
                        <input className="btn btn-md btn-primary btn-center" id="sign_up" type="button" value="Sign Up" />
                    </form>
                </div>
            </Modal>

            {/* <!-- signUp End -->
                  <!-- login --> */}

            <Modal isOpen={login} toggle={toggle_login}>

                <div className="modal-body">
                    <h2>Login and Get <span>Started</span></h2>
                    <span className="subtitle">Complete the form below!</span>
                    <form className="contact-form form-validate4" novalidate="novalidate">
                        <div className="form-group">
                            <input className="form-control" type="email" name="email" placeholder="E-mail" required="" autocomplete="off" aria-required="true" />
                        </div>
                        <div className="form-group">
                            <input type="password" name="pass" className="form-control" placeholder="Password" required="" autocomplete="off" aria-required="true" />
                        </div>
                        <input className="btn btn-md btn-primary btn-center" id="login_btn" type="button" value="Login" />
                    </form>
                </div>
            </Modal>


        </header >



    );
};

export default Header;
