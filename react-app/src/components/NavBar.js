import React from "react";
import { NavLink } from "react-router-dom";
import LogoutButton from "./auth/LogoutButton";
import Button from "@material-ui/core/Button";
import SearchBar from "./Search";
import Discover from "./utils/Menus/Discover";
import LoginMenu from "./utils/Menus/LoginMenu";

const NavBar = () => {
  return (
    <nav className="nav__bar">
      <div className="nav__element--discover">
        <Discover className="nav__element" />
      </div>
      <div className="nav__element" id="nav__logo">
        commonwealth
      </div>
      <div className="nav__element--searchlog">
        <SearchBar id="nav__element--searchBar" />
        <LoginMenu className="nav__element" id="nav__element--loginMenu" />
      </div>
    </nav>
  );
};

export default NavBar;
