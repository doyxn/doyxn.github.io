import React from 'react';
import { Link } from"react-router-dom";
import '../stylesheets/App.css';
import headshot from "../images/headshot.png"

const Navbar = () => {
  return (
    <>
      <header className="header-container">
        <div className="profile-card">
          <img
            src={headshot} 
            alt="Profile"
            className="profile-picture"
          />
          <div className="profile-info">
            <h1>Adedoyin A. Famuyiwa</h1>
            <p>Mathematics & Computer Science</p>
            <p>Westfield, Indiana</p>
          </div>
        </div>
      </header>
      <nav className="navigation-bar">
        <Link to ="/about" className="nav-link"> ABOUT </Link>
        <Link to ="/projects" className="nav-link"> PROJECTS</Link>
        <Link to ="/writing" className="nav-link"> WRITING</Link>
      </nav>
    </>
  );
};

export default Navbar;
