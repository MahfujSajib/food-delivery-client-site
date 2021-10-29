import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <Navbar className="navbar" collapseOnSelect expand="lg" sticky="top">
            <Nav className="navbar">
                <Link className='link' to='/home'>Home</Link>
                <Link className='link' to='/aboutus'>About</Link>
                <Link className='link' to='/contact'>Contact</Link>
                <Link className='link' to='/login'>Log in</Link>
            </Nav>
            <h1 className="name">Food Lagbe?</h1>


        </Navbar>
    );
};

export default Header;