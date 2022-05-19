import React from 'react';

import {Navbar, Nav, Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';


const Header = () => {



    return (
        <div className='header'>
     <Navbar bg="" expand="lg">
    <Container>
    <Navbar.Brand href="#">
        <strong>Fridge House</strong>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
        <Nav
        className="ms-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Link to='/'>Home</Link>
        <Link to='/blog'>Blog</Link>
        <Link to='/login'>Log in</Link>
        <Link to='/signup'>Sign up</Link>



        {/* <Nav.Link to='/'>Home</Nav.Link>
        <Nav.Link to="/blog">Blog</Nav.Link> */}

      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Header;