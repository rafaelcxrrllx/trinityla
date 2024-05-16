import React from 'react';
import './styling/Nav.css';
import emblem from './assets/emblem.svg'

function Nav() {
  return (
    <nav className="navbar">

      <div className="navbar-emblem">
        <img id="emblem" src={emblem} alt="emblem of trinity la"/>
      </div>
      <div className="nav-menu">
        <div><h3>Shop</h3></div>
        <div><h3>Contact</h3></div>
        <div><h3>About</h3></div>
      </div>
     
    </nav>
  );
}

export default Nav;
