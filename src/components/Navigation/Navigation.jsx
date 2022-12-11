import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../images/logo.png'
import { useNavigate } from "react-router-dom"

const Navigation = () => {
  const navigate = useNavigate()
    return (
        <div>
            <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
            <img style={{width: "100px"}} src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className='justify-content-end' id="basic-navbar-nav ">
          <Nav className="">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#home">Blog</Nav.Link>
            <Nav.Link href="#home">About</Nav.Link>
            <Nav.Link onClick={()=>navigate('/SignIn')}>LogIn</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    );
};

export default Navigation;