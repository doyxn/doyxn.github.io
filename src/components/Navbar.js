import React from 'react';
import { Link } from"react-router-dom";
import '../stylesheets/App.css';
import headshot from "./images/headshot.png"

const Navbar = () => {
  return (
    <>
      <header className="header-container">
        <div className="profile-card">
          <img
            src={headshot} // Replace with actual image URL
            alt="Profile"
            className="profile-picture"
          />
          <div className="profile-info">
            <h1>Adedoyin A. Famuyiwa</h1>
            <p>Mathematics & Computer Science</p>
            <p>West Lafayette, Indiana</p>
            {/* <div className="contact-links">
              <a href="#email">Email</a> | <a href="#phone">Phone</a> |{' '}
              <a href="#linkedin">LinkedIn</a> | <a href="#github">GitHub</a> |{' '}
              <a href="#instagram">Instagram</a> | <a href="#youtube">YouTube</a>
            </div> */}
          </div>
        </div>
      </header>
      <nav className="navigation-bar">
        <Link to ="/about" className="nav-link"> ABOUT </Link>
        <Link to ="/projects" className="nav-link"> PROJECTS</Link>
        <Link to ="/bookshelf" className="nav-link">BOOKSHELF</Link>
        <Link to ="/blog" className="nav-link">BLOG</Link>
      </nav>
    </>
  );
};

export default Navbar;
