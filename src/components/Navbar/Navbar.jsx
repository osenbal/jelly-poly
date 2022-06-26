/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import HamburgerMenu from './HamburgerMenu/HamburgerMenu';

import './Navbar.css';

function Navbar() {
  return (
    <div id="navbar-jellyPoli">
      <div id="myNav" className="overlay">
        <a
          className="closebtn"
          onClick={() => (document.getElementById('myNav').style.height = '0%')}
        >
          &times;
        </a>
        <div className="overlay-content">
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Clients</a>
          <a href="#">Contact</a>
        </div>
      </div>
      <nav className="my_navbar">
        <div className="logo-wrapper">
          <img src="./img/Logo.svg" alt="Logo" />
        </div>
        <HamburgerMenu />
      </nav>
    </div>
  );
}

export default Navbar;
