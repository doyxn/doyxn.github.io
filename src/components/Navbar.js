import React from 'react';
import '../stylesheets//Navbar.css'; // Add custom styling

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        Adedoyin Famuyiwa
      </div>
      <ul className="navbar-links">
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;