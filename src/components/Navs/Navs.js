import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./Navs.css";
import logo from './../../assets/logo.png'

const Navs = () => {
    return (
        <Navbar expand="lg">
          <Container>
            <Navbar.Brand href="#home">
                <img src={logo} title="logo" alt=""/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#About">About Us</Nav.Link>
                <Nav.Link href="#Explore">Explore Foods</Nav.Link>
                <Nav.Link href="#Reviews">Reviews</Nav.Link>
                <Nav.Link href="#FAQ">FAQ</Nav.Link>
                <Nav>
                  <Nav.Link id="lastnav" >25346154</Nav.Link>
                </Nav>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
    }

export default Navs;