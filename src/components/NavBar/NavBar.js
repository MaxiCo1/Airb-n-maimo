import React from "react";
import logo from '../../assets/images/airbnb_logo.png';
import usuario from '../../assets/images/usuario.png';

const NavBar = () => {
  return (
    <nav
      className="navbar"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <a className="navbar-item has-text-weight-bold" href="https://bulma.io">
          <img src={logo} alt=""/>
        </a>
        <a className="navbar-item has-text-weight-bold" href="https://bulma.io">
          <p>Airb-n-Maimo</p>
        </a>
        

        <a
          href="#kk"
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start"></div>
        <div className="navbar-end">
          <div className="navbar-item">
            <img src={usuario} alt="" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
