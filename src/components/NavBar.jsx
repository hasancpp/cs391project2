import React, { Component } from 'react';
import Logo from '../assets/logo-cream.png';
import './NavBar-Footer.css';
import { Navbar, Nav } from 'react-bootstrap'

class NavBar extends Component { 
  
  state = {}
  render() {
    return (
    <Navbar bg="secondary" >
      <Navbar.Brand href="#home">
        <img
          src={Logo}
          width="60"
          height="60"
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
        />
        <a class="marmotte" href="/" style={{color:'white'}}>La Marmotte</a>
      </Navbar.Brand>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <Nav>
            <Nav.Link href="/" style={{ color: "white", fontSize: 18, marginRight: '20px', textDecoration: 'none'}}>Home</Nav.Link>
            <Nav.Link href="/categories" style={{ color: "white", fontSize: 18, marginRight: '20px', textDecoration: 'none' }}>Categories</Nav.Link>
            <Nav.Link href="/add_recipe" style={{ color: "white", fontSize: 18, marginRight: '20px', textDecoration: 'none' }}>Add Recipe</Nav.Link>
        </Nav>
      </div>
    </Navbar>);
  }
}

export default NavBar;

