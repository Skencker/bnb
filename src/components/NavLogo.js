import React from "react";
import logo from "./logo.png";
import './NavLogo.css'

const NavLogo = () => {
  return (
    <div className="nav-logo">
      <img className = "img-logo" src={logo} alt="" />
    </div>
  );
};

export default NavLogo;
