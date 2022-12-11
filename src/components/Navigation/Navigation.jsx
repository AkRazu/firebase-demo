import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../images/logo.png'
import { useNavigate } from "react-router-dom"
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../firebase/firebase.init';

const Navigation = () => {
  const navigate = useNavigate()
  const [user ,setUser] = useState({});
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log(user);
                const userName = user;
              setUser(userName);
            } else {
                setUser({});
            }
          });
    },[])
    const handelLogout = ()=>{
      signOut(auth).then(() => {
        navigate('/SignIn')
      }).catch((error) => {
        // An error happened.
      });
    }
    
  
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
            {user?.uid ? (
                <Nav.Link onClick={handelLogout} href="#link">Logout</Nav.Link>
              ) : (
                <Nav.Link >Login</Nav.Link>
              )}
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    );
};

export default Navigation;