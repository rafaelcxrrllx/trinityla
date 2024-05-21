import React from 'react';
import './styling/Nav.css';
import logo from './assets/logo.svg'

function Nav() {
  return (
    <nav className="navbar">

      <div className="navbar-emblem">
        <img id="emblem" src={logo} alt="emblem of trinity la"/>
      </div>
      <div className="nav-menu">
        <div><p>Shop</p></div>
        <div><p>Contact</p></div>
        <div><p>About</p></div>
      </div>
     
    </nav>
  );
}

export default Nav;
