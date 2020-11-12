import React from "react";
import "./NavBar.css";

const NavBar = () => {
  return (
    <>
      <ul className="nav-bar-items">
        <li className="nav-bar-item">
          <a href="/"> Devenir Hote</a>
        </li>
        <li className="nav-bar-item">
          <a href="/">Aide</a>
        </li>
        <li className="nav-bar-item">
          <a href="/">Inscription</a>
        </li>
        <li className="nav-bar-item">
          <a href="/">Connexion</a>
        </li>
      </ul>
    </>
  );
};

export default NavBar;
