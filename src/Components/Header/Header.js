import { signOut } from 'firebase/auth';
import React from 'react';

import {Navbar, Nav, Container} from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import './Header.css';


const Header = () => {

  const [user, loading, error] = useAuthState(auth);
  const logout = () => {
      signOut(auth);
    };

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
        {
          user? <>
            <Link to='/additem'>Add item</Link>
          <button onClick={logout}
          className='log-out'>Log out</button>
          </>: 
          
          <Link to='/login'>Log in</Link>

        }
        <Link to='/signup'>Sign up</Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Header;