import React from 'react';
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
            <h1>Aidan Andrews</h1>
            <p>Mathematics & Computer Science, Aspiring Savant</p>
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
        <a href="#about" className="nav-link">
          About
        </a>
        <a href="#projects" className="nav-link">
          Projects
        </a>
        <a href="#bookshelf" className="nav-link">
          Bookshelf
        </a>
        <a href="#blog" className="nav-link">
          Blog
        </a>
      </nav>
    </>
  );
};

export default Navbar;
