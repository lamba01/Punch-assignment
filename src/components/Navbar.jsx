import React, { useState } from 'react';
import logo from '../assets/images/logo.png'
import { IoCloseSharp } from "react-icons/io5";
import { FiMenu } from "react-icons/fi";
import '../styles/navbar.css'; 

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" />
      </div>
      <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
        <li><a href="#find-work">Find Work</a></li>
        <li><a href="#find-talent">Find Talent</a></li>
        <li><a href="#articles">Articles</a></li>
        <li><a href="#about-us">About Us</a></li>
        <li><a href="#contact-us">Contact Us</a></li>
        <div className="mobile-navbar-buttons">
        <a href="#login" className="login-button">Log In</a>
        <a href="#join-us" className="join-button">Join Now</a>
      </div>
      </ul>
      <div className="navbar-buttons">
        <a href="#login" className="login-button">Log In</a>
        <a href="#join-us" className="join-button">Join Now</a>
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        {menuOpen ? <IoCloseSharp  className='mobile-menu' /> : <FiMenu className='mobile-menu'/>}
      </div>
    </nav>
  );
}

export default Navbar;
