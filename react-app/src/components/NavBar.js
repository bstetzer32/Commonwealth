import React from "react";
import { NavLink } from "react-router-dom";
import SearchBar from "./Search";
import Discover from "./utils/Menus/Discover";
import LoginMenu from "./utils/Menus/LoginMenu";
const NavBar = () => {
  return (
    <nav className="nav__bar">
      <div className="nav__element--discover">
        <Discover className="nav__element" />
      </div>
      <NavLink to='/'className="nav__element" id="nav__logo">
        commonwealth
      </NavLink>
      <div className="nav__element--searchlog">
        <SearchBar id="nav__element--searchBar" />
        <LoginMenu className="nav__element" id="nav__element--loginMenu" />
      </div>
    </nav>
  );
};

export default NavBar;
