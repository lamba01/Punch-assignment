import React from 'react';
import '../styles/navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/path-to-your-logo.png" alt="Logo" />
      </div>
      <ul className="navbar-links">
        <li><a href="#find-work">Find Work</a></li>
        <li><a href="#find-talent">Find Talent</a></li>
        <li><a href="#articles">Articles</a></li>
        <li><a href="#about-us">About Us</a></li>
        <li><a href="#contact-us">Contact Us</a></li>
      </ul>
      <div className="navbar-buttons">
        <a href="#login" className="login-button">Log In</a>
        <a href="#join-us" className="join-button">Join Now</a>
      </div>
    </nav>
  );
};

export default Navbar;
