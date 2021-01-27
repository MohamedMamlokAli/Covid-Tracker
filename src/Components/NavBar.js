import React from 'react'
import {Navbar,Nav,Container} from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import img from "./Images/mask.svg"
const NavBar = () => {
 return (
   <Container variant="dark" className="text-white">
   <Navbar className="nav-width" collapseOnSelect  expand="lg"  variant="dark">
  <Navbar.Brand href="/">
    <img className="logo-img" src={img} alt=""/>
Covid-19 Tracker</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link className=" text-white mx-3" href="">
                      <NavLink
                className="text-white mx-3 "
                to="/info"
                exact
              >
                Precautions
              </NavLink>

        </Nav.Link>
      <Nav.Link className=" text-white mx-3" href="">
                              <NavLink
                className="text-white mx-3 "
                to="/today"
                exact
              >
                Today's Cases
              </NavLink>

        </Nav.Link>
      <Nav.Link className=" text-white mx-3" href="">
                              <NavLink
                className="text-white mx-3 "
                to="/yesterday"
                exact
              >
                Yesterday's Cases
              </NavLink>
        </Nav.Link>
    </Nav>
    
  </Navbar.Collapse>
</Navbar>

   </Container>
 )

}

export default NavBar
