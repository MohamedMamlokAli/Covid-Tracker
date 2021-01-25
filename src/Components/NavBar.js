import React from 'react'
import {Navbar,Nav,Container} from 'react-bootstrap';
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
      <Nav.Link className=" text-white mx-3" href="/info">Precautions</Nav.Link>
      <Nav.Link className=" text-white mx-3" href="/today">Today's Cases</Nav.Link>
      <Nav.Link className=" text-white mx-3" href="/yesterday">Yesterday's Cases</Nav.Link>
    </Nav>
    
  </Navbar.Collapse>
</Navbar>

   </Container>
 )

}

export default NavBar
