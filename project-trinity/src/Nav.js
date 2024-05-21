
// Global Styling
import './styling/Nav.css';

// Local Styling
import './styling/Nav.css';

// Components
import React from 'react';

// Assets
import logo from './assets/logo.svg'

function Nav() {
  return (
    <nav className="navbar">
      <div className="navbar-emblem">
        <img id="emblem" src={logo} alt="emblem of trinity la"/>
      </div>
      <div className="nav-menu">
        <a className="hover-underline" href="#">Shop</a>
        <a className="hover-underline" href="#">Contact</a>
        <a className="hover-underline" href="#">About</a>
      </div>
     
    </nav>
  );
}

export default Nav;
